"use client";
import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase/client";
import { useRouter } from "next/navigation";


export default function DashboardPage() {
  const router = useRouter();
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [user, setUser] = useState<any>(null);
  const [counts, setCounts] = useState({
    pressrelease: 0,
    kringreserse: 0,
    PengungkapanPelakuKejahatan: 0,
  });

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCounts = async () => {
      try {
        const [pressReleaseData, kringReserseData, PengungkapanPelakuKejahatanData] =
          await Promise.all([
            supabase
              .from("press_release")
              .select("*", { count: "exact", head: true }),
            supabase
              .from("kring_reserse")
              .select("*", { count: "exact", head: true }),
            supabase
              .from("penyelesaian_perkara")
              .select("*", { count: "exact", head: true }),
          ]);

        setCounts({
          pressrelease: pressReleaseData.count || 0,
          kringreserse: kringReserseData.count || 0,
          PengungkapanPelakuKejahatan: PengungkapanPelakuKejahatanData.count || 0,
        });
      } catch (error) {
        console.error("Gagal Mengambil Data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchCounts();
  }, []);

  useEffect(() => {
    // Cek apakah user sudah login
    const getUser = async () => {
      const { data, error } = await supabase.auth.getUser();
      if (error || !data.user) {
        alert("⚠️ Silakan Login Terlebih Dahulu!");
        router.push("/admin/login");
      } else {
        setUser(data.user);
      }
    };
    getUser();
  }, [router]);

  return (
    <div className="pl-80 pt-30 min-h-screen bg-gray-50  p-10">
      <h1 className="text-3xl font-bold mb-8 text-gray-900 ">
        Dashboard Admin
      </h1>
      {loading ? (
        <p className="text-gray-500 ">Memuat data...</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="p-6 bg-white rounded-lg shadow ">
            <h2 className="text-lg font-semibold text-gray-700 ">
              Press Release
            </h2>
            <p className="text-3xl font-bold mt-2 text-blue-600">
              {" "}
              {counts.pressrelease}
            </p>
          </div>

          <div className="p-6 bg-white rounded-lg shadow ">
            <h2 className="text-lg font-semibold text-gray-700 ">
              Kring Reserse
            </h2>
            <p className="text-3xl font-bold mt-2 text-green-600">
              {counts.kringreserse}
            </p>
          </div>

          <div className="p-6 bg-white rounded-lg shadow ">
            <h2 className="text-lg font-semibold text-gray-700 ">
              Pengungkapan Pelaku Kejahatan
            </h2>
            <p className="text-3xl font-bold mt-2 text-red-600">
              {counts.PengungkapanPelakuKejahatan}
            </p>
          </div>
        </div>
      )}
      {user && (
        <p className="mt-10 text-gray-600 ">
          Login sebagai: <span className="font-semibold">{user.email}</span>
        </p>
      )}
    </div>
  );
}
