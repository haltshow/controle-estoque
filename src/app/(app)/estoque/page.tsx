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
import { listaEstoque } from './estoque'

const estoque = listaEstoque

const total = estoque.reduce(function(accumulator,value){return accumulator + value.total},0)

export default function Home() {
  return (
    <main className="flex min-h-screen w-full flex-col p-24">
        <h1 className="mb-8 text-2xl">
            Estoque
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
                                Adicionar Produto
                            </Button>
                        </DialogTrigger>
                        <DialogContent className="sm:max-w-md bg-black text-white">
                            <DialogHeader className="pb-4 mb-2 border-b-2 border-rose-50">
                                <DialogTitle className="text-2xl">Adicionar Produto</DialogTitle>
                                {/* <DialogDescription>
                                    Anyone who has this link will be able to view this.
                                </DialogDescription> */}
                            </DialogHeader>

                            <div className="flex flex-col gap-2">
                                <Label htmlFor="supplier">Fornecedor</Label>
                                <Select defaultValue="teste">
                                    <SelectTrigger className="">
                                        <SelectValue placeholder="Selecione um fornecedor" />
                                    </SelectTrigger>
                                    <SelectContent className="bg-rose-50 text-black font-bold">
                                        <SelectItem value="teste">Fornecedor Teste</SelectItem>
                                        <SelectItem value="teste2">Fornecedor Teste 2</SelectItem>
                                    </SelectContent>
                                </Select>
                            </div>
                            <div className="grid w-full max-w-sm items-center gap-1.5">
                                <Label htmlFor="name">Nome</Label>
                                <Input type="text" id="name" placeholder="Nome" />
                            </div>

                            <div className="grid w-full max-w-sm items-center gap-1.5">
                                <Label htmlFor="valor_unitario">Valor Unitário</Label>
                                <Input type="number" id="valor_unitario" placeholder="R$" />
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
                <TableCaption>Lista do estoque atual.</TableCaption>
                <TableHeader>
                    <TableRow>
                    <TableHead>Produto</TableHead>
                    <TableHead>Quantidade</TableHead>
                    <TableHead>Valor unitário</TableHead>
                    <TableHead>Total</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {estoque.map((est, id) => (
                    <TableRow key={id}>
                        <TableCell>{est.produto}</TableCell>
                        <TableCell>{est.qtd}</TableCell>
                        <TableCell>{est.valor_unitario}</TableCell>
                        <TableCell>R$ {est.total},00</TableCell>
                    </TableRow>
                    ))}
                </TableBody>
                <TableFooter>
                    <TableRow>
                    <TableCell colSpan={3} className="font-bold">Total</TableCell>
                    <TableCell className="font-bold">R$ {total},00</TableCell>
                    </TableRow>
                </TableFooter>
            </Table>
        </div>
    </main>
  );
}
