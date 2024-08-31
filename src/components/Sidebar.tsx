import Image from "next/image"
import { Button } from "@/components/ui/button"

export default function Sidebar() {
    const menu = [{
            label: 'Dashboard',
            icon: '',
            link: '/'
        }, {
            label: 'Estoque',
            icon: '',
            link: '/estoque'
        }, {
            label: 'Compras',
            icon: '',
            link: '/compras'
        }, {
            label: 'Vendas',
            icon: '',
            link: '/vendas'
        }, {
            label: 'Fornecedores',
            icon: '',
            link: '/fornecedores'
        },
    ]

    return (
        <header className="min-h-screen w-64 bg-stone-900 p-8 flex flex-col items-center justify-between space-y-16 border-r-2 border-cyan-500">
            <div className="flex flex-col items-center gap-16">
                <Image src="/logo.png" width={100} height={100} alt="Logo" />
                <ul className="flex flex-col justify-center space-y-8">
                        {menu && menu.map((m, id) => {
                            return (
                                <li key={id}> 
                                    <a href={m.link} className="cursor-pointer"> {m.label} </a>
                                </li>
                            )
                        })}
                </ul>
            </div>
            <div className="flex flex-col gap-8">
                <p><a href="/settings">Configurações</a></p>
                <Button className="text-base"> Sair </Button> 
            </div>
        </header>
    )
}