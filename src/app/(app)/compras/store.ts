import { create } from 'zustand'
import { v4 as uuid } from 'uuid';

export type Purchase = {
    id: string;
    supplier: string;
    product: string;
    unit_value: number;
    qtd: number;
    status: string;
}

export type State = {
    purchases: Purchase[]
}

export type Actions = {
    addPurchase: (supplier: string, product: string, unit_value: number, qtd: number, status: string) => void;
    removePurchase: (id: string) => void;
    updatePurchase: (id: string, newPurchase: Purchase) => void;
}

export const useStorageStore = create()(set => ({
    purchases: [
        {
            id: uuid(),
            supplier: 'Fornecedor 1',
            product: 'Produto 1',
            unit_value: 100,
            qtd: 10,
            status: 'Aguardando entrega'
        },
        {
            id: uuid(),
            supplier: 'Fornecedor 2',
            product: 'Produto 2',
            unit_value: 100,
            qtd: 10,
            status: 'Aguardando entrega'
        },
        {
            id: uuid(),
            supplier: 'Fornecedor 3',
            product: 'Produto 3',
            unit_value: 100,
            qtd: 10,
            status: 'Aguardando entrega'
        },
        {
            id: uuid(),
            supplier: 'Fornecedor 4',
            product: 'Produto 4',
            unit_value: 100,
            qtd: 10,
            status: 'Concluída'
        },
        {
            id: uuid(),
            supplier: 'Fornecedor 5',
            product: 'Produto 5',
            unit_value: 100,
            qtd: 10,
            status: 'Aguardando entrega'
        }
    ],
    addPurchase: (supplier: string, product: string, unit_value: number, qtd: number, status: string) => set((state: State) => ({ purchases: [...state.purchases, 
        {
            id: uuid(), 
            supplier,
            product,
            unit_value,
            qtd,
            status
        }] 
    })),
    removePurchase: (id: string) => set((state: State) => ({ purchases: state.purchases.filter(product => product.id !== id) })),
    updatePurchase: (id: string, newPurchase: Purchase) => set((state: State) => ({ 
        purchases: state.purchases.map(purchase => 
            purchase.id === id ? 
            { id: purchase.id, supplier: newPurchase.supplier, product: newPurchase.product, unit_value: newPurchase.unit_value, qtd: purchase.qtd, status: newPurchase.status }
            : purchase
        ) 
    })),
}))