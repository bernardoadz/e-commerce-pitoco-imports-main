"use client"

import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, MessageCircle, Minus, Plus, ShoppingBag, Trash2 } from "lucide-react"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { useCart } from "@/lib/cart-context" // Removido o CartProvider daqui
import { formatPrice } from "@/lib/products"

export default function CarrinhoPage() {
  // Removido o <CartProvider> daqui de dentro, pois ele já está no layout.tsx
  return <CarrinhoContent />
}

function CarrinhoContent() {
  const { items, removeItem, updateQuantity, totalItems, totalPrice, clearCart } = useCart()

  const handleCheckout = () => {
    if (items.length === 0) return
    
    const orderItems = items.map(item => 
      `- ${item.product.name} (Tam: ${item.size}) x${item.quantity} = ${formatPrice(item.product.price * item.quantity)}`
    ).join('\n')

    const message = encodeURIComponent(
      `Olá Pitoco! Gostaria de fazer um pedido:\n\n${orderItems}\n\n*Total: ${formatPrice(totalPrice)}*`
    )
    window.open(`https://wa.me/5511917932009?text=${message}`, "_blank")
  }

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          {/* Header */}
          <div className="flex items-center justify-between mb-8">
            <div>
              <Link 
                href="/catalogo" 
                className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-2"
              >
                <ArrowLeft className="h-4 w-4" />
                Continuar Comprando
              </Link>
              <h1 className="text-3xl md:text-4xl font-bold text-foreground">
                Seu Carrinho
              </h1>
            </div>
            {items.length > 0 && (
              <Button
                variant="ghost"
                size="sm"
                className="text-destructive hover:text-destructive hover:bg-destructive/10"
                onClick={clearCart}
              >
                <Trash2 className="h-4 w-4 mr-2" />
                Limpar
              </Button>
            )}
          </div>

          {items.length > 0 ? (
            <div className="grid lg:grid-cols-3 gap-8">
              {/* Cart Items */}
              <div className="lg:col-span-2 space-y-4">
                {items.map((item) => (
                  <div 
                    key={`${item.product.id}-${item.size}`}
                    className="flex gap-4 p-4 rounded-xl bg-card border border-border"
                  >
                    {/* Image */}
                    <Link href={`/produto/${item.product.id}`}>
                      <div className="relative w-24 h-24 rounded-lg overflow-hidden bg-secondary shrink-0">
                        <Image
                          src={item.product.images[0]}
                          alt={item.product.name}
                          fill
                          className="object-cover"
                          sizes="96px"
                        />
                      </div>
                    </Link>

                    {/* Info */}
                    <div className="flex-1 min-w-0">
                      <Link href={`/produto/${item.product.id}`}>
                        <h3 className="font-semibold text-foreground hover:text-primary transition-colors line-clamp-2">
                          {item.product.name}
                        </h3>
                      </Link>
                      <p className="text-sm text-muted-foreground mt-1">
                        Tamanho: {item.size}
                      </p>
                      <p className="text-lg font-bold text-primary mt-2">
                        {formatPrice(item.product.price)}
                      </p>
                    </div>

                    {/* Quantity & Remove */}
                    <div className="flex flex-col items-end justify-between">
                      <Button
                        variant="ghost"
                        size="icon"
                        className="h-8 w-8 text-muted-foreground hover:text-destructive"
                        onClick={() => removeItem(item.product.id, item.size)}
                      >
                        <Trash2 className="h-4 w-4" />
                        <span className="sr-only">Remover</span>
                      </Button>

                      <div className="flex items-center border border-border rounded-lg">
                        <Button
                          variant="ghost"
                          size="icon"
                          className="h-8 w-8 rounded-r-none"
                          onClick={() => updateQuantity(item.product.id, item.size, item.quantity - 1)}
                        >
                          <Minus className="h-3 w-3" />
                        </Button>
                        <span className="w-8 text-center text-sm font-medium">
                          {item.quantity}
                        </span>
                        <Button
                          variant="ghost"
                          size="icon"
                          className="h-8 w-8 rounded-l-none"
                          onClick={() => updateQuantity(item.product.id, item.size, item.quantity + 1)}
                        >
                          <Plus className="h-3 w-3" />
                        </Button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Order Summary */}
              <div className="lg:col-span-1">
                <div className="sticky top-24 rounded-xl bg-card border border-border p-6">
                  <h2 className="text-xl font-bold text-foreground mb-6">
                    Resumo do Pedido
                  </h2>

                  <div className="space-y-3 mb-6">
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Subtotal ({totalItems} itens)</span>
                      <span className="text-foreground">{formatPrice(totalPrice)}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Frete</span>
                      <span className="text-foreground">A combinar</span>
                    </div>
                    <div className="h-px bg-border" />
                    <div className="flex justify-between">
                      <span className="font-semibold text-foreground">Total</span>
                      <span className="font-bold text-xl text-primary">
                        {formatPrice(totalPrice)}
                      </span>
                    </div>
                  </div>

                  <Button
                    size="lg"
                    className="w-full h-14 text-base font-semibold gap-2"
                    onClick={handleCheckout}
                  >
                    <MessageCircle className="h-5 w-5" />
                    FINALIZAR VIA WHATSAPP
                  </Button>

                  <p className="text-xs text-muted-foreground text-center mt-4">
                    Você será redirecionado para o WhatsApp para confirmar seu pedido
                  </p>
                </div>
              </div>
            </div>
          ) : (
            <div className="text-center py-20">
              <ShoppingBag className="h-16 w-16 mx-auto text-muted-foreground mb-6" />
              <h2 className="text-2xl font-bold text-foreground mb-2">
                Seu carrinho está vazio
              </h2>
              <p className="text-muted-foreground mb-8 max-w-md mx-auto">
                Explore nossos produtos e adicione seus favoritos ao carrinho
              </p>
              <Link href="/catalogo">
                <Button size="lg" className="h-14 px-8 text-base font-semibold">
                  VER CATÁLOGO
                </Button>
              </Link>
            </div>
          )}
        </div>
      </main>

      <Footer />
    </div>
  )
}