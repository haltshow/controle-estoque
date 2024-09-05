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
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
  } from '@/components/ui/select'
import { Label } from "@radix-ui/react-label"


const FormSchema = z.object({
    supplier: z.string({
        required_error: "Fornecedor é obrigatório",
        invalid_type_error: "Fornecedor precisa ser string",
    }),
    product: z.string({
        required_error: "Produto é obrigatório",
        invalid_type_error: "Produto precisa ser string",
    }),
    unit_value: z.number({
        required_error: "Valor unitário é obrigatório",
        invalid_type_error: "Valor unitário precisa ser um número",
    }),
    qtd: z.number({
        required_error: "Quantidade é obrigatório",
        invalid_type_error: "Quantidade precisa ser um número",
    }),
    status: z.string({
        required_error: "Status é obrigatório",
        invalid_type_error: "Status precisa ser string",
    }),
})

export default function PurchaseForm({ purchase, setIsOpen }: any) {    
    console.log("purchase: ", purchase)

    const editProduct = useStorageStore((state: any) => state.updateProduct)
    const addProduct = useStorageStore((state: any) => state.addProduct)

    function sendEditProduct(object: z.infer<typeof FormSchema>) {
        const supplier = object?.supplier
        const unit_value = object?.unit_value

        editProduct(purchase.id, {name: name, unit_value: unit_value})
        setIsOpen(false)
    }

    function sendAddProduct(object: z.infer<typeof FormSchema>) {
        console.log("object: ", object)
        const supplier = object?.supplier
        const unit_value = object?.unit_value

        addProduct(name, unit_value)
        setIsOpen(false)
    }

    const form = useForm<z.infer<typeof FormSchema>>({
        resolver: zodResolver(FormSchema),
        defaultValues: {
            supplier: purchase?.name ?? '',
            product: purchase?.product ?? '',
            unit_value: purchase?.unit_value ?? '',
            qtd: purchase?.qtd ?? '',
            status: purchase?.status ?? ''
        },
    })

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(purchase ? sendEditProduct : sendAddProduct)} className="space-y-4">
                <div className="grid w-full max-w-sm items-center gap-1.5">
                    <Label htmlFor="valor_unitario">Valor Unitário</Label>
                    <Input type="number" id="valor_unitario" placeholder="R$" />
                </div>

                <div className="grid w-full max-w-sm items-center gap-1.5">
                    <Label htmlFor="quantity">Quantidade</Label>
                    <Input type="number" id="quantity" placeholder="0" />
                </div>
                <FormField
                    control={form.control}
                    name="supplier"
                    render={({ field }) => (
                        <div>
                            <FormItem>
                                <FormLabel>Fornecedor</FormLabel>
                                <FormControl>
                                    <Select defaultValue="teste" {...field}>
                                        <SelectTrigger className="">
                                            <SelectValue placeholder="Selecione um fornecedor" />
                                        </SelectTrigger>
                                        <SelectContent className="bg-rose-50 text-black font-bold">
                                            <SelectItem value="teste">Fornecedor Teste</SelectItem>
                                            <SelectItem value="teste2">Fornecedor Teste 2</SelectItem>
                                        </SelectContent>
                                    </Select>
                                </FormControl>
                                <FormMessage className="text-red-400" />
                            </FormItem>
                        </div>
                    )}
                />
                <FormField
                    control={form.control}
                    name="product"
                    render={({ field }) => (
                        <div>
                            <FormItem>
                                <FormLabel>Produto</FormLabel>
                                <FormControl>
                                    <Select defaultValue="teste" {...field}>
                                        <SelectTrigger className="">
                                            <SelectValue placeholder="Selecione um produto" />
                                        </SelectTrigger>
                                        <SelectContent className="bg-rose-50 text-black font-bold">
                                            <SelectItem value="teste">Produto Teste</SelectItem>
                                            <SelectItem value="teste2">Produto Teste 2</SelectItem>
                                        </SelectContent>
                                    </Select>
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
                <FormField
                    control={form.control}
                    name="qtd"
                    render={({ field }) => (
                        <div>
                            <FormItem>
                                <FormLabel>Quantidade</FormLabel>
                                <FormControl>
                                    <Input type="number" placeholder="" {...field} onChange={event => field.onChange(+event.target.value)} />
                                </FormControl>
                                <FormMessage className="text-red-400" />
                            </FormItem>
                        </div>
                    )}
                />
                <FormField
                    control={form.control}
                    name="status"
                    render={({ field }) => (
                        <div>
                            <FormItem>
                                <FormLabel>Status</FormLabel>
                                <FormControl>
                                    <Select defaultValue="teste" {...field}>
                                        <SelectTrigger className="">
                                            <SelectValue placeholder="Selecione um status" />
                                        </SelectTrigger>
                                        <SelectContent className="bg-rose-50 text-black font-bold">
                                            <SelectItem value="teste">Aguardando Entrega</SelectItem>
                                            <SelectItem value="teste2">Concluído</SelectItem>
                                        </SelectContent>
                                    </Select>
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
                        { purchase ? 'Editar' : 'Cadastrar' }
                    </Button>
                </DialogFooter>
            </form>
        </Form>
    )
}