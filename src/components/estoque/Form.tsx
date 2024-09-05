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
import { object, z } from "zod"
import { Button } from "../ui/button"
import { DialogFooter } from "../ui/dialog"
import { Input } from "../ui/input"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { useStorageStore } from "@/app/(app)/estoque/store"

const FormSchema = z.object({
    name: z.string().min(2, {
        message: "O nome do fornecedor precisa ter no mínimo 2 caracteres.",
    }),
    unit_value: z.number({
        required_error: "Valor unitário é obrigatório",
        invalid_type_error: "Valor unitário precisa ser um número",
    })
})

export default function StorageForm({ product, setIsOpen }: any) {    
    console.log("product: ", product)

    const editProduct = useStorageStore((state: any) => state.updateProduct)
    const addProduct = useStorageStore((state: any) => state.addProduct)

    function sendEditProduct(object: z.infer<typeof FormSchema>) {
        const name = object?.name
        const unit_value = object?.unit_value

        editProduct(product.id, {name: name, unit_value: unit_value})
        setIsOpen(false)
    }

    function sendAddProduct(object: z.infer<typeof FormSchema>) {
        console.log("object: ", object)
        const name = object?.name
        const unit_value = object?.unit_value

        addProduct(name, unit_value)
        setIsOpen(false)
    }

    const form = useForm<z.infer<typeof FormSchema>>({
        resolver: zodResolver(FormSchema),
        defaultValues: {
            name: product?.name ?? '',
            unit_value: product?.unit_value ?? ''
        },
    })

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(product ? sendEditProduct : sendAddProduct)} className="space-y-4">
                <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                        <div>
                            <FormItem>
                                <FormLabel>Nome do Produto</FormLabel>
                                <FormControl>
                                    <Input placeholder="Nome" {...field} />
                                </FormControl>
                                <FormMessage className="text-red-400" />
                            </FormItem>
                        </div>
                    )}
                />
                <FormField
                    control={form.control}
                    name="unit_value"
                    render={({ field }) => (
                        <div>
                            <FormItem>
                                <FormLabel>Valor Unitário</FormLabel>
                                <FormControl>
                                    <Input type="number" placeholder="R$" {...field} onChange={event => field.onChange(+event.target.value)} />
                                </FormControl>
                                <FormMessage className="text-red-400" />
                            </FormItem>
                        </div>
                    )}
                />
                <DialogFooter className="sm:justify-start mt-8">
                    <DialogClose asChild>
                        <Button type="button" variant="destructive" className="bg-red-500 hover:bg-red-400">
                            Close
                        </Button>
                    </DialogClose>
                    <Button type="submit" className="rounded-lg font-bold bg-green-500 text-black hover:bg-green-400">
                        { product ? 'Editar' : 'Cadastrar' }
                    </Button>
                </DialogFooter>
            </form>
        </Form>
    )
}