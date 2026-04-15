import { Navbar } from "@/components/navbar"
import { HeroSection } from "@/components/hero-section"
import { CategoriesSection } from "@/components/categories-section"
import { FeaturedProducts } from "@/components/featured-products"
import { Footer } from "@/components/footer"
import { CartProvider } from "@/lib/cart-context"

export default function HomePage() {
  return (
    <CartProvider>
      <div className="min-h-screen bg-zinc-950 text-white">
        <Navbar />
        <main>
          <HeroSection />
          <CategoriesSection />
          <FeaturedProducts />
        </main>
        <Footer />
      </div>
    </CartProvider>
  )
}
