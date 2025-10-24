import Image from "next/image";

export default function Hero() {
    return (
      <section id="beranda" className="relative h-[90vh] w-full">
        <div className="mt-20 absolute inset-0 bg-black/50 flex flex-col justify-center items-center text-center px-4">
          <h1 className=" sm:text-xl md:text-3xl  font-bold text-white mb-2 text-center">
            SATUAN RESERSE KRIMINAL <br /> POLRES SUMEDANG
          </h1>
          <p className="mt-4 sm:text-lg md:text-xl text-gray-200">
            Sidik Sakti Indera Waspada
          </p>
          <a
            href="/#informasi"
            className="mt-6 sm:text-sm md:text-xl inline-block bg-red-700 hover:bg-amber-500 text-white  px-4 py-3 rounded-md font-semibold"
          >
            Selengkapnya
          </a>
        </div>
      </section>
    );
}