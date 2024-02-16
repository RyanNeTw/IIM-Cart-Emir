import { createContext, ReactNode, useState } from 'react'
import { Products } from '../types'

type MonContexteType = {
    cart: Products[]
    setCart: React.Dispatch<React.SetStateAction<Products[]>>
}

export const StoreContext = createContext<MonContexteType | null>(null)

type StoreProviderProps = {
    children: ReactNode
}

export const StoreProvider = ({ children }: StoreProviderProps) => {
    const [cart, setCart] = useState<Products[]>([])

    return (
        <StoreContext.Provider value={{ cart, setCart }}>
            {children}
        </StoreContext.Provider>
    )
}
