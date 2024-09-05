import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
  } from "@/components/ui/form"
import { DialogClose } from "@radix-ui/react-dialog"
import { z } from "zod"
import { Button } from "../ui/button"
import { DialogFooter } from "../ui/dialog"
import { Input } from "../ui/input"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { useSaleStore } from "@/app/(app)/vendas/store"
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
  } from '@/components/ui/select'


const FormSchema = z.object({
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

export default function SaleForm({ sale, setIsOpen }: any) {    
    console.log("sale: ", sale)

    const editSale= useSaleStore((state: any) => state.updateSale)
    const addSale = useSaleStore((state: any) => state.addSale)

    function sendAddSale(object: z.infer<typeof FormSchema>) {
        addSale(object?.product, object?.unit_value, object?.qtd, object?.status)
        setIsOpen(false)
    }

    function sendEditSale(object: z.infer<typeof FormSchema>) {
        editSale(sale.id, {product: object?.product, unit_value: object?.unit_value, qtd: object?.qtd, status: object?.status})
        setIsOpen(false)
    }

    const form = useForm<z.infer<typeof FormSchema>>({
        resolver: zodResolver(FormSchema),
        defaultValues: {
            product: sale?.product ?? '',
            unit_value: sale?.unit_value ?? '',
            qtd: sale?.qtd ?? '',
            status: sale?.status ?? ''
        },
    })

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(sale ? sendEditSale : sendAddSale)} className="space-y-4">
                <FormField
                    control={form.control}
                    name="product"
                    render={({ field }) => (
                        <div>
                            <FormItem>
                                <FormLabel>Produto</FormLabel>
                                <FormControl>
                                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                                        <SelectTrigger className="">
                                            <SelectValue placeholder="Selecione um produto" />
                                        </SelectTrigger>
                                        <SelectContent className="bg-rose-50 text-black font-bold">
                                            <SelectItem value="Produto Teste">Produto Teste</SelectItem>
                                            <SelectItem value="Produto Teste 2">Produto Teste 2</SelectItem>
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
                                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                                        <SelectTrigger className="">
                                            <SelectValue placeholder="Selecione um status" />
                                        </SelectTrigger>
                                        <SelectContent className="bg-rose-50 text-black font-bold">
                                            <SelectItem value="Aguardando confirmação">Aguardando confirmação</SelectItem>
                                            <SelectItem value="Concluída">Concluída</SelectItem>
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
                        { sale ? 'Editar' : 'Cadastrar' }
                    </Button>
                </DialogFooter>
            </form>
        </Form>
    )
}