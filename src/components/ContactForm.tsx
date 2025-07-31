import { useState } from "react";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
export const ContactForm = () => {
  const [formData, setFormData] = useState({
    plano: "",
    nomeCompleto: "",
    endereco: "",
    cep: "",
    cnpj: "",
    quantidadeLinhas: "",
    empresa: "",
    operadoraDoadora: "",
    telefone: ""
  });
  const {
    toast
  } = useToast();
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Basic validation
    if (!formData.nomeCompleto || !formData.endereco || !formData.cep || !formData.telefone) {
      toast({
        title: "Erro",
        description: "Por favor, preencha todos os campos obrigatórios.",
        variant: "destructive"
      });
      return;
    }

    // Here you would typically send the data to your backend
    console.log("Form submitted:", formData);
    toast({
      title: "Sucesso!",
      description: "Sua solicitação foi enviada. Entraremos em contato em breve!"
    });

    // Reset form
    setFormData({
      plano: "",
      nomeCompleto: "",
      endereco: "",
      cep: "",
      cnpj: "",
      quantidadeLinhas: "",
      empresa: "",
      operadoraDoadora: "",
      telefone: ""
    });
  };
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };
  return <div className="bg-card p-8 rounded-2xl shadow-card">
      <h3 className="text-2xl font-bold text-tim-blue mb-6 text-center">
        Solicite sua Cotação
      </h3>
      
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="plano" className="block text-sm font-medium text-gray-700 mb-2">
            Selecione o plano de interesse
          </label>
          <select id="plano" name="plano" value={formData.plano} onChange={handleChange} className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-tim-blue focus:border-transparent bg-white text-black">
            <option value="">Selecione um plano</option>
            <option value="21gb">Plano Móvel 21GB</option>
            <option value="40gb">Plano Móvel 40GB</option>
            <option value="70gb">Plano Móvel 70GB</option>
            <option value="fibra-400">TIM Fibra 400 MEGA</option>
            <option value="fibra-600">TIM Fibra 600 MEGA</option>
            <option value="fibra-1giga">TIM Fibra 1G GIGA+</option>
            <option value="outras-ofertas">Outras Ofertas Disponíveis</option>
          </select>
        </div>
        <div>
          <label htmlFor="nomeCompleto" className="block text-sm font-medium text-gray-700 mb-2">
            Nome completo *
          </label>
          <input type="text" id="nomeCompleto" name="nomeCompleto" value={formData.nomeCompleto} onChange={handleChange} className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-tim-blue focus:border-transparent text-black" required />
        </div>

        <div>
          <label htmlFor="endereco" className="block text-sm font-medium text-gray-700 mb-2">
            Endereço *
          </label>
          <input type="text" id="endereco" name="endereco" value={formData.endereco} onChange={handleChange} className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-tim-blue focus:border-transparent text-black" required />
        </div>

        <div>
          <label htmlFor="cep" className="block text-sm font-medium text-gray-700 mb-2">
            CEP *
          </label>
          <input type="text" id="cep" name="cep" value={formData.cep} onChange={handleChange} className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-tim-blue focus:border-transparent text-black" required />
        </div>

        <div>
          <label htmlFor="cnpj" className="block text-sm font-medium text-gray-700 mb-2">
            CNPJ
          </label>
          <input type="text" id="cnpj" name="cnpj" value={formData.cnpj} onChange={handleChange} className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-tim-blue focus:border-transparent text-black" />
        </div>

        <div>
          <label htmlFor="quantidadeLinhas" className="block text-sm font-medium text-gray-700 mb-2">
            Quantidade de linhas
          </label>
          <input type="number" id="quantidadeLinhas" name="quantidadeLinhas" value={formData.quantidadeLinhas} onChange={handleChange} className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-tim-blue focus:border-transparent text-black" />
        </div>

        <div>
          <label htmlFor="empresa" className="block text-sm font-medium text-gray-700 mb-2">
            Empresa
          </label>
          <input type="text" id="empresa" name="empresa" value={formData.empresa} onChange={handleChange} className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-tim-blue focus:border-transparent text-black" />
        </div>

        <div>
          <label htmlFor="operadoraDoadora" className="block text-sm font-medium text-gray-700 mb-2">
            Operadora Doadora
          </label>
          <select id="operadoraDoadora" name="operadoraDoadora" value={formData.operadoraDoadora} onChange={handleChange} className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-tim-blue focus:border-transparent bg-white text-black">
            <option value="">Selecione a operadora</option>
            <option value="vivo">Vivo</option>
            <option value="claro">Claro</option>
            <option value="oi">Oi</option>
            <option value="nextel">Nextel</option>
            <option value="outra">Outra</option>
          </select>
        </div>

        <div>
          <label htmlFor="telefone" className="block text-sm font-medium text-gray-700 mb-2">
            Telefone *
          </label>
          <input type="tel" id="telefone" name="telefone" value={formData.telefone} onChange={handleChange} className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-tim-blue focus:border-transparent text-black" required />
        </div>

        <Button type="submit" variant="green" size="lg" onClick={e => {
        e.preventDefault();
        const planNames = {
          '21gb': 'Plano Móvel 21GB',
          '40gb': 'Plano Móvel 40GB', 
          '70gb': 'Plano Móvel 70GB',
          'fibra-400': 'TIM Fibra 400 MEGA',
          'fibra-600': 'TIM Fibra 600 MEGA',
          'fibra-1giga': 'TIM Fibra 1G GIGA+',
          'outras-ofertas': 'Outras Ofertas Disponíveis'
        };
        const planName = planNames[formData.plano as keyof typeof planNames] || formData.plano || 'não selecionado';
        const message = `Olá! Gostaria de solicitar uma cotação. Dados:
Plano: ${planName}
Nome: ${formData.nomeCompleto || 'não informado'}
Endereço: ${formData.endereco || 'não informado'}
CEP: ${formData.cep || 'não informado'}
CNPJ: ${formData.cnpj || 'não informado'}
Quantidade de linhas: ${formData.quantidadeLinhas || 'não informado'}
Empresa: ${formData.empresa || 'não informado'}
Operadora Doadora: ${formData.operadoraDoadora || 'não informado'}
Telefone: ${formData.telefone || 'não informado'}`;
        const encodedMessage = encodeURIComponent(message);
        window.open(`https://wa.me/5571992346447?text=${encodedMessage}`, '_blank');
      }} className="w-full text-lg font-bold bg-blue-900 hover:bg-blue-800">
          Enviar Solicitação
        </Button>
      </form>
    </div>;
};