"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import SideBar from "../components-admin/sidebar";

export default function AdminTemplate({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  const hideSideBar =
    pathname === "/admin/login" || pathname === "/admin/register-admin";

  useEffect(() => {
    const handleUnload = async () => {
      await fetch("/api/auth/logout", { method: "POST" });
    };

    window.addEventListener("unload", handleUnload);
    return () => window.removeEventListener("unload", handleUnload);
  }, []);

  return (
    <div>
      {!hideSideBar && <SideBar />}
      <main>{children}</main>
    </div>
  );
}
