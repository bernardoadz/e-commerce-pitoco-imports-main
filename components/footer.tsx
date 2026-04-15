import Link from "next/link"
import { Instagram, MessageCircle } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-1">
            <Link href="/" className="inline-block mb-4">
              <span className="text-2xl font-bold tracking-tight">
                PITOCO<span className="text-primary">.IMPORTS</span>
              </span>
            </Link>
            <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
              Qualidade premium internacional. Produtos selecionados das melhores 
              fábricas do mundo.
            </p>
            <div className="flex gap-4">
              <a 
                href="https://www.instagram.com/pitoco_imports1?igsh=MXJoMjI2YTN1c2N5Ng==" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary/10 transition-colors"
              >
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </a>
              <a 
                href="https://wa.me/5511917932009" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary/10 transition-colors"
              >
                <MessageCircle className="h-5 w-5" />
                <span className="sr-only">WhatsApp</span>
              </a>
            </div>
          </div>

          {/* Links */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Categorias</h3>
            <ul className="space-y-2">
              {["Conjuntos", "Camisetas", "Tênis", "Crocs", "Bonés"].map((item) => (
                <li key={item}>
                  <Link 
                    href={`/catalogo?categoria=${item.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "")}`}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-foreground mb-4">Informações</h3>
            <ul className="space-y-2">
              {["Sobre Nós", "Política de Privacidade", "Termos de Uso", "Trocas e Devoluções"].map((item) => (
                <li key={item}>
                  <Link 
                    href="#"
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-foreground mb-4">Atendimento</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>Segunda a Sexta: 9h às 18h</li>
              <li>Sábado: 9h às 13h</li>
              <li className="pt-2">
                <a 
                  href="https://wa.me/5511917932009"
                  className="text-primary hover:underline"
                >
                  WhatsApp: (11) 9179-32009
                </a>
              </li>
              <li>
                <a 
                  href="mailto:contato@pitocoimports.com"
                  className="text-primary hover:underline"
                >
                  contato@pitocoimports.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 pt-8 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">
            © 2026 Pitoco Imports. Todos os direitos reservados.
          </p>
          <div className="flex items-center gap-4">
            <span className="text-xs text-muted-foreground">
              Pagamento pelo WhatsApp
            </span>
          </div>
        </div>
      </div>
    </footer>
  )
}
