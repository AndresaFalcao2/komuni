import { PlanCard } from "./PlanCard";
export const FibraSection = () => {
  const basicServices = [{
    name: "Bancah"
  }, {
    name: "AYA Ensina"
  }, {
    name: "DDA Segurosapp"
  }];
  const focusServices = [{
    name: "Bancah"
  }, {
    name: "AYA Ensina"
  }, {
    name: "B+"
  }, {
    name: "Outros apps visuais"
  }];
  const premiumServices = [{
    name: "Bancah"
  }, {
    name: "DDA"
  }, {
    name: "Lock+"
  }, {
    name: "HBO Max"
  }, {
    name: "Paramount+"
  }];
  return <section id="fibra" className="py-20 px-4 bg-gray-50">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-tim-blue mb-4">
            TIM Fibra
          </h2>
          <p className="text-xl text-text-muted">
            Internet ultra rápida para sua empresa
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {/* 400 MEGA */}
          <div className="bg-card rounded-2xl p-6 shadow-card transition-smooth hover:shadow-xl hover:-translate-y-1 border border-gray-200">
            <div className="text-center mb-6">
              <h3 className="text-3xl font-bold text-tim-blue mb-2">400 MEGA</h3>
              <p className="text-gray-600 text-lg">400/200 Mbps</p>
            </div>

            <div className="mb-6">
              <h4 className="text-sm font-semibold text-gray-700 mb-3">BENEFÍCIOS</h4>
              <ul className="space-y-2">
                {basicServices.map((service, index) => <li key={index} className="flex items-center text-sm text-gray-600">
                    <span className="text-button-green mr-2">•</span>
                    {service.name}
                  </li>)}
              </ul>
            </div>

            <div className="text-center mb-6">
              <p className="text-gray-400 line-through text-lg mb-1">De R$ 119,99</p>
              <div className="text-4xl font-bold text-tim-blue mb-2">R$ 99,99/mês</div>
              <p className="text-sm text-gray-600">Pagamento via DACC ou Pix</p>
            </div>

            <button onClick={() => {
            const message = encodeURIComponent('Olá! Tenho interesse no plano TIM Fibra 400 MEGA (400/200 Mbps) por R$ 99,99/mês. Gostaria de mais informações sobre este plano.');
            window.open(`https://wa.me/5571992346447?text=${message}`, '_blank');
          }} className="w-full text-text-white py-3 px-6 rounded-lg font-semibold text-lg transition-fast hover:bg-button-green-hover shadow-button bg-blue-800 hover:bg-blue-700">
              Contratar
            </button>
          </div>

          {/* 600 MEGA */}
          <div className="bg-card rounded-2xl p-6 shadow-card transition-smooth hover:shadow-xl hover:-translate-y-1 border-2 border-tim-orange relative">
            <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 text-text-white px-4 py-1 rounded-full text-sm font-bold bg-blue-800">
              Oferta Foco
            </div>

            <div className="text-center mb-6">
              <h3 className="text-3xl font-bold text-tim-blue mb-2">600 MEGA</h3>
              <p className="text-gray-600 text-lg">600/300 Mbps</p>
            </div>

            <div className="mb-6">
              <h4 className="text-sm font-semibold text-gray-700 mb-3">BENEFÍCIOS</h4>
              <ul className="space-y-2">
                {focusServices.map((service, index) => <li key={index} className="flex items-center text-sm text-gray-600">
                    <span className="text-button-green mr-2">•</span>
                    {service.name}
                  </li>)}
              </ul>
            </div>

            <div className="text-center mb-6">
              <p className="text-gray-400 line-through text-lg mb-1">De R$ 149,99</p>
              <div className="text-4xl font-bold text-tim-blue mb-2">R$ 109,99/mês</div>
              <p className="text-sm text-gray-600">Pagamento via DACC ou Pix</p>
            </div>

            <button onClick={() => {
            const message = encodeURIComponent('Olá! Tenho interesse no plano TIM Fibra 600 MEGA (600/300 Mbps) por R$ 109,99/mês. Gostaria de mais informações sobre este plano.');
            window.open(`https://wa.me/5571992346447?text=${message}`, '_blank');
          }} className="w-full text-text-white py-3 px-6 rounded-lg font-semibold text-lg transition-fast shadow-button bg-blue-800 hover:bg-blue-700">
              Contratar
            </button>
          </div>

          {/* 2 GIGA+ */}
          <div className="bg-card rounded-2xl p-6 shadow-card transition-smooth hover:shadow-xl hover:-translate-y-1 border border-gray-200">
            <div className="text-center mb-6">
              <h3 className="text-3xl font-bold text-tim-blue mb-2">1 GIGA+ CNPJ</h3>
              <p className="text-gray-600 text-lg">1000/500 Mbps</p>
            </div>

            <div className="mb-6">
              <h4 className="text-sm font-semibold text-gray-700 mb-3">BENEFÍCIOS</h4>
              <ul className="space-y-2">
                {premiumServices.map((service, index) => <li key={index} className="flex items-center text-sm text-gray-600">
                    <span className="text-button-green mr-2">•</span>
                    {service.name}
                  </li>)}
              </ul>
            </div>

            <div className="text-center mb-6">
              <p className="text-gray-400 line-through text-lg mb-1">De R$ 419,99</p>
              <div className="text-4xl font-bold text-tim-blue mb-2">R$ 119,99/mês</div>
              <p className="text-sm text-gray-600">Pagamento via DACC ou Pix</p>
            </div>

            <button onClick={() => {
            const message = encodeURIComponent('Olá! Tenho interesse no plano TIM Fibra 1G GIGA+ (2000/1000 Mbps) por R$ 369,99/mês. Gostaria de mais informações sobre este plano.');
            window.open(`https://wa.me/5571992346447?text=${message}`, '_blank');
          }} className="w-full text-text-white py-3 px-6 rounded-lg font-semibold text-lg transition-fast hover:bg-button-green-hover shadow-button bg-blue-800 hover:bg-blue-700">
              Contratar
            </button>
          </div>
        </div>
      </div>
    </section>;
};