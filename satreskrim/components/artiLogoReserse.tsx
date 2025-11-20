import Image from "next/image";


export default function ArtiLogoReserse() {
    return (
      <div>
        <section
          id="arti-logo-reserse"
          className="w-full min-h-screen px-6 bg-red-700 py-16 "
        >
          <div className=" max-w-6xl mx-auto md:px-12 px-6  text-center  md:text-left">
            <h2 className="pt-20 sm:text-lg md:text-3xl font-bold text-yellow-400 mb-15 text-center">
              ARTI LOGO RESERSE
            </h2>
            <div className="mx-auto flex flex-col md:flex-row items-center md:items-start gap-10">
              <div className="flex-shrink-0 w-16 md:w-32">
                <Image
                  src="/logo-bareskrim.png"
                  alt="Logo Bareskrim"
                  className="w-full h-auto"
                />
              </div>

              <div className="text-white">
                <div className="mb-6">
                  <p className="md:text-lg leading-relaxed text-justify text-base sm:text-sm mb-15">
                    
                    Lambang fungsi Reserse merupakan perwujudan dari komitemen
                    dalam melaksanakan tugas pokok, fungsi dan peranannya dalam
                    menciptakan dan memelihara kamtibmas, menegakkan hukum serta
                    memberikan perlindungan, penganyoman dan pelayanan kepada
                    masyarakat, sebagaimana tertuang dalam Undang-Undang Nomor 2
                    Tahun 2002 tentang Kepolisian Negara Republik Indonesia.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
}