export default function PelayananPerkaraPidana() {
    return (
      <section
        className="min-h-screen w-full px-6 bg-gradient-to-b from-black to-red-700"
        id="pelayanan-perkara-pidana"
      >
        <div className="py-10 max-w-6xl mx-auto px-6 md:px-12 text-white">
          <h1 className="pt-20 sm:text-lg md:text-3xl font-bold text-yellow-400 mb-15 text-center">
            PELAYANAN PERKARA PIDANA
          </h1>
          <div className="text-start">
            <p className="sm:text-sm md:text-lg  text-justify mt-0 max-w-7xl  leading-relaxed">
              Pelayanan perkara pidana adalah layanan kepolisian yang diberikan
              kepada masyarakat dalam penanganan kasus tindak pidana, mulai dari
              penerimaan laporan atau pengaduan, proses penyelidikan dan
              penyidikan, hingga penyerahan perkara ke kejaksaan. Melalui
              pelayanan ini, setiap laporan masyarakat akan ditindaklanjuti
              sesuai prosedur hukum, dengan tujuan memberikan kepastian hukum,
              perlindungan, serta rasa keadilan bagi para pihak yang terlibat
              dalam perkara pidana.
            </p>
          </div>

          <div className="border-t-3 border-white w-full my-15 mt-20 mb-20"></div>

          <h2 className="sm:text-base md:text-xl mb-15 font-bold text-center">
            Prosedur
          </h2>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <div className="flex items-center gap-4">
              <div className="sm:text-sm md:text-lg  leading-relaxed text-justify bg-red-700  border-2 border-white rounded-xl px-4 py-3 shadow-md">
                Penerimaan Laporan
              </div>
              <div className="bg-white text-red-700 font-bold rounded-full p-2">
                ➤
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="sm:text-sm md:text-lg  leading-relaxed text-justify bg-red-700 border-2 border-white rounded-xl px-4 py-3 shadow-md">
                Penyelidikan
              </div>
              <div className="bg-white text-red-700 font-bold rounded-full p-2">
                ➤
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="sm:text-sm md:text-lg  leading-relaxed text-justify bg-red-700 border-2 border-white rounded-xl px-4 py-3 shadow-md">
                Penyidikan
              </div>
              <div className="bg-white text-red-700 font-bold rounded-full p-2">
                ➤
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="sm:text-sm md:text-lg  leading-relaxed text-justify bg-red-700 border-2 border-white rounded-xl px-4 py-3 shadow-md">
                Penyelesaian Perkara
              </div>
            </div>
          </div>
        </div>
      </section>
    );
}