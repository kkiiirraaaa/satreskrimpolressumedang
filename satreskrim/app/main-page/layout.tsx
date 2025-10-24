import "./globals.css";
import { usePathname } from "next/navigation";
import Navbar from "../../components/navbar";

export const metadata = {
  title: "Satreskrim Polres Sumedang",
  description:
    "Satuan Reserse Kriminal Polres Sumedang - Sidik Sakti Indera Waspada",
  icons: {
    icon: "/logo.svg",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  const hideGlobalLayout = pathname.startsWith("/admin");

  return (
    <html lang="id">
      <body className="bg-black text-white min-h-screen">
        {!hideGlobalLayout && <Navbar />}
        <main className="pt-19">{children}</main>
      </body>
    </html>
  );
}
