"use client"

import Image from "next/image"
import Link from "next/link"
import { type Product, formatPrice } from "@/lib/products"
import { cn } from "@/lib/utils"

interface ProductCardProps {
  product: Product
  className?: string
}

export function ProductCard({ product, className }: ProductCardProps) {
  return (
    <Link 
      href={`/produto/${product.id}`}
      className={cn(
        "group block rounded-xl overflow-hidden bg-card border border-border transition-all duration-300 hover:border-primary/50 hover:shadow-lg hover:shadow-primary/5",
        className
      )}
    >
      {/* Image Container */}
      <div className="relative aspect-square overflow-hidden bg-secondary">
        <Image
          src={product.images[0]}
          alt={product.name}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
        />
        
        {/* Badges */}
        <div className="absolute top-3 left-3 flex flex-col gap-2">
          {product.isNew && (
            <span className="px-3 py-1 text-xs font-semibold uppercase tracking-wider bg-primary text-primary-foreground rounded-full">
              Novo
            </span>
          )}
          {product.isFeatured && !product.isNew && (
            <span className="px-3 py-1 text-xs font-semibold uppercase tracking-wider bg-accent text-accent-foreground rounded-full">
              Destaque
            </span>
          )}
        </div>

        {/* Quick View Overlay */}
        <div className="absolute inset-0 bg-background/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
          <span className="px-4 py-2 bg-foreground text-background text-sm font-medium rounded-lg transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
            Ver Detalhes
          </span>
        </div>
      </div>

      {/* Info */}
      <div className="p-4">
        <h3 className="font-semibold text-foreground line-clamp-2 mb-2 group-hover:text-primary transition-colors">
          {product.name}
        </h3>
        <p className="text-lg font-bold text-primary">
          {formatPrice(product.price)}
        </p>
        <p className="text-xs text-muted-foreground mt-1">
          ou 3x de {formatPrice(product.price / 3)}
        </p>
      </div>
    </Link>
  )
}
