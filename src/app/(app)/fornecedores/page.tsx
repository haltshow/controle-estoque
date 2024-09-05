'use client'
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input"
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
import { useSupplierStore } from './store'
import SupplierDialog from "@/components/fornecedores/Dialog";

export default function Home() {
    const suppliers = useSupplierStore((state: any) => state.suppliers)
    const deleteSupplier = useSupplierStore((state: any) => state.removeSupplier)

    console.log("suppliers: ", suppliers);

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
                        <SupplierDialog />
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
                        {suppliers.map((supplier: any, id: number) => (
                            <TableRow key={id}>
                                <TableCell>{supplier.name}</TableCell>
                                <TableCell className="flex items-center justify-end gap-4">   
                                    <SupplierDialog supplier={supplier} />             
                                    <Button className="bg-red-500 flex justify-center items-center gap-2 hover:bg-red-400 rounded" onClick={() => deleteSupplier(supplier.id)}>
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
