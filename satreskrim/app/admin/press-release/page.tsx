"use client";


import Image from "next/image";
import { useEffect, useState } from "react";
import { supabase } from "../../../lib/supabase/client";

type PressReleaseType = {
  id: number;
  judul: string;
  deskripsi: string;
  foto_url: string | null;
  created_at: string;
};

export default function PressRelease() {
  const [pressReleases, setPressReleases] = useState<PressReleaseType[]>([]);
  const [judul, setJudul] = useState("");
  const [deskripsi, setDeskripsi] = useState("");
  const [created_at, setCreated_At] = useState("");
  const [foto, setFoto] = useState<File | null>(null);
  const [showModal, setShowModal] = useState(false);
  const [selected, setSelected] = useState<PressReleaseType | null>(null);
  const [editMode, setEditMode] = useState(false);

  
  // === FETCH DATA ===
  const fetchData = async () => {
    const { data, error } = await supabase
      .from("press_release")
      .select("*")
      .order("id", { ascending: false });

    if (error) console.error("Fetch error:", error.message);
    else setPressReleases(data || []);
  };

  useEffect(() => {
    fetchData();
  }, []);

  // === CREATE ===
  const handleAdd = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!judul || !deskripsi) {
      alert("Isi Semua Kolom Terlebih Dahulu!");
      return;
    }

    if (!foto) {
      alert("Pilih Foto Terlebih Dahulu!");
      return;
    }

    try {
      // Buat nama file unik
      const fileName = `${Date.now()}-${foto.name}`;

      // Upload ke bucket "press-release"
      const { error: uploadError } = await supabase.storage
        .from("press-release")
        .upload(fileName, foto);

      if (uploadError) {
        console.error("Upload Error:", uploadError.message);
        alert("Gagal Unggah Foto!");
        return;
      }

      // Ambil URL public
      const { data: publicData } = supabase.storage
        .from("press-release")
        .getPublicUrl(fileName);
      const fotoUrl = publicData.publicUrl;

      // Masukkan ke database
      const { error: insertError } = await supabase
        .from("press_release")
        .insert([{ judul, deskripsi, foto_url: fotoUrl }]);

      if (insertError) {
        console.error("Insert Error:", insertError.message);
        alert("Gagal Menyimpan Data!");
      } else {
        alert("Press Release Baru Berhasil Ditambahkan!");
        setShowModal(false);
        setJudul("");
        setDeskripsi("");
        setFoto(null);
        fetchData();
      }
    } catch (err) {
      console.error("Unexpected Error:", err);
    }
  };

  // === UPDATE ===
  const handleEdit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!selected) return;

    try {
      let fotoUrl = selected.foto_url;

      if (foto) {
        const fileName = `${Date.now()}-${foto.name}`;
        const { error: uploadError } = await supabase.storage
          .from("press-release")
          .upload(fileName, foto);

        if (uploadError) {
          console.error("Upload Error:", uploadError.message);
          alert("Gagal Unggah Foto Baru!");
          return;
        }

        const { data: publicData } = supabase.storage
          .from("press-release")
          .getPublicUrl(fileName);
        fotoUrl = publicData.publicUrl;
      }

      const { error: updateError } = await supabase
        .from("press_release")
        .update({
          judul: selected.judul,
          deskripsi: selected.deskripsi,
          foto_url: fotoUrl,
        })
        .eq("id", selected.id);

      if (updateError) {
        console.error("Update Error:", updateError.message);
        alert("Gagal Mengedit Data!");
      } else {
        alert("Data Berhasil Diedit!");
        setEditMode(false);
        setSelected(null);
        fetchData();
      }
    } catch (err) {
      console.error("Unexpected Error:", err);
    }
  };

  // === DELETE ===
  const handleDelete = async (id: number) => {
    if (!confirm("Yakin Ingin Menghapus Data?")) return;
    const { error } = await supabase
      .from("press_release")
      .delete()
      .eq("id", id);

    if (error) {
      console.error(error);
      alert("Gagal Menghapus Data!");
    } else {
      alert("Berhasil Dihapus!");
      // Update state supaya tampilan ikut berubah
      setPressReleases((prev) => prev.filter((item) => item.id !== id));
    }
    if (!error) {
      alert("Berhasil Dihapus!");
      setSelected(null); // <-- ini untuk nutup modal
      setPressReleases((prev) => prev.filter((item) => item.id !== id));
    }
  };

  return (
    <div className="bg-gray-100 pl-80 pt-30 p-6 min-h-screen">
      {/* === ADD BUTTON === */}
      <button
        onClick={() => setShowModal(true)}
        className="mb-6 text-white bg-blue-700 hover:bg-blue-800 font-medium rounded-lg text-sm px-5 py-2.5"
      >
        Tambah Press Release
      </button>

      {/* === CARD LIST === */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {pressReleases.map((item) => (
          <div
            key={item.id}
            className="bg-white rounded-lg shadow hover:shadow-lg cursor-pointer transition p-4"
            onClick={() => setSelected(item)}
          >
            <Image
              src={item.foto_url || "/no-image.png"}
              alt={item.judul}
              className="w-full h-48 object-cover rounded-lg mb-3"
            />
            <h3 className="text-lg text-gray-700 font-semibold mb-2">
              {item.judul}
            </h3>
            <p className="text-sm text-gray-500 mb-2">
              {typeof window !== "undefined" &&
                new Date(item.created_at).toLocaleDateString("id-ID", {
                  day: "2-digit",
                  month: "long",
                  year: "numeric",
                })}
            </p>

            <p className="text-gray-600 text-sm line-clamp-3">
              {item.deskripsi}
            </p>
          </div>
        ))}
      </div>

      {/* === MODAL ADD === */}
      {showModal && (
        <div
          id="crud-modal"
          tabIndex={-1}
          aria-hidden="true"
          className="fixed inset-0 z-50 flex justify-center items-center bg-black/50"
        >
          <div className="relative p-4 w-full max-w-md max-h-full">
            <div className="relative bg-white rounded-lg shadow-sm">
              <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t border-gray-200">
                <h3 className="text-lg font-semibold text-gray-900">
                  Tambah Press Release Baru
                </h3>
                <button
                  onClick={() => setShowModal(false)}
                  className="absolute top-3 right-3 text-gray-500 hover:text-gray-800"
                >
                  ✕
                </button>
              </div>
              <form className="p-4 md:p-5" onSubmit={handleAdd}>
                <div className="grid gap-4 mb-4 grid-cols-2">
                  <div className="col-span-2">
                    <label className="block mb-2 text-sm font-medium text-gray-900">
                      Judul
                    </label>
                    <input
                      type="text"
                      value={judul}
                      onChange={(e) => setJudul(e.target.value)}
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 block w-full p-2.5"
                      required
                    />
                  </div>

                  <div className="col-span-2">
                    <label className="block mb-2 text-sm font-medium text-gray-900">
                      Deskripsi
                    </label>
                    <textarea
                      value={deskripsi}
                      onChange={(e) => setDeskripsi(e.target.value)}
                      className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500"
                      required
                    ></textarea>
                  </div>

                  <div className="col-span-2">
                    <label className="block mb-2 text-sm font-medium text-gray-900">
                      Upload Foto
                    </label>
                    <input
                      type="file"
                      accept="image/*"
                      onChange={(e) => setFoto(e.target.files?.[0] || null)}
                      className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50"
                      required
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  className="text-white inline-flex items-center bg-blue-700 hover:bg-blue-800 focus:ring-4 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
                >
                  Simpan
                </button>
              </form>
            </div>
          </div>
        </div>
      )}

      {/* === MODAL DETAIL / EDIT === */}
      {selected && (
        <div
          id="crud-modal"
          tabIndex={-1}
          aria-hidden="true"
          className="fixed inset-0 z-50 flex justify-center items-center bg-black/50"
        >
          <div className="relative p-4 w-full max-w-md max-h-full">
            <div className="relative bg-white rounded-lg shadow-sm">
              <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t border-gray-200">
                <h3 className="text-lg font-semibold text-gray-900">
                  Edit Press Release
                </h3>
                <button
                  onClick={() => setSelected(null)}
                  className="absolute top-3 right-3 text-gray-500 hover:text-gray-800"
                >
                  ✕
                </button>
              </div>
              {editMode ? (
                <form className="p-4 md:p-5" onSubmit={handleEdit}>
                  <div className="grid gap-4 mb-4 grid-cols-2">
                    <div className="col-span-2">
                      <label className="block mb-2 text-sm font-medium text-gray-900">
                        Judul
                      </label>
                      <input
                        type="text"
                        value={selected.judul}
                        onChange={(e) =>
                          setSelected({ ...selected, judul: e.target.value })
                        }
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 block w-full p-2.5"
                      />
                    </div>

                    <div className="col-span-2">
                      <label className="block mb-2 text-sm font-medium text-gray-900">
                        Deskripsi
                      </label>
                      <textarea
                        value={selected.deskripsi}
                        onChange={(e) =>
                          setSelected({
                            ...selected,
                            deskripsi: e.target.value,
                          })
                        }
                        className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500"
                      ></textarea>
                    </div>

                    <div className="col-span-2">
                      <label className="block mb-2 text-sm font-medium text-gray-900">
                        Edit Foto
                      </label>
                      <input
                        type="file"
                        onChange={(e) => setFoto(e.target.files?.[0] || null)}
                        className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50"
                      />
                    </div>
                  </div>

                  <button
                    type="submit"
                    className="text-white inline-flex items-center bg-blue-700 hover:bg-blue-800 focus:ring-4 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
                  >
                    Simpan Perubahan
                  </button>
                </form>
              ) : (
                <>
                  <div className="p-4 md:p-5">
                    <Image
                      src={selected.foto_url || "/no-image.png"}
                      alt={selected.judul}
                      className="w-full h-56 object-cover rounded mb-3"
                    />
                    <h2 className="text-lg text-gray-700 font-bold mb-2">
                      {selected.judul}
                    </h2>
                    <p className="text-sm text-gray-500 mb-2">
                      {typeof window !== "undefined" &&
                        new Date(selected.created_at).toLocaleDateString(
                          "id-ID",
                          {
                            day: "2-digit",
                            month: "long",
                            year: "numeric",
                          }
                        )}
                    </p>

                    <p className="text-gray-700 mb-4">{selected.deskripsi}</p>
                    <div className="flex justify-between">
                      <button
                        onClick={() => setEditMode(true)}
                        className="bg-yellow-500 text-white px-4 py-2 rounded"
                      >
                        Edit
                      </button>
                      <button
                        onClick={() => handleDelete(selected.id)}
                        className="bg-red-600 text-white px-4 py-2 rounded"
                      >
                        Hapus
                      </button>
                    </div>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
