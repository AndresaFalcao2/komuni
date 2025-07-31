import { CheckCircle, Globe, MessageCircle, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
export const Hero = () => {
  return <section className="relative py-20 px-4 overflow-hidden min-h-screen flex items-center">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 bg-cover bg-center bg-no-repeat" style={{
      backgroundImage: 'url(/lovable-uploads/51bcdffa-e172-4e6f-bbb0-5c6fd350ba00.png)'
    }} />
      <div className="absolute inset-0 bg-[#032ff7] bg-opacity-85" />

      <div className="container relative z-10 mx-auto">
        <div className="text-center max-w-4xl mx-auto text-text-white">
          {/* Main Heading */}
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            TIM BLACK EMPRESAS
          </h1>
          
          <p className="text-xl md:text-2xl mb-12 opacity-90">
            EXPERIMENTE TER MUITO MAIS QUALIDADE NA SUA EMPRESA
          </p>

          {/* Features */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
            <div className="flex items-center gap-2">
              <Globe className="h-5 w-5 text-tim-blue-light rounded-none bg-transparent" />
              <span className="text-lg">Cobertura Nacional</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="h-5 w-5 text-button-green" />
              <span className="text-lg">Credenciada TIM</span>
            </div>
          </div>

          {/* Contact Section */}
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Traga sua empresa para a TIM e aproveite as melhores ofertas!
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Entre em contato conosco e garanta as melhores condições para sua empresa
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button variant="whatsapp" size="lg" onClick={() => window.open('https://wa.me/5571992346447', '_blank')} className="flex items-center gap-3 text-lg bg-blue-600 hover:bg-blue-500 w-full sm:w-auto">
                <MessageCircle className="h-5 w-5" />
                WhatsApp
              </Button>
              
              <Button variant="outline" size="lg" className="flex items-center gap-2 text-sm sm:text-lg text-[#032ff7] border-text-white bg-text-white w-full sm:w-auto px-2 sm:px-4">
                <Mail className="h-4 w-4 sm:h-5 sm:w-5 flex-shrink-0" />
                <span className="truncate">timempresas@komuniqtelecom.com.br</span>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>;
};