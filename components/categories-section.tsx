import Link from "next/link"
import { Layers, Shirt, Footprints, Sparkles, Crown, CircleDot, Zap } from "lucide-react"
import { cn } from "@/lib/utils"

const categoryItems = [
  { 
    id: "conjuntos", 
    label: "Conjuntos", 
    icon: Layers,
    description: "Marcas Premium & Streetwear",
    gradient: "from-blue-500/20 to-cyan-500/20"
  },
  { 
    id: "camisetas", 
    label: "Camisetas", 
    icon: Shirt,
    description: "Premium & Oversized",
    gradient: "from-emerald-500/20 to-green-500/20"
  },
  { 
    id: "tenis", 
    label: "Tênis", 
    icon: Footprints,
    description: "Running & Lifestyle",
    gradient: "from-orange-500/20 to-amber-500/20"
  },
  { 
    id: "crocs", 
    label: "Crocs", 
    icon: Sparkles,
    description: "Conforto & Estilo",
    gradient: "from-pink-500/20 to-rose-500/20"
  },
  { 
    id: "bones", 
    label: "Bonés", 
    icon: Crown,
    description: "Snapback & Dad Hat",
    gradient: "from-violet-500/20 to-purple-500/20"
  },
  { 
    id: "cuecas", 
    label: "Cuecas", 
    icon: CircleDot,
    description: "Boxer & Seamless",
    gradient: "from-slate-500/20 to-gray-500/20"
  },
  { 
    id: "esportes", 
    label: "Esportes", 
    icon: Zap,
    description: "Performance Esportiva",
    gradient: "from-red-500/20 to-orange-500/20"
  },
]

export function CategoriesSection() {
  return (
    <section className="py-20 bg-card">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Explore por Categoria
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Encontre exatamente o que você procura navegando por nossas categorias exclusivas
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-7 gap-4">
          {categoryItems.map((category) => {
            const Icon = category.icon
            return (
              <Link
                key={category.id}
                href={`/catalogo?categoria=${category.id}`}
                className={cn(
                  "group relative flex flex-col items-center justify-center p-6 rounded-xl",
                  "bg-background border border-border",
                  "transition-all duration-300",
                  "hover:border-primary/50 hover:shadow-lg hover:shadow-primary/5",
                  "hover:-translate-y-1"
                )}
              >
                {/* Gradient Background on Hover */}
                <div className={cn(
                  "absolute inset-0 rounded-xl bg-gradient-to-br opacity-0 group-hover:opacity-100 transition-opacity duration-300",
                  category.gradient
                )} />

                {/* Content */}
                <div className="relative z-10 flex flex-col items-center text-center">
                  <div className="w-12 h-12 rounded-xl bg-secondary flex items-center justify-center mb-4 group-hover:bg-primary/10 transition-colors">
                    <Icon className="h-6 w-6 text-muted-foreground group-hover:text-primary transition-colors" />
                  </div>
                  <h3 className="font-semibold text-foreground mb-1 group-hover:text-primary transition-colors">
                    {category.label}
                  </h3>
                  <p className="text-xs text-muted-foreground hidden sm:block">
                    {category.description}
                  </p>
                </div>
              </Link>
            )
          })}
        </div>
      </div>
    </section>
  )
}
