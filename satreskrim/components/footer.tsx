import Link from "next/link";
import Image from "next/image";

export default function Footer() {
    return (
      <div>
        <footer className="bg-black ">
          <div className="gap-10 mx-auto w-full max-w-screen-xl p-6 py-6 lg:py-8">
            <div className="max-w-6xl mx-auto md:flex md:justify-between">
              <div className="p-5 sm:ml-0 md:ml-4 flex items-center gap-3">
                <Image
                  src="/logo-bareskrim.png"
                  alt="Logo"
                  className="w-10 h-12"
                />
                <div>
                  <h1 className="text-xl font-bold text-red-700 leading-tight">
                    SAT RESKRIM
                  </h1>
                  <h2 className="text-xl font-semibold leading-tight">
                    POLRES SUMEDANG
                  </h2>
                </div>
              </div>
              <div className="pl-5 md:text-right sm:text-start grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6 text-sm">
                <div>
                  <Link
                    href="/#beranda"
                    className="mb-4 text-sm font-semibold text-white uppercase col-span-1"
                  >
                    Beranda
                  </Link>
                </div>
                <div>
                  <h2 className="mb-4 text-sm font-semibold text-white uppercase ">
                    Profil
                  </h2>
                  <ul className="text-gray-300  font-medium">
                    <li className="mb-2">
                      <Link href="/#visi-misi" className="hover:underline">
                        Visi & Misi
                      </Link>
                    </li>
                    <li className="mb-2">
                      <Link href="/#arti-logo-reserse" className="hover:underline">
                        Arti Logo Reserse
                      </Link>
                    </li>
                    <li className="mb-2">
                      <Link
                        href="/#susunan-organisasi-dan-tata-kerja"
                        className="hover:underline"
                      >
                        SOTK
                      </Link>
                    </li>
                  </ul>
                </div>
                <div>
                  <h2 className="mb-4 text-sm font-semibold text-white uppercase ">
                    Pelayanan
                  </h2>
                  <ul className="text-gray-300  font-medium">
                    <li className="mb-2">
                      <Link
                        href="/#pelayanan-perkara-pidana"
                        className="hover:underline "
                      >
                        Pelayanan Perkara Pidana
                      </Link>
                    </li>
                    <li className="mb-2">
                      <Link
                        href="/#pelayanan-sidik-jari"
                        className="hover:underline"
                      >
                        Pelayanan Sidik Jari
                      </Link>
                    </li>
                    <li className="mb-2">
                      <Link href="/#pelayanan-bap" className="hover:underline">
                        Pelayanan BAP
                      </Link>
                    </li>
                  </ul>
                </div>
                <div>
                  <h2 className="mb-4 text-sm font-semibold text-white uppercase">
                    Dokumentasi Kegiatan
                  </h2>
                  <ul className="text-gray-300 font-medium">
                    <li className="mb-2">
                      <Link href="/#press-release" className="hover:underline">
                        Press Release
                      </Link>
                    </li>
                    <li className="mb-2">
                      <Link href="/#kring-reserse" className="hover:underline">
                        Kring Reserse
                      </Link>
                    </li>
                    <li className="mb-2">
                      <Link href="/#kring-reserse" className="hover:underline">
                        Kring Reserse
                      </Link>
                    </li>
                  </ul>
                </div>
                <div>
                  <Link
                    href="/#informasi"
                    className="mb-4 text-sm font-semibold text-white uppercase "
                  >
                    Informasi
                  </Link>
                </div>
              </div>
            </div>
            <hr className="my-6 border-gray-200 sm:mx-auto  lg:my-8" />
            <div className="sm:flex sm:items-center sm:justify-between">
              <span className="text-sm text-gray-300 sm:text-center ">
                © 2025 Satreskrim Polres Sumedang. All Rights Reserved.
              </span>
              <div className="flex mt-4 sm:justify-center sm:mt-0">
                <Link href="#" className="text-gray-300 hover:text-gray-600 ">
                  <svg
                    className="w-6 h-6 text-gray-300 "
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill="currentColor"
                      fillRule="evenodd"
                      d="M3 8a5 5 0 0 1 5-5h8a5 5 0 0 1 5 5v8a5 5 0 0 1-5 5H8a5 5 0 0 1-5-5V8Zm5-3a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h8a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3H8Zm7.597 2.214a1 1 0 0 1 1-1h.01a1 1 0 1 1 0 2h-.01a1 1 0 0 1-1-1ZM12 9a3 3 0 1 0 0 6 3 3 0 0 0 0-6Zm-5 3a5 5 0 1 1 10 0 5 5 0 0 1-10 0Z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="sr-only">Instagram Page</span>
                </Link>
              </div>
            </div>
          </div>
        </footer>
      </div>
    );}