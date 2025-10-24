"use client";
import { useState, useRef, useEffect } from "react";
import { Menu, X, ChevronDown } from "lucide-react";

export default function Navbar() {
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const headerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node) &&
        window.innerWidth >= 768
      ) {
        setActiveDropdown(null);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  useEffect(() => {
    if (!isMenuOpen) {
      setActiveDropdown(null);
    }
  }, [isMenuOpen]);

useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        headerRef.current &&
        !headerRef.current.contains(event.target as Node) &&
        isMenuOpen
      ) {
        setIsMenuOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isMenuOpen]);

  const toggleDropdown = (menu: string) => {
    setActiveDropdown(activeDropdown === menu ? null : menu);
  };

  return (
    <header className="fixed top-0 left-0 w-full bg-black text-white flex justify-between items-center px-4 sm:px-6 py-2 sm:py-3 z-50">
      <div className="flex items-center gap-2 sm:gap-3">
        <img
          src="/logo-bareskrim.png"
          alt="Logo"
          className="w-8 h-10 sm:w-10 sm:h-12 md:w-12 md:h-14"
        />
        <div>
          <h1 className="text-lg sm:text-xl md:text-2xl font-bold text-red-700">
            SAT RESKRIM
          </h1>
          <h2 className="text-base sm:text-xl md:text-2xl font-semibold">
            POLRES SUMEDANG
          </h2>
        </div>
      </div>

      <button
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        className="md:hidden text-white focus:outline-none z-50 transition-transform duration-300"
      >
        {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
      </button>

      <nav
        ref={dropdownRef}
        className="hidden md:flex bg-red-700 rounded-full items-center relative z-40"
      >
        <ul className="flex items-center">
          <li>
            <a
              href="/#beranda"
              className="px-7 py-3 text-white hover:text-amber-400 font-semibold text-xl inline-block"
            >
              Beranda
            </a>
          </li>

          <li className="relative">
            <button
              onClick={() => toggleDropdown("profil")}
              className="px-7 py-3 font-semibold text-xl flex items-center gap-1 hover:text-amber-400"
            >
              Profil
              <ChevronDown
                className={`transition-transform duration-300 ${
                  activeDropdown === "profil" ? "rotate-180" : "rotate-0"
                }`}
                size={16}
              />
            </button>

            {activeDropdown === "profil" && (
              <div className="absolute left-0 top-full w-48 rounded-md bg-white bg-opacity-90 text-black shadow-lg mt-1">
                <a
                  href="/#visi-misi"
                  className="block px-4 py-2 text-red-700 hover:text-amber-500"
                >
                  Visi & Misi
                </a>
                <a
                  href="/#arti-logo-reserse"
                  className="block px-4 py-2 text-red-700 hover:text-amber-500"
                >
                  Arti Logo Reserse
                </a>
                <a
                  href="/#susunan-organisasi-dan-tata-kerja"
                  className="block px-4 py-2 text-red-700 hover:text-amber-500"
                >
                  SOTK
                </a>
              </div>
            )}
          </li>

          <li className="relative">
            <button
              onClick={() => toggleDropdown("pelayanan")}
              className="px-3 py-3 font-semibold text-xl flex items-center gap-1 hover:text-amber-400"
            >
              Pelayanan
              <ChevronDown
                className={`transition-transform duration-300 ${
                  activeDropdown === "pelayanan" ? "rotate-180" : "rotate-0"
                }`}
                size={16}
              />
            </button>

            {activeDropdown === "pelayanan" && (
              <div className="absolute left-0 top-full w-56 rounded-md bg-white bg-opacity-90 text-black shadow-lg mt-1">
                <a
                  href="/#pelayanan-perkara-pidana"
                  className="block px-4 py-2 text-red-700 hover:text-amber-500"
                >
                  Pelayanan Perkara Pidana
                </a>
                <a
                  href="/#pelayanan-sidik-jari"
                  className="block px-4 py-2 text-red-700 hover:text-amber-500"
                >
                  Pelayanan Sidik Jari
                </a>
                <a
                  href="/#pembuatan-bap"
                  className="block px-4 py-2 text-red-700 hover:text-amber-500"
                >
                  Pembuatan BAP
                </a>
              </div>
            )}
          </li>

          <li className="relative">
            <button
              onClick={() => toggleDropdown("dokumentasi")}
              className="px-5 py-3 font-semibold text-xl flex items-center gap-1 hover:text-amber-400"
            >
              Dokumentasi Kegiatan
              <ChevronDown
                className={`transition-transform duration-300 ${
                  activeDropdown === "dokumentasi" ? "rotate-180" : "rotate-0"
                }`}
                size={16}
              />
            </button>

            {activeDropdown === "dokumentasi" && (
              <div className="absolute left-0 top-full w-56 rounded-md bg-white bg-opacity-90 text-black shadow-lg mt-1">
                <a
                  href="/#press-release"
                  className="block px-4 py-2 text-red-700 hover:text-amber-500"
                >
                  Press Release
                </a>
                <a
                  href="/#kring-reserse"
                  className="block px-4 py-2 text-red-700 hover:text-amber-500"
                >
                  Kring Reserse
                </a>
                <a
                  href="/#pengungkapan-pelaku-kejahatan"
                  className="block px-4 py-2 text-red-700 hover:text-amber-500"
                >
                  Pengungkapan Pelaku Kejahatan
                </a>
              </div>
            )}
          </li>

          <li>
            <a
              href="/#informasi"
              className="px-7 py-3 text-white hover:text-amber-400 font-semibold text-xl inline-block"
            >
              Informasi
            </a>
          </li>
        </ul>
      </nav>

      <nav
        className={`md:hidden absolute left-0 right-0 bg-red-700 overflow-hidden transition-all duration-300 ease-in-out z-40 ${
          isMenuOpen ? "max-h-screen" : "max-h-0"
        }`}
        style={{ top: '100%' }}
      >
        <ul className="flex flex-col">
          <li className="border-b border-red-600">
            <a
              href="/#beranda"
              className="block px-6 py-4 text-white hover:text-amber-400 hover:bg-red-800 font-semibold text-lg"
              onClick={() => setIsMenuOpen(false)}
            >
              Beranda
            </a>
          </li>

          <li className="border-b border-red-600">
            <button
              onClick={() => toggleDropdown("profil")}
              className="w-full px-6 py-4 text-left font-semibold text-lg flex items-center justify-between hover:text-amber-400 hover:bg-red-800"
            >
              Profil
              <ChevronDown
                className={`transition-transform duration-300 ${
                  activeDropdown === "profil" ? "rotate-180" : "rotate-0"
                }`}
                size={20}
              />
            </button>

            <div
              className={`bg-red-800 overflow-hidden transition-all duration-300 ${
                activeDropdown === "profil" ? "max-h-48" : "max-h-0"
              }`}
            >
              <a
                href="/#visi-misi"
                className="block px-10 py-3 text-white hover:text-amber-400"
                onClick={() => setIsMenuOpen(false)}
              >
                Visi & Misi
              </a>
              <a
                href="/#arti-logo-reserse"
                className="block px-10 py-3 text-white hover:text-amber-400"
                onClick={() => setIsMenuOpen(false)}
              >
                Arti Logo Reserse
              </a>
              <a
                href="/#susunan-organisasi-dan-tata-kerja"
                className="block px-10 py-3 text-white hover:text-amber-400"
                onClick={() => setIsMenuOpen(false)}
              >
                SOTK
              </a>
            </div>
          </li>

          <li className="border-b border-red-600">
            <button
              onClick={() => toggleDropdown("pelayanan")}
              className="w-full px-6 py-4 text-left font-semibold text-lg flex items-center justify-between hover:text-amber-400 hover:bg-red-800"
            >
              Pelayanan
              <ChevronDown
                className={`transition-transform duration-300 ${
                  activeDropdown === "pelayanan" ? "rotate-180" : "rotate-0"
                }`}
                size={20}
              />
            </button>

            <div
              className={`bg-red-800 overflow-hidden transition-all duration-300 ${
                activeDropdown === "pelayanan" ? "max-h-48" : "max-h-0"
              }`}
            >
              <a
                href="/#pelayanan-perkara-pidana"
                className="block px-10 py-3 text-white hover:text-amber-400"
                onClick={() => setIsMenuOpen(false)}
              >
                Pelayanan Perkara Pidana
              </a>
              <a
                href="/#pelayanan-sidik-jari"
                className="block px-10 py-3 text-white hover:text-amber-400"
                onClick={() => setIsMenuOpen(false)}
              >
                Pelayanan Sidik Jari
              </a>
              <a
                href="/#pembuatan-bap"
                className="block px-10 py-3 text-white hover:text-amber-400"
                onClick={() => setIsMenuOpen(false)}
              >
                Pembuatan BAP
              </a>
            </div>
          </li>

          <li className="border-b border-red-600">
            <button
              onClick={() => toggleDropdown("dokumentasi")}
              className="w-full px-6 py-4 text-left font-semibold text-lg flex items-center justify-between hover:text-amber-400 hover:bg-red-800"
            >
              Dokumentasi Kegiatan
              <ChevronDown
                className={`transition-transform duration-300 ${
                  activeDropdown === "dokumentasi" ? "rotate-180" : "rotate-0"
                }`}
                size={20}
              />
            </button>

            <div
              className={`bg-red-800 overflow-hidden transition-all duration-300 ${
                activeDropdown === "dokumentasi" ? "max-h-48" : "max-h-0"
              }`}
            >
              <a
                href="/#press-release"
                className="block px-10 py-3 text-white hover:text-amber-400"
                onClick={() => setIsMenuOpen(false)}
              >
                Press Release
              </a>
              <a
                href="/#kring-reserse"
                className="block px-10 py-3 text-white hover:text-amber-400"
                onClick={() => setIsMenuOpen(false)}
              >
                Kring Reserse
              </a>
              <a
                href="/#pengungkapan-pelaku-kejahatan"
                className="block px-10 py-3 text-white hover:text-amber-400"
                onClick={() => setIsMenuOpen(false)}
              >
                Pengungkapan Pelaku Kejahatan
              </a>
            </div>
          </li>

          <li>
            <a
              href="/#informasi"
              className="block px-6 py-4 text-white hover:text-amber-400 hover:bg-red-800 font-semibold text-lg"
              onClick={() => setIsMenuOpen(false)}
            >
              Informasi
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}