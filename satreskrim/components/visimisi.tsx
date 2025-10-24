export default function VisiMisi() {
  return (
    <section
      id="visi-misi"
      className="w-full min-h-screen px-6  py-16 bg-gradient-to-b from-black to-red-700 
            text-white  text-center"
    >
      <div className="max-w-6xl mx-auto  px-6 mt-20 py-10 md:px-12">
        <div className="text-start">
          <h2 className="pt-20 sm:text-lg md:text-3xl font-bold text-yellow-400 mb-15  text-start">
            VISI
          </h2>
          <p className="sm:text-sm md:text-lg leading-relaxed text-justify">
            Satreskrim Polres Sumedang berkomitmen memberikan pelayanan
            masyarakat secara profesional dan akuntabel guna mewujudkan
            reformasi birokrasi Polri.
          </p>
        </div>
        
        <div className="border-t-3 border-white w-full  mt-15"></div>

        <div className="flex-1 text-white text-start">
          <div className="text-start">
            <h2 className="pt-20 sm:text-lg md:text-3xl font-bold text-yellow-400 mb-15  text-start">
              MISI
            </h2>
            <p className="sm:text-sm md:text-lg leading-relaxed text-justify">
              1. Memberikan pelayanan kepada masyarakat terkait pelayanan
              laporan/pengaduan, layanan identifikasi serta layanan lainnya yang
              dibutuhkan masyarakat. <br />
              2. Melaksanakan tugas pokok Satreskrim yaitu kegiatan
              penyelildikan dan penyidikan tidak pidana secara profesional.
              <br />
              3. Menindaklanjuti komplain masyarakat berkaitan dengan penanganan
              perkara yang ditangani oleh Satreskrim. <br />
              4. Meningkatkan kemampuan personil Satreskrim dalam hal
              penyelidikan dan penyidikan tindak pidana.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
