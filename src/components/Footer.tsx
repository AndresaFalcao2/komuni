import { Phone, Mail, Instagram, Clock } from "lucide-react";
import { ContactForm } from "./ContactForm";
export const Footer = () => {
  return <footer id="contato" className="text-text-white py-20 px-4 bg-blue-800 rounded-lg">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-8">
              Entre em Contato
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Estamos prontos para atender sua empresa
            </p>

            <div className="space-y-6">
              {/* WhatsApp */}
              <div className="flex items-center gap-4">
                <div className="bg-button-green p-3 rounded-lg">
                  <Phone className="h-6 w-6 text-text-white" />
                </div>
                <div>
                  <h4 className="font-semibold text-lg">WhatsApp</h4>
                  <p className="text-tim-blue-light">(71) 99234-6447</p>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-center gap-4">
                <div className="bg-tim-orange p-3 rounded-lg">
                  <Mail className="h-6 w-6 text-text-white" />
                </div>
                <div>
                  <h4 className="font-semibold text-lg">E-mail</h4>
                  <p className="text-tim-blue-light">timempresas@komuniqtelecom.com.br</p>
                </div>
              </div>

              {/* Instagram */}
              <div className="flex items-center gap-4">
                <div className="bg-tim-purple p-3 rounded-lg">
                  <Instagram className="h-6 w-6 text-text-white" />
                </div>
                <div>
                  <h4 className="font-semibold text-lg">Instagram</h4>
                  <p className="text-tim-blue-light">@komuniqtimempresas</p>
                </div>
              </div>

              {/* Business Hours */}
              <div className="flex items-center gap-4">
                <div className="bg-tim-yellow p-3 rounded-lg">
                  <Clock className="h-6 w-6 text-text-white" />
                </div>
                <div>
                  <h4 className="font-semibold text-lg">Horário de Atendimento</h4>
                  <p className="text-tim-blue-light">Segunda a Sexta: 8h às 17h</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <ContactForm />
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-tim-blue-light mt-16 pt-8 text-center">
          <p className="text-tim-blue-light">© 2025 Komuniq Telecom - Credenciada TIM. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>;
};