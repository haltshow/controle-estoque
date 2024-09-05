import { Button } from "@/components/ui/button"
import {
    Dialog,
    DialogClose,
    DialogContent,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { Plus, Edit } from "lucide-react"
import { useState } from "react";
import PurchaseForm from "./Form";

export default function PurchaseDialog({purchase}: any) {
    const [open, setOpen] = useState(false);
    return (
        <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger asChild>
                {purchase ? (
                    <Button className="bg-yellow-500 text-black flex justify-center items-center gap-2 hover:bg-yellow-400 rounded">
                        <Edit color="black" size={18} />
                    </Button>
                ) : (
                    <Button className="bg-green-500 text-black flex justify-center items-center gap-2 hover:bg-green-400 rounded">
                        <Plus color="black" size={18} />
                        Cadastrar
                    </Button>
                )}
            </DialogTrigger>
            <DialogContent className="sm:max-w-md bg-black text-white">
                <DialogHeader className="pb-4 mb-2 border-b-2 border-rose-50">
                    <DialogTitle className="text-2xl">Adicionar Compra</DialogTitle>
                </DialogHeader>
                <div className="grid w-full max-w-sm items-center gap-1.5">
                    <PurchaseForm purchase={purchase} setIsOpen={setOpen} />
                </div>
            </DialogContent>
        </Dialog>
    )
}