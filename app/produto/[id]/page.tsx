"use client"

import { useState, useMemo } from "react"
import { use } from "react"
import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"
import { ArrowLeft, Check, MessageCircle, Minus, Plus, ShoppingBag, Truck } from "lucide-react"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { ProductCard } from "@/components/product-card"
import { Button } from "@/components/ui/button"
import { useCart } from "@/lib/cart-context"
import { getProductById, products, formatPrice, type Product } from "@/lib/products"
import { cn } from "@/lib/utils"

interface ProductPageProps {
  params: Promise<{ id: string }>
}

export default function ProductPage({ params }: ProductPageProps) {
  const { id } = use(params)
  const product = getProductById(id)

  if (!product) {
    notFound()
  }

  return <ProductPageContent product={product} />
}

function ProductPageContent({ product }: { product: Product }) {
  const { addItem } = useCart()
  const [selectedSize, setSelectedSize] = useState<string | null>(null)
  const [selectedImageIndex, setSelectedImageIndex] = useState(0)
  const [quantity, setQuantity] = useState(1)
  const [addedToCart, setAddedToCart] = useState(false)

  // Identifica a variante (cor) baseada na imagem que está na tela
  const selectedVariant = useMemo(() => {
    if (!product.variants) return null
    const currentImageUrl = product.images[selectedImageIndex]
    return product.variants.find(v => v.imageUrl === currentImageUrl) || null
  }, [product.variants, product.images, selectedImageIndex])

  const relatedProducts = products
    .filter(p => p.category === product.category && p.id !== product.id)
    .slice(0, 4)

  const handleAddToCart = () => {
    if (!selectedSize) return
    
    // Captura a cor e a imagem atual para salvar no carrinho
    const colorName = selectedVariant?.colorName || "Padrão"
    const colorImage = product.images[selectedImageIndex]
    
    for (let i = 0; i < quantity; i++) {
      // Agora enviamos 4 argumentos: produto, tamanho, cor e imagem
      addItem(product, selectedSize, colorName, colorImage)
    }
    
    setAddedToCart(true)
    setTimeout(() => setAddedToCart(false), 2000)
  }

  const handleBuyNow = () => {
    if (!selectedSize) return
    
    const colorText = selectedVariant ? `, Cor: ${selectedVariant.colorName}` : ""
    const message = encodeURIComponent(
      `Olá Pitoco! Gostaria de encomendar o ${product.name}${colorText}, Tamanho: ${selectedSize}. Valor: ${formatPrice(product.price * quantity)}.`
    )
    window.open(`https://wa.me/5511917932009?text=${message}`, "_blank")
  }

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          <Link 
            href="/catalogo" 
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-8"
          >
            <ArrowLeft className="h-4 w-4" />
            Voltar ao Catálogo
          </Link>

          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
            {/* Galeria de Imagens */}
            <div className="space-y-4">
              <div className="relative aspect-square rounded-2xl overflow-hidden bg-secondary">
                <Image
                  src={product.images[selectedImageIndex]}
                  alt={product.name}
                  fill
                  className="object-cover"
                  priority
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                
                <div className="absolute top-4 left-4 flex gap-2">
                  {product.isNew && (
                    <span className="px-3 py-1 text-xs font-semibold uppercase tracking-wider bg-primary text-primary-foreground rounded-full">
                      Novo
                    </span>
                  )}
                  {product.isFeatured && (
                    <span className="px-3 py-1 text-xs font-semibold uppercase tracking-wider bg-accent text-accent-foreground rounded-full">
                      Destaque
                    </span>
                  )}
                </div>
              </div>

              {product.images.length > 1 && (
                <div className="flex gap-3 overflow-x-auto pb-2">
                  {product.images.map((image, index) => (
                    <button
                      key={index}
                      onClick={() => setSelectedImageIndex(index)}
                      className={cn(
                        "relative w-20 h-20 rounded-lg overflow-hidden bg-secondary transition-all shrink-0",
                        selectedImageIndex === index 
                          ? "ring-2 ring-primary ring-offset-2 ring-offset-background" 
                          : "opacity-60 hover:opacity-100"
                      )}
                    >
                      <Image
                        src={image}
                        alt={`${product.name} - Opção ${index + 1}`}
                        fill
                        className="object-cover"
                        sizes="80px"
                      />
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Informações do Produto */}
            <div className="lg:py-4">
              <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-4">
                {product.name}
                {/* Mostra a cor no título se houver uma variante selecionada */}
                {selectedVariant && (
                  <span className="text-primary block text-xl md:text-2xl mt-1">
                    {selectedVariant.colorName}
                  </span>
                )}
              </h1>

              <p className="text-muted-foreground mb-6 leading-relaxed">
                {product.description}
              </p>

              <div className="mb-8">
                <p className="text-3xl md:text-4xl font-bold text-primary">
                  {formatPrice(product.price)}
                </p>
                <p className="text-sm text-muted-foreground mt-1">
                
                </p>
              </div>

              {/* Tamanhos */}
              <div className="mb-8">
                <div className="flex items-center justify-between mb-3">
                  <span className="font-medium text-foreground">Tamanho</span>
                  {!selectedSize && (
                    <span className="text-xs text-destructive">Selecione um tamanho</span>
                  )}
                </div>
                <div className="flex flex-wrap gap-2">
                  {product.sizes.map(size => (
                    <button
                      key={size}
                      onClick={() => setSelectedSize(size)}
                      className={cn(
                        "min-w-[3rem] h-12 px-4 rounded-lg border font-medium transition-all",
                        selectedSize === size
                          ? "bg-foreground text-background border-foreground"
                          : "bg-background text-foreground border-border hover:border-primary"
                      )}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>

              {/* Quantidade */}
              <div className="mb-8">
                <span className="font-medium text-foreground mb-3 block">Quantidade</span>
                <div className="flex items-center gap-3">
                  <div className="flex items-center border border-border rounded-lg">
                    <Button
                      variant="ghost"
                      size="icon"
                      className="h-12 w-12 rounded-r-none"
                      onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    >
                      <Minus className="h-4 w-4" />
                    </Button>
                    <span className="w-12 text-center font-medium">{quantity}</span>
                    <Button
                      variant="ghost"
                      size="icon"
                      className="h-12 w-12 rounded-l-none"
                      onClick={() => setQuantity(quantity + 1)}
                    >
                      <Plus className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </div>

              {/* Botões */}
              <div className="flex flex-col sm:flex-row gap-3 mb-8">
                <Button
                  variant="outline"
                  size="lg"
                  className="flex-1 h-14 text-base font-semibold gap-2"
                  disabled={!selectedSize}
                  onClick={handleAddToCart}
                >
                  {addedToCart ? (
                    <>
                      <Check className="h-5 w-5 text-accent" />
                      Adicionado!
                    </>
                  ) : (
                    <>
                      <ShoppingBag className="h-5 w-5" />
                      ADICIONAR AO CARRINHO
                    </>
                  )}
                </Button>
                <Button
                  size="lg"
                  className="flex-1 h-14 text-base font-semibold gap-2"
                  disabled={!selectedSize}
                  onClick={handleBuyNow}
                >
                  <MessageCircle className="h-5 w-5" />
                  COMPRAR AGORA
                </Button>
              </div>

              <div className="flex items-center gap-3 p-4 rounded-xl bg-card border border-border mb-8">
                <Truck className="h-5 w-5 text-primary shrink-0" />
                <div>
                  <p className="font-medium text-foreground text-sm">Entrega Rápida</p>
                  <p className="text-xs text-muted-foreground">
                    Consulte o prazo via WhatsApp
                  </p>
                </div>
              </div>

              <div>
                <h3 className="font-semibold text-foreground mb-4">Detalhes do Produto</h3>
                <ul className="space-y-2">
                  {product.details.map((detail, index) => (
                    <li key={index} className="flex items-start gap-2 text-sm text-muted-foreground">
                      <Check className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                      {detail}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {relatedProducts.length > 0 && (
            <section className="mt-20">
              <h2 className="text-2xl font-bold text-foreground mb-8">
                Produtos Relacionados
              </h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
                {relatedProducts.map(product => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            </section>
          )}
        </div>
      </main>

      <Footer />
    </div>
  )
}