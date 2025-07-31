import whatsappLogo from "@/assets/whatsapp-logo.png";
import instagramLogo from "@/assets/instagram-logo.jpg";
import facebookLogo from "@/assets/facebook-logo.png";
import messengerLogo from "@/assets/messenger-logo.png";
import wazeLogo from "@/assets/waze-logo.jpg";

export const SocialApps = () => {
  const apps = [
    {
      name: "WhatsApp",
      logo: whatsappLogo,
      isCustom: false
    },
    {
      name: "WhatsApp Business", 
      logo: "/lovable-uploads/d9831d0f-ef08-4050-a614-3d5db064352e.png",
      isCustom: false
    },
    {
      name: "Facebook",
      logo: facebookLogo,
      isCustom: false
    },
    {
      name: "Instagram", 
      logo: instagramLogo,
      isCustom: false
    },
    {
      name: "Messenger",
      logo: messengerLogo,
      isCustom: false
    },
    {
      name: "Waze",
      logo: wazeLogo,
      isCustom: false
    }
  ];
  return <div className="mb-4">
      <h4 className="text-sm font-semibold text-gray-700 mb-3">APPS LIBERADOS</h4>
      <div className="flex gap-2 flex-wrap">
        {apps.map(app => <div key={app.name} className="w-8 h-8 rounded-lg overflow-hidden shadow-sm">
            <img src={app.logo} alt={app.name} className="w-full h-full object-cover" />
          </div>)}
      </div>
      <p className="mt-2 text-lg text-[#ff0000]">(SEM DESCONTAR DA FRANQUIA)</p>
    </div>;
};