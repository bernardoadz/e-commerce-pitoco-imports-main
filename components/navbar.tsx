"use client"

import { useState } from "react"
import Link from "next/link"
import { ShoppingBag, Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useCart } from "@/lib/cart-context"
import { cn } from "@/lib/utils"

const navLinks = [
  { href: "/catalogo?categoria=conjuntos", label: "Conjuntos" },
  { href: "/catalogo?categoria=camisetas", label: "Camisetas" },
  { href: "/catalogo?categoria=tenis", label: "Tênis" },
  { href: "/catalogo?categoria=futsal", label: "Esportes" },
  { href: "/catalogo?categoria=bones", label: "Acessórios" },
]

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const { totalItems } = useCart()

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <nav className="container mx-auto px-4 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <span className="text-xl font-bold tracking-tight">
            PITOCO<span className="text-primary">.IMPORTS</span>
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map(link => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors uppercase tracking-wider"
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Actions */}
        <div className="flex items-center gap-2">
          {/* Cart */}
          <Link href="/carrinho">
            <Button 
              variant="ghost" 
              size="icon"
              className="relative text-muted-foreground hover:text-foreground"
            >
              <ShoppingBag className="h-5 w-5" />
              {totalItems > 0 && (
                <span className="absolute -top-1 -right-1 h-5 w-5 rounded-full bg-primary text-primary-foreground text-xs flex items-center justify-center font-medium">
                  {totalItems}
                </span>
              )}
              <span className="sr-only">Carrinho</span>
            </Button>
          </Link>

          {/* Mobile Menu Toggle */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden text-muted-foreground hover:text-foreground"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            <span className="sr-only">Menu</span>
          </Button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div className={cn(
        "md:hidden overflow-hidden transition-all duration-300 bg-background border-b border-border",
        isMenuOpen ? "max-h-80" : "max-h-0"
      )}>
        <div className="container mx-auto px-4 py-4 space-y-4">
          {navLinks.map(link => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setIsMenuOpen(false)}
              className="block text-sm font-medium text-muted-foreground hover:text-foreground transition-colors uppercase tracking-wider py-2"
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </header>
  )
}