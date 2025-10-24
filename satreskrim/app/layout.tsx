
import "./globals.css";
import NavbarWrapper from "@/components/navbarwrapper";

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
  

  return (
    <html lang="id">
      <body className="bg-black text-white min-h-screen">
        <NavbarWrapper />
        <main>{children}</main>
      </body>
    </html>
  );
}
