'use client'

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input"
import { Search, Plus, Trash } from "lucide-react"
import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
  } from "@/components/ui/table"
import { useSaleStore } from './store'
import { Badge } from "@/components/ui/badge";
import SaleDialog from "@/components/vendas/Dialog"

export default function Home() {
    const sales = useSaleStore((state: any) => state.sales)
    const deleteSale = useSaleStore((state: any) => state.removeSale)

    return (
        <main className="flex min-h-screen w-full flex-col p-24">
            <h1 className="mb-8 text-2xl">
                Vendas
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
                        <SaleDialog />
                    </div>
                </div>
                <Table>
                    <TableCaption>Lista do estoque atual.</TableCaption>
                    <TableHeader>
                        <TableRow>
                            <TableHead>Produto</TableHead>
                            <TableHead>Valor Unitário</TableHead>
                            <TableHead>Quantidade</TableHead>
                            <TableHead>Total</TableHead>
                            <TableHead>Status</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {sales.map((sale: any, id: number) => (
                            <TableRow key={id}>
                                <TableCell>{sale.product}</TableCell>
                                <TableCell>{sale.unit_value}</TableCell>
                                <TableCell>{sale.qtd}</TableCell>
                                <TableCell>R$ {sale.total.toFixed(2).replace(".",",")}</TableCell>
                                <TableCell>
                                    {sale && sale.status == 'Aguardando confirmação' && (
                                        <Badge className="bg-yellow-500 text-black font-bold">{sale.status}</Badge>
                                    )}
                                    {sale && sale.status == 'Concluída' && (
                                    <Badge className="bg-green-500 text-black font-bold">{sale.status}</Badge>
                                    )}
                                </TableCell>
                                <TableCell className="flex items-center justify-end gap-4">   
                                    <SaleDialog sale={sale} />             
                                    <Button className="bg-red-500 flex justify-center items-center gap-2 hover:bg-red-400 rounded" onClick={() => deleteSale(sale.id)}>
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
