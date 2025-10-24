import { supabase } from "../lib/supabase/client";
import MainPage from "./main-page/page";
import Navbar from "../components/navbar";

export default function Home() {
  return (
    <div>
      <Navbar />
      <MainPage />
    </div>
  );
}
