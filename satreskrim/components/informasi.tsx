"use client";
import React from "react";

export default function Informasi() {
  return (
    <section
      id="informasi"
      className="bg-black min-h-screen w-full px-6 text-white  py-16 md:px-12"
    >
      <div className="py-10 max-w-6xl mx-auto px-6 md:px-12 text-white">
        <div className="text-center mb-10">
          <h2 className="pt-20 sm:text-lg md:text-3xl font-bold text-yellow-400 mb-15 text-center">
            Informasi
          </h2>
        </div>

        <div className="sm:text-sm md:text-lg leading-relaxed text-justify">
          <p>
            Satuan Reserse Kriminal (Satreskrim) Polres Sumedang merupakan unsur
            pelaksana utama di bawah Kepolisian Resor Sumedang yang bertugas
            melaksanakan penyelidikan, penyidikan, serta penegakan hukum
            terhadap berbagai tindak pidana di wilayah hukum Polres Sumedang.
            Dengan menjunjung tinggi profesionalisme, transparansi, dan
            akuntabilitas, Satreskrim berperan dalam menjaga keamanan,
            ketertiban, serta menegakkan keadilan bagi masyarakat. Dalam
            pelaksanaannya, Satreskrim terdiri atas beberapa unit seperti Pidana
            Umum, Pidana Khusus, Tipiter, Identifikasi, dan PPA yang bekerja
            secara terpadu di bawah koordinasi Kasat Reskrim.
          </p>
        </div>

        <div className="border-t-3 border-white w-full my-10 mt-20 mb-20"></div>

        <div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="leading-relaxed text-justify flex flex-col ">
              <h2 className="sm:text-base md:text-xl font-semibold mb-2">
                Alamat Satreskrim Polres Sumedang
              </h2>
              <p className="sm:text-sm md:text-lg text-white mb-4">
                Jl. Prabu Gajah Agung No.48, Situ, Kec. Sumedang Utara, Kab. Sumedang, Jawa Barat 45621
              </p>
              <h2 className="sm:text-base md:text-xl font-semibold mb-2">
                Jam Operasional
              </h2>
              <p className="sm:text-sm md:text-lg text-white">
                Senin - Jumat, 08.00 - 16.00 WIB
                <br /> Di Luar Jam Operasional, Piket 24 Jam Siaga Reskrim
              </p>
            </div>

            <div className="w-full h-80 md:h-96">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3961.44370283669!2d107.9174774!3d-6.8372868!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e68d12d87a917d9%3A0xc6414ade35daaf1!2sPolres%20Sumedang!5e0!3m2!1sid!2sid!4v1761255397623!5m2!1sid!2sid"
                className="w-full h-full rounded-lg border-0"
                title="Lokasi"
                allowFullScreen
                loading="lazy"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
