import Image from "next/image"

export default function Sidebar() {
    const menu = [{
            label: 'Dashboard',
            icon: '',
            link: '/dashboard'
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
        <header className="min-h-screen w-64 bg-stone-900 p-8 flex flex-col items-center space-y-16 border-r-2 border-cyan-500">
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
        </header>
    )
}