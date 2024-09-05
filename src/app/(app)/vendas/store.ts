import { create } from 'zustand'
import { v4 as uuid } from 'uuid';

export type Sale = {
    id: string;
    product: string;
    unit_value: number;
    qtd: number;
    total: number;
    status: string;
}

export type State = {
    sales: Sale[]
}

export type Actions = {
    addSale: (product: string, unit_value: number, qtd: number, status: string) => void;
    removeSale: (id: string) => void;
    updateSale: (id: string, newSale: Sale) => void;
}

export const useSaleStore = create()(set => ({
    sales: [
        {
            id: uuid(),
            product: 'Produto 1',
            unit_value: 100,
            qtd: 10,
            total: 100 * 10,
            status: 'Aguardando confirmação'
        },
        {
            id: uuid(),
            supplier: 'Fornecedor 2',
            product: 'Produto 2',
            unit_value: 100,
            qtd: 10,
            total: 100 * 10,
            status: 'Aguardando confirmação'
        },
        {
            id: uuid(),
            supplier: 'Fornecedor 3',
            product: 'Produto 3',
            unit_value: 100,
            qtd: 10,
            total: 100 * 10,
            status: 'Aguardando confirmação'
        },
        {
            id: uuid(),
            supplier: 'Fornecedor 4',
            product: 'Produto 4',
            unit_value: 100,
            qtd: 10,
            total: 100 * 10,
            status: 'Concluída'
        },
        {
            id: uuid(),
            supplier: 'Fornecedor 5',
            product: 'Produto 5',
            unit_value: 100,
            qtd: 10,
            total: 100 * 10,
            status: 'Aguardando confirmação'
        }
    ],
    addSale: (product: string, unit_value: number, qtd: number, status: string) => set((state: State) => ({ sales: [...state.sales, 
        {
            id: uuid(), 
            product,
            unit_value,
            qtd,
            total: unit_value * qtd,
            status
        }] 
    })),
    removeSale: (id: string) => set((state: State) => ({ sales: state.sales.filter(product => product.id !== id) })),
    updateSale: (id: string, newSale: Sale) => set((state: State) => ({ 
        sales: state.sales.map(sale => 
            sale.id === id ? 
            { id: sale.id, product: newSale.product, unit_value: newSale.unit_value, qtd: newSale.qtd, total: newSale.unit_value * newSale.qtd, status: newSale.status }
            : sale
        ) 
    })),
}))