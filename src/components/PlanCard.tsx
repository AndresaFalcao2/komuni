import { Button } from "@/components/ui/button";
import { SocialApps } from "./SocialApps";
interface VasService {
  name: string;
}
interface PlanCardProps {
  badge?: string;
  badgeColor?: "green" | "red" | "purple";
  title: string;
  subtitle: string;
  vasServices: VasService[];
  price: string;
  originalPrice?: string;
  isPopular?: boolean;
  planType?: "mobile" | "fiber";
}
export const PlanCard = ({
  badge,
  badgeColor = "green",
  title,
  subtitle,
  vasServices,
  price,
  originalPrice,
  isPopular = false,
  planType = "mobile"
}: PlanCardProps) => {
  const badgeColors = {
    green: "bg-button-green text-text-white",
    red: "bg-red-500 text-text-white",
    purple: "bg-tim-purple text-text-white"
  };
  const handleWhatsAppClick = () => {
    let message = '';
    if (planType === 'mobile') {
      message = `Olá! Tenho interesse no plano ${title} (${subtitle}) por ${price}. Gostaria de mais informações sobre os benefícios inclusos.`;
    } else {
      message = `Olá! Tenho interesse no plano TIM Fibra ${title} (${subtitle}) por ${price}. Gostaria de mais informações sobre este plano de internet.`;
    }
    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/5571992346447?text=${encodedMessage}`, '_blank');
  };
  return <div className={`bg-card rounded-2xl p-6 shadow-card transition-smooth hover:shadow-xl hover:-translate-y-1 ${isPopular ? 'border-2 border-tim-orange relative' : 'border border-gray-200'}`}>
      {/* Badge */}
      {badge && <div className={`inline-block px-3 py-1 rounded-full text-sm font-semibold mb-4 ${badgeColors[badgeColor]}`}>
          {badge}
        </div>}

      {/* Popular Badge */}
      {isPopular && <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 text-text-white px-4 py-1 rounded-full text-sm font-bold bg-blue-800">
          Mais Popular
        </div>}

      {/* Plan Details */}
      <div className="text-center mb-6">
        <h3 className="text-3xl font-bold text-tim-blue mb-2">{title}</h3>
        <p className="text-gray-600 text-lg">{subtitle}</p>
      </div>

      {/* VAS Services */}
      <div className="mb-6">
        <h4 className="text-sm font-semibold text-gray-700 mb-3">VAS INCLUSOS</h4>
        <ul className="space-y-2">
          {vasServices.map((service, index) => <li key={index} className="flex items-center text-sm text-gray-600">
              <span className="text-button-green mr-2">•</span>
              {service.name}
            </li>)}
        </ul>
      </div>

      {/* Social Apps */}
      <SocialApps />

      {/* Pricing */}
      <div className="text-center mb-6">
        {originalPrice && <p className="text-gray-400 line-through text-lg mb-1">De {originalPrice}</p>}
        <div className="mb-2">
          <span className="text-2xl text-gray-600">Por apenas</span>
        </div>
        <div className="text-4xl font-bold text-tim-blue mb-2">{price}</div>
        {originalPrice && <p className="text-sm text-gray-600">Pagamento via DACC ou Pix</p>}
      </div>

      {/* CTA Button */}
      <Button variant={isPopular ? "orange" : "green"} size="lg" onClick={handleWhatsAppClick} className="w-full text-lg font-bold bg-blue-800 hover:bg-blue-700">
        {originalPrice ? "Contratar" : "Contratar Agora"}
      </Button>
    </div>;
};