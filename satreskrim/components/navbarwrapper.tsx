"use client";

import { usePathname } from "next/navigation";
import Navbar from "@/components/navbar";

export default function NavbarWrapper() {
  const pathname = usePathname();
  const hideRootLayout = pathname.startsWith("/admin");

  if (hideRootLayout) return null;

  return <Navbar />;
}
