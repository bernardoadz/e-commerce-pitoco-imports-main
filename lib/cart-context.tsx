"use client"

import { createContext, useContext, useState, useCallback, useEffect, type ReactNode } from "react"
import type { Product } from "./products"

export interface CartItem {
  product: Product
  size: string
  color: string 
  image: string // ADICIONADO: Para guardar a foto exata da cor escolhida
  quantity: number
}

interface CartContextType {
  items: CartItem[]
  addItem: (product: Product, size: string, color: string, image: string) => void 
  removeItem: (productId: string, size: string, color: string) => void 
  updateQuantity: (productId: string, size: string, color: string, quantity: number) => void 
  clearCart: () => void
  totalItems: number
  totalPrice: number
}

const CartContext = createContext<CartContextType | null>(null)

export function CartProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([])

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

  useEffect(() => {
    localStorage.setItem("pitoco-cart", JSON.stringify(items))
  }, [items])

  const addItem = useCallback((product: Product, size: string, color: string, image: string) => {
    setItems(prev => {
      // Verifica se já existe o mesmo produto, tamanho E cor
      const existingIndex = prev.findIndex(
        item => item.product.id === product.id && item.size === size && item.color === color
      )

      if (existingIndex > -1) {
        const updated = [...prev]
        updated[existingIndex].quantity += 1
        return updated
      }

      // Salva o item com a imagem específica da cor selecionada
      return [...prev, { product, size, color, image, quantity: 1 }]
    })
  }, [])

  const removeItem = useCallback((productId: string, size: string, color: string) => {
    setItems(prev => prev.filter(
      item => !(item.product.id === productId && item.size === size && item.color === color)
    ))
  }, [])

  const updateQuantity = useCallback((productId: string, size: string, color: string, quantity: number) => {
    if (quantity <= 0) {
      removeItem(productId, size, color)
      return
    }

    setItems(prev => prev.map(item => 
      item.product.id === productId && item.size === size && item.color === color
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