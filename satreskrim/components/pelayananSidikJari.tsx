export default function PelayananSidikJari() {
    return (
      <section
        id="pelayanan-sidik-jari"
        className="w-full min-h-screen bg-red-700 to-black text-white py-16 px-6"
      >
        <div className="max-w-6xl mx-auto px-6 md:px-12 text-center">
          <h2 className="pt-20 sm:text-lg md:text-3xl font-bold text-yellow-400 mb-15 text-center">
            PELAYANAN SIDIK JARI
          </h2>
          <p className="sm:text-sm md:text-lg  leading-relaxed text-justify   mb-15">
            Pelayanan sidik jari merupakan layanan kepolisian yang diberikan
            kepada masyarakat untuk berbagai kebutuhan administrasi, seperti
            pengurusan SKCK, melamar pekerjaan, pencalonan jabatan, pendidikan,
            maupun keperluan lainnya yang memerlukan data biometrik resmi.
            Melalui layanan ini, masyarakat dapat melakukan perekaman dan
            verifikasi sidik jari yang sah, sehingga identitas pemohon tercatat
            secara valid dan dapat dipergunakan sesuai dengan ketentuan yang
            berlaku.
          </p>

          <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-center items-stretch text-white ">
            <div className="max-w-3xl md:w-1/2 md:pr-16 text-justify mb-10 md:mb-0">
              <h2 className="sm:text-base md:text-xl font-bold mb-10 text-start">
                PERSYARATAN
              </h2>
              <p className="sm:text-sm md:text-lg leading-relaxed text-start">
                1. Pas Foto Ukuran 4×6 dengan latar belakang merah. <br />
                2. Fotokopi KTP. <br />
                3. Fotokopi Kartu Keluarga. <br />
                4. Fotokopi Akta Kelahiran/Surat Kenal Lahir/Ijazah Terakhir.
                <br /> 5. Surat Pengantar dari Kelurahan/Desa.
              </p>
            </div>

            <div className="hidden md:block w-[3px] bg-white mx-12 self-stretch"></div>

            <div className="max-w-3xl md:w-1/2 md:pr-16 text-justify mb-10 md:mb-0">
              <h2 className="sm:text-base md:text-xl font-bold mb-10 text-start">
                PROSEDUR
              </h2>
              <p className="sm:text-sm md:text-lg leading-relaxed text-start">
                1. Kunjungi Polres Sumedang <br /> 2. Penyerahan Berkas Awal
                <br /> 3. Pengarahan ke Unit Identifikasi <br /> 4. Pengisian
                Formulir <br /> 5. Perekaman Sidik Jari <br /> 6. Penerbitan
                Kartu Sidik Jari <br /> 7. Lanjutan Proses SKCK
              </p>
            </div>
          </div>
        </div>
      </section>
    );
}