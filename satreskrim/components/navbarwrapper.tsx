"use client";

import { usePathname } from "next/navigation";
import Navbar from "@/components/navbar";

export default function NavbarWrapper() {
  const pathname = usePathname();
  const hideGlobalLayout = pathname.startsWith("/admin");

  if (hideGlobalLayout) return null;

  return <Navbar />;
}
