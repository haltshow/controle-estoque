import Image from "next/image"
import { Button } from "@/components/ui/button"
import IconLucide from "@/components/Icon"

export default function Sidebar() {
    const menu = [{
            label: 'Dashboard',
            icon: "layout-dashboard",
            link: '/',
        }, {
            label: 'Estoque',
            icon: 'package-open',
            link: '/estoque'
        }, {
            label: 'Compras',
            icon: 'shopping-basket',
            link: '/compras'
        }, {
            label: 'Vendas',
            icon: 'badge-dollar-sign',
            link: '/vendas'
        }, {
            label: 'Fornecedores',
            icon: 'container',
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
                                <div className="flex justify-center items-center gap-2" key={id}>
                                    {m.icon ? (
                                        <IconLucide name={m.icon} size={20} />
                                    ) : ''}
                                
                                    <li> 
                                        <a href={m.link} className="cursor-pointer"> {m.label} </a>
                                    </li>
                                </div>
                            )
                        })}
                </ul>
            </div>
            <div className="flex flex-col gap-8">
                <p>
                    <a href="/settings" className="flex justify-center items-center gap-2">
                        <IconLucide name="settings" size={20} />
                        Configurações
                    </a>
                </p>
                <Button className="text-base flex justify-center items-center gap-2">
                    <IconLucide name="log-out" size={20} />
                    Sair 
                </Button> 
            </div>
        </header>
    )
}