import { create } from 'zustand'
import { v4 as uuid } from 'uuid';

export type Product = {
    id: string;
    name: string;
    unit_value: number;
    qtd: number;
}

export type State = {
    products: Product[]
}

export type Actions = {
    addProduct: (name: string, unit_value: number) => void;
    removeProduct: (id: string) => void;
    updateProduct: (id: string, newProduct: Product) => void;
}

export const useStorageStore = create()(set => ({
    products: [
        {
            id: uuid(),
            name: 'Produto 1',
            unit_value: 20,
            qtd: 0,
            total: 0
        },
        {
            id: uuid(),
            name: 'Produto 2',
            unit_value: 30,
            qtd: 10,
            total: 300
        },
        {
            id: uuid(),
            name: 'Produto 3',
            unit_value: 40,
            qtd: 20,
            total: 800
        }
    ],
    addProduct: (name: string, unit_value: number) => set((state: State) => ({ products: [...state.products, 
        {
            id: uuid(), 
            name,
            unit_value,
            qtd: 0,
            total: unit_value * 0
        }] 
    })),
    removeProduct: (id: string) => set((state: State) => ({ products: state.products.filter(product => product.id !== id) })),
    updateProduct: (id: string, newProduct: Product) => set((state: State) => ({ 
        products: state.products.map(product => 
            product.id === id ? 
            { id: product.id, qtd: product.qtd, name: newProduct.name, unit_value: newProduct.unit_value, total: product.qtd * newProduct.unit_value }
            : product
        ) 
    })),
}))