import { CheckCircle, Users, Headphones } from "lucide-react";
import komuniqLogo from "@/assets/komuniq-logo.png";
export const AboutSection = () => {
  return <section id="sobre" className="py-20 px-4 bg-background">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-tim-blue mb-8">
            Sobre a Komuniq Telecom
          </h2>
          <p className="text-lg text-text-muted max-w-4xl mx-auto leading-relaxed">
            Somos uma empresa credenciada pela TIM, desde 2015, com mais de 5.000 clientes satisfeitos em nossa base. 
            Entregamos um Pós-Venda com qualidade, equipe interna especializada e pronta para te atender... 
            Sejam Bem-Vindos à família KOMUNIQ!
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {/* Credenciada TIM */}
          <div className="text-center">
            <div className="bg-tim-blue p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
              <CheckCircle className="h-8 w-8 text-text-white" />
            </div>
            <h3 className="text-xl font-bold text-tim-blue mb-2">Credenciada TIM Salvador</h3>
            <p className="text-text-muted">Parceria oficial com garantia de qualidade</p>
          </div>

          {/* Atendimento */}
          <div className="text-center">
            <div className="p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center bg-blue-800">
              <Headphones className="h-8 w-8 text-text-white" />
            </div>
            <h3 className="text-xl font-bold text-tim-blue mb-2">Atendimento Personalizado</h3>
            <p className="text-text-muted">Consultoria especializada para sua empresa</p>
          </div>

          {/* Clientes */}
          <div className="text-center">
            <div className="p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center bg-blue-800">
              <Users className="h-8 w-8 text-text-white" />
            </div>
            <h3 className="text-xl font-bold text-tim-blue mb-2">5.000+ Clientes</h3>
            <p className="text-text-muted">Base sólida de clientes satisfeitos</p>
          </div>
        </div>

        {/* Logo Section */}
        <div className="text-center bg-card p-8 rounded-2xl shadow-card max-w-md mx-auto">
          <img src={komuniqLogo} alt="Komuniq Telecom" className="h-20 mx-auto mb-4" />
          <h3 className="text-2xl font-bold text-tim-blue mb-2">Komuniq Telecom</h3>
          <p className="text-text-muted">Credenciada TIM - Salvador</p>
        </div>

        {/* Consultant CTA Section */}
        <div className="mt-16 text-center bg-gradient-to-r from-tim-blue to-blue-700 p-8 rounded-2xl shadow-lg">
          <h3 className="text-3xl font-bold text-white mb-4">🚀 Seja um Parceiro TIM na sua Cidade!</h3>
          <p className="text-lg text-white/90 mb-6 max-w-2xl mx-auto">Transforme sua vida profissional! Junte-se à nossa equipe e seja um parceiro,  tenha a oportunidade de crescer conosco, com suporte completo e comissões atrativas.</p>
          <div className="flex flex-wrap justify-center gap-4 text-white/80 text-sm mb-6">
            <span className="flex items-center gap-2">
              ✅ Treinamento Completo
            </span>
            <span className="flex items-center gap-2">
              ✅ Suporte Técnico
            </span>
            <span className="flex items-center gap-2">
              ✅ Comissões Atrativas
            </span>
            <span className="flex items-center gap-2">
              ✅ Necessário ter MEI ou CNPJ
            </span>
          </div>
          <p className="text-white font-semibold text-lg">
            💼 Sua Oportunidade de Sucesso te Espera!
          </p>
        </div>
      </div>
    </section>;
};