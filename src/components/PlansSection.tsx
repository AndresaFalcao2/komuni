import { PlanCard } from "./PlanCard";

export const PlansSection = () => {
  const mobileServices = [
    { name: "TIM Protect Backup 30GB" },
    { name: "Babbel" },
    { name: "AYA Books Premium" }
  ];

  const popularServices = [
    { name: "TIM Nuvem 30GB" },
    { name: "Babbel" },
    { name: "AYA Books Premium" },
    { name: "Bancah Premium" },
    { name: "TIM Monitor" }
  ];

  const premiumServices = [
    { name: "TIM Nuvem 30GB" },
    { name: "Babbel" },
    { name: "AYA Books Premium" },
    { name: "Bancah Premium" },
    { name: "Clube + Vantagens" },
    { name: "TIM Monitor" }
  ];

  return (
    <section id="ofertas" className="py-20 px-4 bg-gray-50">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-tim-blue mb-4">
            Ofertas de Portabilidade
          </h2>
          <p className="text-xl text-text-muted">
            Traga seu número para a TIM e ganhe benefícios exclusivos
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {/* 21GB Plan */}
          <PlanCard
            badge="Novidade"
            badgeColor="green"
            title="21GB"
            subtitle="1GB plano + 20GB bônus"
            vasServices={mobileServices}
            price="R$ 39,99/mês"
            planType="mobile"
          />

          {/* 40GB Plan */}
          <PlanCard
            badge="Mais Popular"
            badgeColor="red"
            title="40GB"
            subtitle="20GB plano + 20GB bônus"
            vasServices={popularServices}
            price="R$ 50,99/mês"
            isPopular={true}
            planType="mobile"
          />

          {/* 70GB Plan */}
          <PlanCard
            badge="Premium"
            badgeColor="purple"
            title="70GB"
            subtitle="20GB plano + 50GB bônus"
            vasServices={premiumServices}
            price="R$ 59,99/mês"
            planType="mobile"
          />
        </div>
      </div>
    </section>
  );
};