'use client'

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input"

import { Search, Trash } from "lucide-react"
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
import { useStorageStore } from './store'
import ProductDialog from "@/components/estoque/Dialog";

// const total = estoque.reduce(function(accumulator,value){return accumulator + value.total},0)

export default function Home() {
    const products = useStorageStore((state: any) => state.products)
    const deleteProduct = useStorageStore((state: any) => state.removeProduct)

    console.log("products: ", products);

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
                        <ProductDialog />
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
                        {products.map((product: any, id: number) => (
                            <TableRow key={id}>
                                <TableCell>{product.name}</TableCell>
                                <TableCell>{product.qtd}</TableCell>
                                <TableCell>{product.unit_value}</TableCell>
                                <TableCell>R$ {product.total},00</TableCell>
                                <TableCell className="flex items-center justify-end gap-4">   
                                    <ProductDialog product={product} />             
                                    <Button className="bg-red-500 flex justify-center items-center gap-2 hover:bg-red-400 rounded" onClick={() => deleteProduct(product.id)}>
                                        <Trash color="black" size={18} />
                                    </Button>                          
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                    <TableFooter>
                        <TableRow>
                        <TableCell colSpan={3} className="font-bold">Total</TableCell>
                        <TableCell className="font-bold">R$ 1000,00</TableCell>
                        </TableRow>
                    </TableFooter>
                </Table>
            </div>
        </main>
    );
}
