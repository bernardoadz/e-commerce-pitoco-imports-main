"use client"

import { useState, useMemo, Suspense } from "react"
import { useSearchParams } from "next/navigation"
import { Filter, Grid3X3, LayoutGrid, Search } from "lucide-react" // Adicionei o ícone Search
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { ProductCard } from "@/components/product-card"
import { Button } from "@/components/ui/button"
import { products, categories, type Category } from "@/lib/products"
import { cn } from "@/lib/utils"

export default function CatalogoPage() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-background pt-24 text-center">A carregar catálogo...</div>}>
      <CatalogoContent />
    </Suspense>
  )
}

function CatalogoContent() {
  const searchParams = useSearchParams()
  const categoryParam = searchParams.get("categoria") as Category | null
  
  // Estados para Filtros e Busca
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedCategory, setSelectedCategory] = useState<Category | "all">(categoryParam || "all")
  const [gridSize, setGridSize] = useState<"small" | "large">("large")
  const [sortBy, setSortBy] = useState<"featured" | "price-asc" | "price-desc" | "newest">("featured")

  // Lógica de Filtragem (Categoria + Busca)
  const filteredProducts = useMemo(() => {
    let result = products

    // 1. Filtrar por Categoria
    if (selectedCategory !== "all") {
      result = result.filter(p => p.category === selectedCategory)
    }

    // 2. Filtrar por Termo de Busca (Nome ou Descrição)
    if (searchTerm.trim() !== "") {
      const term = searchTerm.toLowerCase()
      result = result.filter(p => 
        p.name.toLowerCase().includes(term) || 
        p.description.toLowerCase().includes(term)
      )
    }

    // 3. Ordenação
    switch (sortBy) {
      case "price-asc":
        result = [...result].sort((a, b) => a.price - b.price)
        break
      case "price-desc":
        result = [...result].sort((a, b) => b.price - a.price)
        break
      case "newest":
        result = [...result].sort((a, b) => (b.isNew ? 1 : 0) - (a.isNew ? 1 : 0))
        break
      case "featured":
      default:
        result = [...result].sort((a, b) => (b.isFeatured ? 1 : 0) - (a.isFeatured ? 1 : 0))
    }

    return result
  }, [selectedCategory, sortBy, searchTerm])

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          
          {/* Barra de Pesquisa */}
          <div className="relative mb-8 max-w-2xl mx-auto">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
            <input
              type="text"
              placeholder="Pesquisar chuteiras, acessórios..."
              className="w-full h-12 pl-10 pr-4 rounded-xl border border-border bg-card text-foreground focus:ring-2 focus:ring-primary outline-none transition-all"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>

          {/* Header e Resto do Catálogo */}
          <div className="mb-8 flex justify-between items-end">
            <div>
              <h1 className="text-3xl font-bold text-foreground">
                {selectedCategory === "all" ? "Todos os Produtos" : categories.find(c => c.id === selectedCategory)?.label}
              </h1>
              <p className="text-muted-foreground">{filteredProducts.length} itens encontrados</p>
            </div>
          </div>

          {/* Filtros Bar */}
          <div className="flex flex-col lg:flex-row gap-4 mb-8">
            <div className="flex-1 overflow-x-auto pb-2">
              <div className="flex gap-2 min-w-max">
                <Button 
                  variant={selectedCategory === "all" ? "default" : "outline"} 
                  onClick={() => setSelectedCategory("all")}
                  className="rounded-full"
                >
                  Todos
                </Button>
                {categories.map(cat => (
                  <Button 
                    key={cat.id}
                    variant={selectedCategory === cat.id ? "default" : "outline"}
                    onClick={() => setSelectedCategory(cat.id)}
                    className="rounded-full"
                  >
                    {cat.label}
                  </Button>
                ))}
              </div>
            </div>

            {/* Ordenação e Grid Controls */}
            <div className="flex items-center gap-2">
               {/* ... (Seus botões de GridSize e Select de Ordenação continuam iguais) */}
            </div>
          </div>

          {/* Grid de Produtos */}
          {filteredProducts.length > 0 ? (
            <div className={cn("grid gap-4", gridSize === "large" ? "grid-cols-2 md:grid-cols-4" : "grid-cols-3 md:grid-cols-6")}>
              {filteredProducts.map(product => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          ) : (
            <div className="text-center py-20 bg-card rounded-2xl border border-dashed border-border">
              <Filter className="h-12 w-12 mx-auto text-muted-foreground mb-4" />
              <h3 className="text-xl font-semibold">Nenhum resultado para "{searchTerm}"</h3>
              <p className="text-muted-foreground mt-2">Tenta pesquisar por outro termo ou limpa os filtros.</p>
              <Button variant="link" onClick={() => setSearchTerm("")} className="mt-4">Limpar Pesquisa</Button>
            </div>
          )}
        </div>
      </main>
      <Footer />
    </div>
  )
}