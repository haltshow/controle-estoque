import { ThemeSwitcher } from "@/components/ThemeSwitcher"
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label";
import Sidebar from "@/components/Sidebar"
import Image from "next/image"

export default function Home() {
  return (
    <div className="flex items-center">
      <Sidebar />
      <main className="flex min-h-screen flex-col items-center justify-center p-24">
        Teste MAIN
      </main>
    </div>
  );
}
