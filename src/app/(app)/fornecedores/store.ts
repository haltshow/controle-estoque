import { create } from 'zustand'
import { v4 as uuid } from 'uuid';

export type Supplier = {
    id: string;
    name: string;
}

export type State = {
    suppliers: Supplier[]
}

export type Actions = {
    addSuplier: (name: string) => void;
    removeSupplier: (id: string) => void;
    updateSupplier: (id: string, newSupplier: Supplier) => void;
}

export const useSupplierStore = create()(set => ({
    suppliers: [
        {
            id: uuid(),
            name: 'Fornecedor 1'
        },
        {
            id: uuid(),
            name: 'Fornecedor 2'
        },
        {
            id: uuid(),
            name: 'Fornecedor 3'
        }
    ],
    addSupplier: (name: string) => set((state: State) => ({ suppliers: [...state.suppliers, {id: uuid(), name}] })),
    removeSupplier: (id: string) => set((state: State) => ({ suppliers: state.suppliers.filter(supplier => supplier.id !== id) })),
    updateSupplier: (id: string, newSupplier: Supplier) => set((state: State) => ({ 
        suppliers: state.suppliers.map(supplier => 
            supplier.id === id ? newSupplier : supplier
        ) 
    })),
}))