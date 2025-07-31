import { Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import komuniqLogo from "/lovable-uploads/007b6f1b-e1fc-47e5-a0a4-7c2512887905.png";
export const Header = () => {
  return <header className="py-4 px-4 shadow-lg bg-[#1555e8]">
      <div className="flex items-center justify-between w-full">
        {/* Logo Section */}
        <div className="flex items-center gap-3">
          <img src={komuniqLogo} alt="Komuniq Telecom Logo" className="h-10 w-auto" />
          <div>
            <h1 className="text-text-white text-lg font-bold">Komuniq Telecom</h1>
            <p className="text-tim-blue-light text-sm">Credenciada TIM</p>
          </div>
        </div>

        {/* Navigation */}
        <nav className="hidden md:flex items-center gap-6">
          <a href="#planos" className="text-text-white hover:text-tim-blue-light transition-fast">Planos</a>
          <a href="#ofertas" className="text-text-white hover:text-tim-blue-light transition-fast">Ofertas</a>
          <a href="#sobre" className="text-text-white hover:text-tim-blue-light transition-fast">Sobre</a>
          <a href="#contato" className="text-text-white hover:text-tim-blue-light transition-fast">Contato</a>
          <a href="#fibra" className="text-text-white hover:text-tim-blue-light transition-fast">Fibra</a>
        </nav>

        {/* CTA Button */}
        <Button variant="whatsapp" size="sm" onClick={() => window.open('https://wa.me/5571992346447', '_blank')} className="flex items-center gap-2 bg-blue-700 hover:bg-blue-600">
          <Phone className="h-4 w-4" />
          <span className="hidden sm:inline">Fale Conosco</span>
        </Button>
      </div>
    </header>;
};