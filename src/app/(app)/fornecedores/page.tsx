import { ThemeSwitcher } from "@/components/ThemeSwitcher"
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label";
import Sidebar from "@/components/Sidebar"
import Image from "next/image"
import { Search, Plus, Copy } from "lucide-react"
import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableFooter,
    TableHead,
    TableHeader,
    TableRow,
  } from "@/components/ui/table"
import {
    Dialog,
    DialogClose,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
  } from '@/components/ui/select'

const fornecedores = [
    {
        name: 'Fornecedor 1'
    },
    {
        name: 'Fornecedor 2'
    },
    {
        name: 'Fornecedor 3'
    },
    {
        name: 'Fornecedor 4'
    },
    {
        name: 'Fornecedor 5'
    },
    {
        name: 'Fornecedor 6'
    },
    {
        name: 'Fornecedor 7'
    },
]

export default function Home() {
  return (
    <main className="flex min-h-screen w-full flex-col p-24">
        <h1 className="mb-8 text-2xl">
            Fornecedores
        </h1>
        <div>
            <div className="flex justify-between items-center mb-8">
                <div className="flex w-full max-w-sm items-center">
                    <Input type="search" placeholder="Procurar" />
                    <Button type="submit" className="bg-white text-black hover:bg-cyan-200">
                        <Search color="black" size={18} />
                    </Button>
                </div>
                <div>
                    <Dialog>
                        <DialogTrigger asChild>
                            <Button className="bg-green-500 text-black flex justify-center items-center gap-2 hover:bg-green-400">
                                <Plus color="black" size={18} />
                                Adicionar Fornecedor
                            </Button>
                        </DialogTrigger>
                        <DialogContent className="sm:max-w-md bg-black text-white">
                            <DialogHeader className="pb-4 mb-2 border-b-2 border-rose-50">
                                <DialogTitle className="text-2xl">Adicionar Fornecedor</DialogTitle>
                            </DialogHeader>

                            <div className="grid w-full max-w-sm items-center gap-1.5">
                                <Label htmlFor="name">Nome</Label>
                                <Input type="text" id="name" placeholder="Nome" />
                            </div>


                            <DialogFooter className="sm:justify-start mt-8">
                                <DialogClose asChild>
                                    <Button type="button" variant="destructive" className="bg-red-500 hover:bg-red-400">
                                        Close
                                    </Button>
                                </DialogClose>
                                <Button type="submit" className="rounded-lg font-bold bg-green-500 text-black hover:bg-green-400">
                                    Cadastrar
                                </Button>
                            </DialogFooter>
                        </DialogContent>
                    </Dialog>
                </div>
            </div>
            <Table>
                <TableCaption>Lista de fornecedores.</TableCaption>
                <TableHeader>
                    <TableRow>
                    <TableHead>Nome</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {fornecedores.map((fornecedor, id) => (
                        <TableRow key={id}>
                            <TableCell>{fornecedor.name}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </div>
    </main>
  );
}
