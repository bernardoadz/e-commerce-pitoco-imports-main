"use client"

import { createContext, useContext, useState, useCallback, useEffect, type ReactNode } from "react"
import type { Product } from "./products"

export interface CartItem {
  product: Product
  size: string
  quantity: number
}

interface CartContextType {
  items: CartItem[]
  addItem: (product: Product, size: string) => void
  removeItem: (productId: string, size: string) => void
  updateQuantity: (productId: string, size: string, quantity: number) => void
  clearCart: () => void
  totalItems: number
  totalPrice: number
}

const CartContext = createContext<CartContextType | null>(null)

export function CartProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([])

  // --- O SEGREDO ESTÁ AQUI: PERSISTÊNCIA ---
  
  // 1. Carrega os itens do navegador quando o site abre
  useEffect(() => {
    const savedCart = localStorage.getItem("pitoco-cart")
    if (savedCart) {
      try {
        setItems(JSON.parse(savedCart))
      } catch (e) {
        console.error("Erro ao carregar o carrinho", e)
      }
    }
  }, [])

  // 2. Salva os itens no navegador toda vez que o carrinho muda
  useEffect(() => {
    localStorage.setItem("pitoco-cart", JSON.stringify(items))
  }, [items])

  // ------------------------------------------

  const addItem = useCallback((product: Product, size: string) => {
    setItems(prev => {
      const existingIndex = prev.findIndex(
        item => item.product.id === product.id && item.size === size
      )

      if (existingIndex > -1) {
        const updated = [...prev]
        updated[existingIndex].quantity += 1
        return updated
      }

      return [...prev, { product, size, quantity: 1 }]
    })
  }, [])

  const removeItem = useCallback((productId: string, size: string) => {
    setItems(prev => prev.filter(
      item => !(item.product.id === productId && item.size === size)
    ))
  }, [])

  const updateQuantity = useCallback((productId: string, size: string, quantity: number) => {
    if (quantity <= 0) {
      removeItem(productId, size)
      return
    }

    setItems(prev => prev.map(item => 
      item.product.id === productId && item.size === size
        ? { ...item, quantity }
        : item
    ))
  }, [removeItem])

  const clearCart = useCallback(() => {
    setItems([])
    localStorage.removeItem("pitoco-cart")
  }, [])

  const totalItems = items.reduce((sum, item) => sum + item.quantity, 0)
  const totalPrice = items.reduce((sum, item) => sum + (item.product.price * item.quantity), 0)

  return (
    <CartContext.Provider value={{
      items,
      addItem,
      removeItem,
      updateQuantity,
      clearCart,
      totalItems,
      totalPrice
    }}>
      {children}
    </CartContext.Provider>
  )
}

export function useCart() {
  const context = useContext(CartContext)
  if (!context) {
    throw new Error("useCart must be used within a CartProvider")
  }
  return context
}