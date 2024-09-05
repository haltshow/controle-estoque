'use client'

import { ThemeSwitcher } from "@/components/ThemeSwitcher"
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label";
import Sidebar from "@/components/Sidebar"
import Image from "next/image"
import { Search, Plus, Copy, Trash } from "lucide-react"
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
import { useStorageStore } from './store'
import { Badge } from "@/components/ui/badge";
import PurchaseDialog from "@/components/compras/Dialog";

export default function Home() {
    const purchases = useStorageStore((state: any) => state.purchases)
    const deletePurchase = useStorageStore((state: any) => state.removePurchase)

    return (
        <main className="flex min-h-screen w-full flex-col p-24">
            <h1 className="mb-8 text-2xl">
                Compras
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
                        <PurchaseDialog />
                    </div>
                </div>
                <Table>
                    <TableCaption>Lista do estoque atual.</TableCaption>
                    <TableHeader>
                        <TableRow>
                            <TableHead>Fornecedor</TableHead>
                            <TableHead>Produto</TableHead>
                            <TableHead>Valor Unitário</TableHead>
                            <TableHead>Quantidade</TableHead>
                            <TableHead>Status</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {purchases.map((purchase: any, id: number) => (
                        <TableRow key={id}>
                            <TableCell>{purchase.supplier}</TableCell>
                            <TableCell>{purchase.product}</TableCell>
                            <TableCell>{purchase.unit_value}</TableCell>
                            <TableCell>{purchase.qtd}</TableCell>
                            {purchase && purchase.status == 'Aguardando entrega' && (
                                <TableCell><Badge className="bg-yellow-500 text-black font-bold">{purchase.status}</Badge></TableCell>
                            )}
                            {purchase && purchase.status == 'Concluída' && (
                                <TableCell><Badge className="bg-green-500 text-black font-bold">{purchase.status}</Badge></TableCell>
                            )}
                            <TableCell className="flex items-center justify-end gap-4">   
                                <PurchaseDialog purchase={purchase} />             
                                <Button className="bg-red-500 flex justify-center items-center gap-2 hover:bg-red-400 rounded" onClick={() => deletePurchase(purchase.id)}>
                                    <Trash color="black" size={18} />
                                </Button>                          
                            </TableCell>
                        </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </div>
        </main>
    );
}
