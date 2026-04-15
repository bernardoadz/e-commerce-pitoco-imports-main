export type Category = 
  | "conjuntos" 
  | "camisetas" 
  | "tenis" 
  | "crocs" 
  | "bones" 
  | "cuecas" 
  | "futsal"
  | "jaquetas" // Categoria liberada no sistema

export interface Product {
  id: string
  name: string
  description: string
  price: number
  images: string[]
  category: Category
  sizes: string[]
  details: string[]
  variants?: { colorName: string; imageUrl: string }[]
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
  { id: "jaquetas", label: "Jaquetas" }, // Categoria liberada no menu
]

export const products: Product[] = [
  {
    id: "conjunto-syna-moletom",
    name: "Conjunto Syna moletom frio",
    description: "Conjunto completo da Syna importado. Acabamento premium com costuras reforçadas.",
    price: 450.00,
    images: [
      "/produtos/Syna brancoerosa.jpeg",
      "/produtos/Syna pretoeazul.jpeg",
      "/produtos/Syna pretoecinza.jpeg",
      "/produtos/Syna pretoelaranja.jpeg",
      "/produtos/Syna pretoeverde.jpeg"
    ],
    category: "conjuntos",
    sizes: ["P", "M", "G", "GG"],
    variants: [
      { colorName: "Cinza e Rosa", imageUrl: "/produtos/Syna brancoerosa.jpeg" },
      { colorName: "Preto e Azul", imageUrl: "/produtos/Syna pretoeazul.jpeg" },
      { colorName: "Preto e Cinza", imageUrl: "/produtos/Syna pretoecinza.jpeg" },
      { colorName: "Preto e Laranja", imageUrl: "/produtos/Syna pretoelaranja.jpeg" },
      { colorName: "Preto e Verde", imageUrl: "/produtos/Syna pretoeverde.jpeg" }
    ],
    details: [
      "Corte 'Trap-Star' oversized exclusivo",
      "Algodão Premium Heavyweight (Alta gramatura)",
      "Syna World de alta definição",
      "Cordões personalizados",
      "Edição limitada: Drop 001"
    ],
    isNew: true,
    isFeatured: true
  },
  {
    id: "conjunto-syna-summer",
    name: "Conjunto Syna World 'Summer Drop'",
    description: "O kit definitivo para o verão. Leveza e estilo direto das ruas de Londres para o seu lifestyle.",
    price: 400.00,
    images: [
      "/produtos/syna-preto-cinza.jpeg", 
      "/produtos/syna-preto-amarelo.jpeg",
      "/produtos/syna-branco-rosa.jpeg",
      "/produtos/syna-marrom.jpeg",
      "/produtos/syna-cinza.jpeg"
    ],
    category: "conjuntos",
    sizes: ["P", "M", "G", "GG"],
    details: [
      "Tecido Syna-Tech Ultra-Light para alta performance no calor",
      "Estampa 'Syna World' em silk de alta densidade",
      "Corte anatômico para máximo conforto e estética",
      "Shorts com ajuste elástico e ponteiras de metal personalizadas",
      "Edição limitada: Summer Capsule",
      "Acompanha Dustbag exclusiva da marca"
    ],
    variants: [
      { colorName: "Marrom", imageUrl: "/produtos/syna-marrom.jpeg" },
      { colorName: "Preto e Amarelo", imageUrl: "/produtos/syna-preto-amarelo.jpeg" },
      { colorName: "Branco e Rosa", imageUrl: "/produtos/syna-branco-rosa.jpeg" },
      { colorName: "Preto e Cinza", imageUrl: "/produtos/syna-preto-cinza.jpeg" },
      { colorName: "Cinza e Cinza Escuro", imageUrl: "/produtos/syna-cinza.jpeg" }
    ],
    isFeatured: true
  },
  {
  id: "conjunto-tech-fleece",
  name: "Jaqueta Nike Tech Fleece Windrunner",
  description: "O auge do techwear esportivo. Calor premium e design aerodinâmico para quem não aceita menos que o topo.",
  price: 450.00,
  images: [
    "/produtos/tech-vermelha.jpeg",
    "/produtos/tech-azul.jpeg",
    "/produtos/tech-azul-claro.jpeg",
    "/produtos/tech-cinza.jpeg",
    "/produtos/tech-branca.jpeg",
    "/produtos/tech-preta.jpeg"
  ],
  category: "jaquetas",
  sizes: ["P", "M", "G", "GG"],
  // Padrão de detalhes de alta performance
  details: [
    "Tecido Tech Fleece dupla face: calor máximo com peso mínimo",
    "Design Windrunner com linhas de chevron clássicas",
    "Bolso de zíper selado na manga para máxima segurança",
    "Capuz de 4 painéis para um ajuste anatômico e moderno",
    "Acabamento elástico premium nos punhos e na barra",
    "Zíper frontal bidirecional personalizado"
  ],
  // Essencial para o carrinho mostrar a cor e foto certa
  variants: [
    { colorName: "Vermelha", imageUrl: "/produtos/tech-vermelha.jpeg" },
    { colorName: "Azul", imageUrl: "/produtos/tech-azul.jpeg" },
    { colorName: "Azul Claro e Branco", imageUrl: "/produtos/tech-azul-claro.jpeg" },
    { colorName: "Cinza", imageUrl: "/produtos/tech-cinza.jpeg" },
    { colorName: "Branca", imageUrl: "/produtos/tech-branca.jpeg" },
    { colorName: "Preta", imageUrl: "/produtos/tech-preta.jpeg" }
  ],
  isFeatured: true
},
{
  id: "jordan-4-retro",
  name: "Air Jordan 4 Retro High",
  description: "Um ícone das quadras e das ruas. O Jordan 4 combina suporte lateral robusto com o amortecimento Air clássico para um estilo inconfundível.",
  price: 500.00,
  images: [
    "/produtos/jordan-4-university-blue.jpeg",
    "/produtos/jordan-4-black-cat.jpeg",
    "/produtos/jordan-4-red-thunder.jpeg",
    "/produtos/jordan-4-taupe-haze.jpeg",
  ],
  category: "tenis",
  sizes: ["38", "39", "40", "41", "42", "43", "44"],
  details: [
    "Unidade Air-Sole no calcanhar e no antepé para amortecimento leve",
    "Cabedal em couro premium e material sintético de alta durabilidade",
    "Painéis de mesh laterais para maior respirabilidade",
    "Sistema de amarração com 'asas' laterais para ajuste seguro",
    "Solado de borracha com padrão espinha de peixe para tração máxima"
  ],
  variants: [
    { colorName: "University Blue", imageUrl: "/produtos/jordan-4-university-blue.jpeg" },
    { colorName: "Black Cat", imageUrl: "/produtos/jordan-4-black-cat.jpeg" },
    { colorName: "Red Thunder", imageUrl: "/produtos/jordan-4-red-thunder.jpeg" },
    { colorName: "Taupe Haze", imageUrl: "/produtos/jordan-4-taupe-haze.jpeg" },
  ],
  isNew: true,
  isFeatured: true
},
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