"use client";

import { useEffect, useState } from "react";
import { supabase } from "../../lib/supabase/client";
import PembuatanBAP from "../../components/pembuatanBAP";
import PelayananSidikJari from "../../components/pelayananSidikJari";
import PelayananPerkaraPidana from "../../components/pelayananPerkaraPidana";
import SususnanOrganisasiDanTataKerja from "../../components/sotk";
import ArtiLogoReserse from "../../components/artiLogoReserse";
import VisiMIsi from "../../components/visimisi";
import Hero from "../../components/hero";
import Image from "next/image";
import Link from "next/link";
import KringReserse from "../admin/kring-reserse/page";
import Informasi from "../../components/informasi";
import Footer from "../../components/footer";

interface PressRelease {
  id: number;
  judul: string;
  deskripsi: string;
  foto_url: string;
  created_at: string;
}

interface KringReserse {
  id: number;
  judul: string;
  deskripsi: string;
  foto_url: string;
  created_at: string;
}

interface PengungkapanPelakuKejahatan {
  id: number;
  judul: string;
  deskripsi: string;
  foto_url: string;
  created_at: string;
}

export default function MainPage() {
  const [pressReleases, setPressReleases] = useState<PressRelease[]>([]);
  const [selected, setSelected] =
    useState < PressRelease | KringReserse | PengungkapanPelakuKejahatan | null>(null);
  const [KringReserse, setKringReserse] = useState<KringReserse[]>([]);
  const [PengungkapanPelakuKejahatan, setPengungkapanPelakuKejahatan] = useState< PengungkapanPelakuKejahatan[]>([]);

  useEffect(() => {
    const fetchPressReleases = async () => {
      const { data, error } = await supabase
        .from("press_release")
        .select("*")
        .order("created_at", { ascending: false })
        .limit(3);

      if (error) {
        console.error("Error fetching data:", error.message);
      } else {
        setPressReleases(data as PressRelease[]);
      }
    };

    fetchPressReleases();
  }, []);

  useEffect(() => {
    const fetchKringReserse = async () => {
      const { data, error } = await supabase
        .from("kring_reserse")
        .select("*")
        .order("created_at", { ascending: false })
        .limit(3);

      if (error) {
        console.error("Error fetching data:", error.message);
      } else {
        setKringReserse(data as KringReserse[]);
      }
    };

    fetchKringReserse();
  }, []);

  useEffect(() => {
    const fetchPengungkapanPelakuKejahatan = async () => {
      const { data, error } = await supabase
        .from("penyelesaian_perkara")
        .select("*")
        .order("created_at", { ascending: false })
        .limit(3);

      if (error) {
        console.error("Error fetching data:", error.message);
      } else {
        setPengungkapanPelakuKejahatan(data as PengungkapanPelakuKejahatan[]);
      }
    };

    fetchPengungkapanPelakuKejahatan();
  }, []);

  return (
    <div>
      <Hero />

      <VisiMIsi />
      <ArtiLogoReserse />
      <SususnanOrganisasiDanTataKerja />

      <PelayananPerkaraPidana />
      <PelayananSidikJari />
      <PembuatanBAP />

      <section
        id="press-release"
        className="w-full min-h-screen px-6 py-20 bg-gradient-to-b from-black to-red-700"
      >
        <div className="max-w-6xl mx-auto px-6 md:px-12">
          <h2 className="pt-20 sm:text-lg md:text-3xl font-bold text-yellow-400 mb-15 text-center">
            Press Release
          </h2>

          {pressReleases.length === 0 ? (
            <p className="text-center sm:text-sm md:text-lg">
              Belum ada data Press Release.
            </p>
          ) : (
            <>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {pressReleases.map((item) => (
                  <div
                    key={item.id}
                    onClick={() => setSelected(item)}
                    className="cursor-pointer bg-[#111] border border-gray-700 rounded-xl shadow-lg overflow-hidden hover:scale-[1.02] transition-transform"
                  >
                    {item.foto_url && (
                      <Image
                        src={item.foto_url}
                        alt={item.judul}
                        width={450}
                        height={300}
                        className="w-full sm:h-30  h-60 object-cover"
                      />
                    )}
                    <div className="p-6">
                      <h3 className="sm:text-base md:text-xl font-bold mb-2 text-white">
                        {item.judul}
                      </h3>
                      <p className="text-gray-300 sm:text-sm md:text-lg leading-relaxed line-clamp-3">
                        {item.deskripsi}
                      </p>
                      <p className="text-gray-500 sm:text-xs md:text-base mt-4">
                        {new Date(item.created_at).toLocaleDateString("id-ID", {
                          day: "numeric",
                          month: "long",
                          year: "numeric",
                        })}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="text-center mt-10">
                <Link
                  href="/press-release"
                  className="text-yellow-400 sm:text-sm md:text-lg font-semibold hover:underline block text-right mt-6"
                >
                  Lihat Selengkapnya →
                </Link>
              </div>
            </>
          )}
        </div>
      </section>

      <section
        id="kring-reserse"
        className="w-full min-h-screen px-6 py-20 bg-red-700"
      >
        <div className="max-w-6xl mx-auto px-6 md:px-12">
          <h2 className="pt-20 sm:text-lg md:text-3xl font-bold text-yellow-400 mb-15 text-center">
            Kring Reserse
          </h2>

          {KringReserse.length === 0 ? (
            <p className="text-center sm:text-sm md:text-lg">
              Belum ada data Kring Reserse.
            </p>
          ) : (
            <>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {KringReserse.map((item) => (
                  <div
                    key={item.id}
                    onClick={() => setSelected(item)}
                    className="cursor-pointer bg-[#111] border border-gray-700 rounded-xl shadow-lg overflow-hidden hover:scale-[1.02] transition-transform"
                  >
                    {item.foto_url && (
                      <Image
                        src={item.foto_url}
                        alt={item.judul}
                        width={450}
                        height={300}
                        className="w-full sm:h-30  h-60 object-cover"
                      />
                    )}
                    <div className="p-6">
                      <h3 className="sm:text-base md:text-xl font-bold mb-2 text-white">
                        {item.judul}
                      </h3>
                      <p className="text-gray-300 sm:text-sm md:text-lg leading-relaxed line-clamp-3">
                        {item.deskripsi}
                      </p>
                      <p className="text-gray-500 sm:text-xs md:text-base mt-4">
                        {new Date(item.created_at).toLocaleDateString("id-ID", {
                          day: "numeric",
                          month: "long",
                          year: "numeric",
                        })}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="text-center mt-10">
                <Link
                  href="/kring-reserse"
                  className="text-yellow-400 sm:text-sm md:text-lg font-semibold hover:underline block text-right mt-6"
                >
                  Lihat Selengkapnya →
                </Link>
              </div>
            </>
          )}
        </div>
      </section>

      <section
        id="pengungkapan-pelaku-kejahatan"
        className="w-full min-h-screen px-6 py-20 bg-red-700"
      >
        <div className="max-w-6xl mx-auto px-6 md:px-12">
          <h2 className="pt-20 sm:text-lg md:text-3xl font-bold text-yellow-400 mb-15 text-center">
            Pengungkapan Pelaku Kejahatan
          </h2>

          {PengungkapanPelakuKejahatan.length === 0 ? (
            <p className="text-center sm:text-sm md:text-lg">
              Belum ada data Pengungkapan Pelaku Kejahatan.
            </p>
          ) : (
            <>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {PengungkapanPelakuKejahatan.map((item) => (
                  <div
                    key={item.id}
                    onClick={() => setSelected(item)}
                    className="cursor-pointer bg-[#111] border border-gray-700 rounded-xl shadow-lg overflow-hidden hover:scale-[1.02] transition-transform"
                  >
                    {item.foto_url && (
                      <Image
                        src={item.foto_url}
                        alt={item.judul}
                        width={450}
                        height={300}
                        className="w-full sm:h-30  h-60 object-cover"
                      />
                    )}
                    <div className="p-6">
                      <h3 className="sm:text-base md:text-xl font-bold mb-2 text-white">
                        {item.judul}
                      </h3>
                      <p className="text-gray-300 sm:text-sm md:text-lg leading-relaxed line-clamp-3">
                        {item.deskripsi}
                      </p>
                      <p className="text-gray-500 sm:text-xs md:text-base mt-4">
                        {new Date(item.created_at).toLocaleDateString("id-ID", {
                          day: "numeric",
                          month: "long",
                          year: "numeric",
                        })}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="text-center mt-10">
                <Link
                  href="/penyelesaian-perkara-pidana"
                  className="text-yellow-400 sm:text-sm md:text-lg font-semibold hover:underline block text-right mt-6"
                >
                  Lihat Selengkapnya →
                </Link>
              </div>
            </>
          )}
        </div>
      </section>

    

      <Informasi />
      <Footer />

      {selected && (
        <div className="fixed inset-0 bg-black/30 backdrop-blur-sm flex justify-center items-center z-50 px-4">
          <div className="bg-[#1a1a1a] rounded-xl shadow-2xl max-w-4xl w-full md:flex overflow-hidden relative">
            <button
              onClick={() => setSelected(null)}
              className="absolute top-3 right-4 text-gray-300 hover:text-white text-2xl"
            >
              ×
            </button>

            {selected.foto_url && (
              <div className="md:w-1/2">
                <Image
                  src={selected.foto_url}
                  alt={selected.judul}
                  width={600}
                  height={400}
                  className="w-full h-full object-cover"
                />
              </div>
            )}

            <div className="p-6 md:w-1/2 flex flex-col justify-center">
              <h3 className="sm:text-base md:text-xl  font-bold text-white mb-3">
                {selected.judul}
              </h3>
              <p className="text-gray-400 sm:text-xs md:text-base mb-2">
                {new Date(selected.created_at).toLocaleDateString("id-ID", {
                  day: "numeric",
                  month: "long",
                  year: "numeric",
                })}
              </p>
              <p className="text-gray-200 sm:text-sm md:text-lg leading-relaxed text-justify">
                {selected.deskripsi}
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
