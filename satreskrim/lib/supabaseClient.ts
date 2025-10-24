// supabaseClient.ts
import { createBrowserClient } from "@supabase/ssr";

export const supabase = createBrowserClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
  {
    auth: {
      persistSession: false, // ⛔️ tidak disimpan di localStorage
      autoRefreshToken: false, // tidak auto perpanjang session
    },
  }
);
