'use client'

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label";
import { Search, Trash } from "lucide-react"
import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
  } from "@/components/ui/table"
import { usePurchaseStore } from './store'
import { Badge } from "@/components/ui/badge";
import PurchaseDialog from "@/components/compras/Dialog";

export default function Home() {
    const purchases = usePurchaseStore((state: any) => state.purchases)
    const deletePurchase = usePurchaseStore((state: any) => state.removePurchase)

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
                            <TableHead>Total</TableHead>
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
                            <TableCell>R$ {purchase.total.toFixed(2).replace(".", ",")}</TableCell>
                            <TableCell>
                                {purchase && purchase.status == 'Aguardando entrega' && (
                                    <Badge className="bg-yellow-500 text-black font-bold">{purchase.status}</Badge>
                                )}
                                {purchase && purchase.status == 'Concluída' && (
                                    <Badge className="bg-green-500 text-black font-bold">{purchase.status}</Badge>
                                )}
                            </TableCell>
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
