import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
  } from "@/components/ui/form"
import { DialogClose } from "@radix-ui/react-dialog"
import { z } from "zod"
import { Button } from "../../ui/button"
import { DialogFooter } from "../../ui/dialog"
import { Input } from "../../ui/input"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { useSupplierStore } from '@/app/(app)/fornecedores/store'

const FormSchema = z.object({
    name: z.string().min(2, {
        message: "O nome do fornecedor precisa ter no mínimo 2 caracteres.",
    }),
})

export default function SupplierForm({ supplier, setIsOpen }: any) {    
    console.log("supplier: ", supplier)

    const editSupplier = useSupplierStore((state: any) => state.updateSupplier)
    const addSupplier = useSupplierStore((state: any) => state.addSupplier)

    function sendEditSupplier(object: z.infer<typeof FormSchema>) {
        const name = object?.name

        editSupplier(supplier.id, {id: supplier.id, name: name})
        setIsOpen(false)
    }

    function sendAddSupplier(object: z.infer<typeof FormSchema>) {
        const name = object?.name

        addSupplier(name)
        setIsOpen(false)
    }

    const form = useForm<z.infer<typeof FormSchema>>({
        resolver: zodResolver(FormSchema),
        defaultValues: {
            name: supplier?.name ?? '',
        },
    })

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(supplier ? sendEditSupplier : sendAddSupplier)} className="space-y-8">
                <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Nome</FormLabel>
                            <FormControl>
                                <Input placeholder="Nome do Fornecedor" {...field} />
                            </FormControl>
                            <FormMessage className="text-red-400" />
                        </FormItem>
                    )}
                />
                <DialogFooter className="sm:justify-start mt-8">
                    <DialogClose asChild>
                        <Button type="button" variant="destructive" className="bg-red-500 hover:bg-red-400">
                            Close
                        </Button>
                    </DialogClose>
                    <Button type="submit" className="rounded-lg font-bold bg-green-500 text-black hover:bg-green-400">
                        Editar
                    </Button>
                </DialogFooter>
            </form>
        </Form>
    )
}