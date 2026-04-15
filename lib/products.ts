export type Category = 
  | "conjuntos" 
  | "camisetas" 
  | "tenis" 
  | "crocs" 
  | "bones" 
  | "cuecas" 
  | "futsal"

export interface Product {
  id: string
  name: string
  description: string
  price: number
  images: string[]
  category: Category
  sizes: string[]
  details: string[]
  isNew?: boolean
  isFeatured?: boolean
}

export const categories: { id: Category; label: string }[] = [
  { id: "conjuntos", label: "Conjuntos" },
  { id: "camisetas", label: "Camisetas" },
  { id: "tenis", label: "Tênis" },
  { id: "crocs", label: "Crocs" },
  { id: "bones", label: "Bonés" },
  { id: "cuecas", label: "Cuecas" },
  { id: "futsal", label: "Esportes" },
]

export const products: Product[] = [
  // Conjuntos
  {
    id: "conjunto-tech-fleece",
    name: "Conjunto Tech Fleece Premium",
    description: "Conjunto completo em tech fleece importado. Acabamento premium com costuras reforçadas.",
    price: 389.90,
    images: [
      "https://images.unsplash.com/photo-1556906781-9a412961c28c?w=800&h=800&fit=crop",
      "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=800&h=800&fit=crop"
    ],
    category: "conjuntos",
    sizes: ["P", "M", "G", "GG"],
    details: [
      "Material: 80% Algodão, 20% Poliéster",
      "Tecnologia de regulação térmica",
      "Bolsos com zíper",
      "Punhos e barra elásticos"
    ],
    isNew: true,
    isFeatured: true
  },
  {
    id: "conjunto-dri-fit",
    name: "Conjunto Dri-FIT Performance",
    description: "Conjunto esportivo com tecnologia de absorção de suor. Ideal para treinos intensos.",
    price: 329.90,
    images: [
      "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=800&h=800&fit=crop"
    ],
    category: "conjuntos",
    sizes: ["P", "M", "G", "GG", "XG"],
    details: [
      "Tecnologia Dri-FIT",
      "Secagem rápida",
      "Leve e respirável",
      "Design ergonômico"
    ],
    isFeatured: true
  },
  {
    id: "conjunto-streetwear",
    name: "Conjunto Streetwear Oversized",
    description: "Conjunto oversized estilo streetwear. Perfeito para o dia a dia com muito estilo.",
    price: 349.90,
    images: [
      "https://images.unsplash.com/photo-1552374196-1ab2a1c593e8?w=800&h=800&fit=crop"
    ],
    category: "conjuntos",
    sizes: ["M", "G", "GG"],
    details: [
      "Corte oversized moderno",
      "Moletom 100% algodão",
      "Estampa serigrafada",
      "Acabamento premium"
    ]
  },

  // Camisetas
  {
    id: "camiseta-dry-tech",
    name: "Camiseta Dry Tech Elite",
    description: "Camiseta de alta performance com tecnologia de secagem ultra rápida.",
    price: 149.90,
    images: [
      "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=800&h=800&fit=crop"
    ],
    category: "camisetas",
    sizes: ["P", "M", "G", "GG", "XG"],
    details: [
      "Tecnologia Dry Tech",
      "Proteção UV 50+",
      "Antibacteriana",
      "Costuras planas"
    ],
    isNew: true
  },
  {
    id: "camiseta-premium-cotton",
    name: "Camiseta Premium Cotton",
    description: "Camiseta básica em algodão egípcio de alta qualidade. Toque macio e durável.",
    price: 129.90,
    images: [
      "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?w=800&h=800&fit=crop"
    ],
    category: "camisetas",
    sizes: ["P", "M", "G", "GG"],
    details: [
      "Algodão egípcio 100%",
      "Gola reforçada",
      "Não desbota",
      "Pré-lavada"
    ],
    isFeatured: true
  },
  {
    id: "camiseta-oversized",
    name: "Camiseta Oversized Street",
    description: "Camiseta oversized com fit moderno. Estilo urbano autêntico.",
    price: 139.90,
    images: [
      "https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=800&h=800&fit=crop"
    ],
    category: "camisetas",
    sizes: ["M", "G", "GG", "XG"],
    details: [
      "Corte oversized",
      "Algodão pesado 240g",
      "Ombro caído",
      "Estampa em silk"
    ]
  },

  // Tênis
  {
    id: "tenis-air-max",
    name: "Tênis Air Max Runner",
    description: "Tênis com tecnologia de amortecimento Air Max. Conforto incomparável.",
    price: 599.90,
    images: [
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=800&h=800&fit=crop"
    ],
    category: "tenis",
    sizes: ["38", "39", "40", "41", "42", "43", "44"],
    details: [
      "Tecnologia Air Max",
      "Cabedal em mesh",
      "Sola de borracha",
      "Palmilha removível"
    ],
    isNew: true,
    isFeatured: true
  },
  {
    id: "tenis-boost-ultra",
    name: "Tênis Boost Ultra Performance",
    description: "Tênis de corrida com tecnologia Boost. Retorno de energia máximo.",
    price: 649.90,
    images: [
      "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=800&h=800&fit=crop"
    ],
    category: "tenis",
    sizes: ["39", "40", "41", "42", "43", "44"],
    details: [
      "Tecnologia Boost",
      "Continental Rubber",
      "Primeknit 360",
      "Torsion System"
    ]
  },
  {
    id: "tenis-retro-classic",
    name: "Tênis Retro Classic",
    description: "Tênis estilo retro com design clássico. Atemporal e versátil.",
    price: 449.90,
    images: [
      "https://images.unsplash.com/photo-1600185365926-3a2ce3cdb9eb?w=800&h=800&fit=crop"
    ],
    category: "tenis",
    sizes: ["38", "39", "40", "41", "42", "43"],
    details: [
      "Design retro autêntico",
      "Couro sintético premium",
      "Sola vulcanizada",
      "Palmilha OrthoLite"
    ]
  },

  // Crocs
  {
    id: "crocs-classic",
    name: "Crocs Classic Clog",
    description: "O clássico Crocs com conforto incomparável. Leve e resistente.",
    price: 199.90,
    images: [
      "https://images.unsplash.com/photo-1603808033192-082d6919d3e1?w=800&h=800&fit=crop"
    ],
    category: "crocs",
    sizes: ["35", "36", "37", "38", "39", "40", "41", "42", "43", "44"],
    details: [
      "Material Croslite",
      "Tira ajustável",
      "Furos de ventilação",
      "Fácil de limpar"
    ],
    isFeatured: true
  },
  {
    id: "crocs-literide",
    name: "Crocs LiteRide 360",
    description: "Crocs com tecnologia LiteRide para máximo conforto. Next-gen comfort.",
    price: 279.90,
    images: [
      "https://images.unsplash.com/photo-1556906781-9a412961c28c?w=800&h=800&fit=crop"
    ],
    category: "crocs",
    sizes: ["36", "37", "38", "39", "40", "41", "42", "43"],
    details: [
      "Tecnologia LiteRide",
      "40% mais leve",
      "Palmilha macia",
      "Design moderno"
    ],
    isNew: true
  },

  // Bonés
  {
    id: "bone-snapback",
    name: "Boné Snapback Premium",
    description: "Boné snapback com aba reta. Estilo autêntico streetwear.",
    price: 119.90,
    images: [
      "https://images.unsplash.com/photo-1588850561407-ed78c282e89b?w=800&h=800&fit=crop"
    ],
    category: "bones",
    sizes: ["Único"],
    details: [
      "Aba reta",
      "Snapback ajustável",
      "Bordado 3D",
      "Forro em algodão"
    ],
    isFeatured: true
  },
  {
    id: "bone-dad-hat",
    name: "Boné Dad Hat Classic",
    description: "Boné estilo dad hat com aba curva. Casual e confortável.",
    price: 89.90,
    images: [
      "https://images.unsplash.com/photo-1521369909029-2afed882baee?w=800&h=800&fit=crop"
    ],
    category: "bones",
    sizes: ["Único"],
    details: [
      "Aba curva",
      "Fecho em metal",
      "100% algodão",
      "Lavagem stone"
    ]
  },

  // Cuecas
  {
    id: "kit-cuecas-boxer",
    name: "Kit 3 Cuecas Boxer Premium",
    description: "Kit com 3 cuecas boxer em algodão premium. Conforto o dia todo.",
    price: 149.90,
    images: [
      "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=800&h=800&fit=crop"
    ],
    category: "cuecas",
    sizes: ["P", "M", "G", "GG"],
    details: [
      "95% Algodão, 5% Elastano",
      "Cós elástico confortável",
      "Sem costuras laterais",
      "Kit com 3 unidades"
    ],
    isFeatured: true
  },
  {
    id: "cueca-seamless",
    name: "Cueca Seamless Performance",
    description: "Cueca sem costuras com tecnologia performance. Zero irritação.",
    price: 79.90,
    images: [
      "https://images.unsplash.com/photo-1556906781-9a412961c28c?w=800&h=800&fit=crop"
    ],
    category: "cuecas",
    sizes: ["P", "M", "G", "GG", "XG"],
    details: [
      "Tecnologia seamless",
      "Microfibra premium",
      "Antibacteriana",
      "Segunda pele"
    ]
  },

  // Futsal
  {
    id: "tenis-futsal-pro",
    name: "Tênis Futsal Pro Elite",
    description: "Tênis de futsal profissional. Tração e controle superiores.",
    price: 449.90,
    images: [
      "https://images.unsplash.com/photo-1579338559194-a162d19bf842?w=800&h=800&fit=crop"
    ],
    category: "futsal",
    sizes: ["38", "39", "40", "41", "42", "43", "44"],
    details: [
      "Sola non-marking",
      "Cabedal sintético",
      "Amortecimento EVA",
      "Tração indoor"
    ],
    isNew: true,
    isFeatured: true
  },
  {
    id: "tenis-futsal-street",
    name: "Tênis Futsal Street Style",
    description: "Tênis de futsal com design urbano. Da quadra para a rua.",
    price: 379.90,
    images: [
      "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=800&h=800&fit=crop"
    ],
    category: "futsal",
    sizes: ["38", "39", "40", "41", "42", "43"],
    details: [
      "Design street style",
      "Sola de borracha",
      "Cabedal em mesh",
      "Palmilha confort"
    ]
  }
]

export function getProductsByCategory(category: Category): Product[] {
  return products.filter(p => p.category === category)
}

export function getProductById(id: string): Product | undefined {
  return products.find(p => p.id === id)
}

export function getFeaturedProducts(): Product[] {
  return products.filter(p => p.isFeatured)
}

export function getNewProducts(): Product[] {
  return products.filter(p => p.isNew)
}

export function formatPrice(price: number): string {
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL'
  }).format(price)
}
