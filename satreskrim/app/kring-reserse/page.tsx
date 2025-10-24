"use client";

import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase/client";
import Image from "next/image";

interface KringReserse {
  id: number;
  judul: string;
  deskripsi: string;
  foto_url: string;
  created_at: string;
}

export default function KringResersePage() {
  const [KringReserse, setKringReserse] = useState<KringReserse[]>([]);

  useEffect(() => {
    const fetchKringReserse = async () => {
      const { data, error } = await supabase
        .from("kring_reserse")
        .select("*")
        .order("created_at", { ascending: false });

      if (error) console.error(error);
      else setKringReserse(data as KringReserse[]);
    };
    fetchKringReserse();
  }, []);

  return (
    <section className="py-20 bg-red-700 min-h-screen">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <h2 className="mb-12 text-4xl md:text-5xl font-bold text-yellow-400 text-center">
          Kring Reserse
        </h2>

        {KringReserse.length === 0 ? (
          <p className="text-center text-lg text-gray-300">
            Belum ada data Kring Reserse.
          </p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {KringReserse.map((item) => (
              <div
                key={item.id}
                className="bg-[#111] border border-gray-700 rounded-xl shadow-lg overflow-hidden hover:scale-[1.02] transition-transform"
              >
                {item.foto_url && (
                  <Image
                    src={item.foto_url}
                    alt={item.judul}
                    width={450}
                    height={300}
                    className="w-full h-60 object-cover"
                  />
                )}
                <div className="p-6">
                  <h3 className="text-2xl font-bold mb-2">{item.judul}</h3>
                  <p className="text-gray-300 text-sm leading-relaxed line-clamp-3">
                    {item.deskripsi}
                  </p>
                  <p className="text-gray-500 text-xs mt-4">
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
        )}
      </div>
    </section>
  );
}
