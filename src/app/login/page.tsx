import { ThemeSwitcher } from "@/components/ThemeSwitcher"
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label";
import Image from "next/image"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <div className="flex justify-center items-center gap-32">
        <div className="border-r-2 border-r-white">
          <Image src="/logo.png" width={500} height={500} alt="Logo do Sistema de Controle de Estoque" />
        </div>
        <div className="">
          <div className="mb-8">
            <h1 className="text-4xl mb-8"> Login </h1>
            <p className="text-lg"> Bem vindo de volta! Por favor, entre com suas credencias.</p>
          </div>
          <div className="flex flex-col space-y-4">
            <div className="grid w-full max-w-sm items-center gap-1.5">
              <Label htmlFor="email">Email</Label>
              <Input type="email" id="email" placeholder="Email" />
            </div>
            <div className="grid w-full max-w-sm items-center gap-1.5">
              <Label htmlFor="password">Senha</Label>
              <Input type="password" id="password" placeholder="Senha" />
            </div>
            <div>
              <Button className="bg-slate-50 text-black rounded-lg">Entrar</Button>
            </div>
            <div>
              <p>Não tem uma conta? <a href="" className="font-bold underline">Cadastrar-se</a></p>
            </div>
          </div>
        </div>
        {/* <ThemeSwitcher /> */}
      </div>
    </main>
  );
}
