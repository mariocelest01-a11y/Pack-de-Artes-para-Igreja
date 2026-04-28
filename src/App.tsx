/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion, AnimatePresence } from "motion/react";
import { CheckCircle2, Activity, ChevronDown, ThumbsUp, ShieldCheck, Star, ArrowRight, Dumbbell, Gift, Clock, Image as ImageIcon, Video, Mail, Heart, Play, FileText, HelpCircle } from "lucide-react";
import { useState, useEffect } from "react";

const CTA_BUTTON = (text: string = "QUERO ELIMINAR MINHA DOR", onClick?: () => void) => (
  <motion.button
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
    onClick={onClick}
    className="bg-[#f97316] text-white font-black py-5 px-10 rounded-full text-xl md:text-2xl shadow-[0_10px_20px_rgba(249,115,22,0.3)] hover:bg-[#ea580c] transition-all cursor-pointer uppercase tracking-tight"
  >
    {text}
  </motion.button>
);

const ImageCarousel = ({ images, interval = 3000 }: { images: string[], interval?: number }) => {
  const [index, setIndex] = useState(0);

  // Pre-load images for smoother transitions
  useEffect(() => {
    images.forEach((src) => {
      const img = new Image();
      img.src = src;
    });
  }, [images]);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, interval);
    return () => clearInterval(timer);
  }, [images.length, interval]);

  return (
    <div className="relative w-full max-w-[400px] mx-auto aspect-[9/16] rounded-[2rem] overflow-hidden shadow-2xl border-4 border-white bg-black">
      <AnimatePresence mode="wait">
        <motion.div
          key={index}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="absolute inset-0 w-full h-full"
        >
          {/* Blurred background to fill space without showing white/empty bars */}
          <img
            src={images[index]}
            className="absolute inset-0 w-full h-full object-cover blur-2xl opacity-40 scale-110"
            referrerPolicy="no-referrer"
          />
          {/* Main image - contained to never cut off */}
          <img
            src={images[index]}
            className="relative w-full h-full object-contain z-10"
            referrerPolicy="no-referrer"
          />
        </motion.div>
      </AnimatePresence>
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2 z-20">
        {images.map((_, i) => (
          <div
            key={i}
            className={`w-2 h-2 rounded-full transition-all ${
              i === index ? "bg-white w-6" : "bg-white/50"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default function App() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const scrollToPlanos = () => {
    const element = document.getElementById("planos");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const redirectToCheckout = () => {
    // Link de checkout Hotmart atualizado
    window.location.href = "https://pay.hotmart.com/I105379993V?checkoutMode=10";
  };

  const carouselImages = [
    "https://www.image2url.com/r2/default/images/1776705354165-de2ccd1e-bf22-406b-9abb-1e9f0163720b.png",
    "https://www.image2url.com/r2/default/images/1776705494143-7686c23d-4985-4a91-b2b6-f18e5a63c849.png",
    "https://www.image2url.com/r2/default/images/1776705615048-f996bb60-caae-4469-8805-35ef7536b9ca.png",
  ];

  const testimonialImages = [
    "https://www.image2url.com/r2/default/images/1776150489849-7c5e9b97-0fad-48b5-9288-80c70d200479.jpeg",
    "https://www.image2url.com/r2/default/images/1776150596485-25cbee0e-52e7-4574-b8e8-d58f6619d0b5.jpeg",
    "https://www.image2url.com/r2/default/images/1776150676119-dc1cfe27-927d-4038-a35f-5292fd7683a8.jpeg",
  ];

  const faqs = [
    {
      q: "Preciso de algum equipamento para fazer os exercícios?",
      a: "Não! Todos os 14 exercícios foram projetados para serem feitos apenas com o peso do seu corpo, no conforto da sua sala ou quarto."
    },
    {
      q: "Quanto tempo preciso dedicar por dia?",
      a: "O protocolo exige menos de 15 minutos por dia. São apenas 2 exercícios diários que você pode encaixar em qualquer momento da sua rotina."
    },
    {
      q: "Como vou receber o acesso ao conteúdo?",
      a: "O acesso é imediato! Assim que o pagamento for confirmado, você receberá em seu e-mail o link para baixar o PDF e acessar as videoaulas."
    },
    {
      q: "E se eu não sentir melhora na dor?",
      a: "Nós confiamos tanto no nosso método que oferecemos 7 dias de garantia incondicional. Se não estiver satisfeito, devolvemos 100% do seu dinheiro."
    }
  ];

  return (
    <div className="min-h-screen font-sans text-[#1a2e4a] bg-white overflow-x-hidden selection:bg-[#f97316]/20">
      
      {/* BARRA DE PROMOÇÃO */}
      <div className="bg-[#f97316] text-white py-2 px-4 text-center font-bold text-sm md:text-base animate-pulse">
        🔥 OFERTA DE LANÇAMENTO: ALIVIE SUA DOR POR APENAS R$ 10,00!
      </div>

      {/* HERO SECTION */}
      <section className="bg-gradient-to-b from-[#f0f4f8] to-white pt-12 pb-20 px-4">
        <div className="max-w-5xl mx-auto text-center">
          <div className="flex justify-center mb-6">
            <span className="bg-[#1a2e4a]/10 text-[#1a2e4a] px-4 py-1 rounded-full text-sm font-bold uppercase tracking-widest flex items-center gap-2">
              <Activity size={16} /> Saúde & Bem-Estar
            </span>
          </div>
          
          {/* HEADLINE */}
          <h1 className="text-4xl md:text-7xl font-black mb-6 leading-[1.1] tracking-tight text-[#1a2e4a]">
            Diga Adeus à Dor nas Costas em <span className="text-[#f97316]">7 Dias</span>
          </h1>
          
          {/* SUBHEADLINE */}
          <p className="text-xl md:text-2xl text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed">
            14 exercícios simples feitos em casa, sem equipamento, que aliviam a dor lombar — 2 exercícios por dia, menos de 15 minutos por sessão.
          </p>

          {/* IMAGEM DE DESTAQUE / CARROSSEL */}
          <div className="mb-12">
            <ImageCarousel images={carouselImages} interval={7000} />
          </div>

          {/* BOTAO DE COMPRA */}
          <div className="flex flex-col items-center gap-4">
            {CTA_BUTTON("QUERO ELIMINAR MINHA DOR", scrollToPlanos)}
            <div className="flex items-center gap-2 text-sm text-gray-500 font-medium">
              <ShieldCheck size={16} className="text-green-500" /> Método Seguro e Testado
            </div>
          </div>
        </div>
      </section>

      {/* O PROTOCOLO */}
      <section className="py-20 px-4 bg-[#1a2e4a] text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-black mb-8">O Protocolo Progressivo</h2>
          <p className="text-xl text-gray-300 leading-relaxed mb-12">
            Um protocolo progressivo de 7 dias, com 2 exercícios por dia, que vai destravando, ativando e fortalecendo sua lombar até você chegar no Dia 7 sem aquela dor que te acordava todo dia.
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white/5 p-6 rounded-2xl border border-white/10">
              <div className="text-[#f97316] font-black text-4xl mb-2">01</div>
              <h3 className="font-bold text-xl mb-2">Destravar</h3>
              <p className="text-gray-400 text-sm">Liberação das tensões acumuladas na musculatura profunda.</p>
            </div>
            <div className="bg-white/5 p-6 rounded-2xl border border-white/10">
              <div className="text-[#f97316] font-black text-4xl mb-2">02</div>
              <h3 className="font-bold text-xl mb-2">Ativar</h3>
              <p className="text-gray-400 text-sm">Ativação dos estabilizadores da coluna para suporte imediato.</p>
            </div>
            <div className="bg-white/5 p-6 rounded-2xl border border-white/10">
              <div className="text-[#f97316] font-black text-4xl mb-2">03</div>
              <h3 className="font-bold text-xl mb-2">Fortalecer</h3>
              <p className="text-gray-400 text-sm">Fortalecimento progressivo para evitar que a dor retorne.</p>
            </div>
          </div>
        </div>
      </section>

      {/* O QUE ESTÁ INCLUÍDO */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-black mb-4">O que você vai receber?</h2>
            <div className="w-20 h-1.5 bg-[#f97316] mx-auto rounded-full"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-[#f0f4f8] p-8 rounded-[2rem] flex items-start gap-6">
              <div className="bg-[#1a2e4a] p-4 rounded-2xl text-white">
                <FileText size={32} />
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-2">Guia em PDF</h3>
                <p className="text-gray-600">Manual completo com o passo a passo ilustrado de cada um dos 14 exercícios.</p>
              </div>
            </div>
            <div className="bg-[#f0f4f8] p-8 rounded-[2rem] flex items-start gap-6">
              <div className="bg-[#1a2e4a] p-4 rounded-2xl text-white">
                <Video size={32} />
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-2">Videoaulas Práticas</h3>
                <p className="text-gray-600">Vídeos curtos mostrando a execução correta para você não errar nenhum movimento.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* BENEFICIOS */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-black mb-4">Por que este método funciona?</h2>
          </div>

          <div className="space-y-4">
            {[
              "Simplicidade: Exercícios que qualquer pessoa pode fazer.",
              "Rapidez: Menos de 15 minutos por dia são suficientes.",
              "Sem Equipamento: Use apenas o peso do seu corpo.",
              "Científico: Baseado em princípios de fisioterapia e mobilidade.",
              "Acesso Vitalício: Pague uma vez e tenha o guia para sempre."
            ].map((benefit, i) => (
              <div key={i} className="flex items-center gap-4 bg-white p-6 rounded-2xl shadow-sm border-l-4 border-[#f97316]">
                <CheckCircle2 className="text-[#f97316] shrink-0" size={24} />
                <span className="text-lg font-bold text-[#1a2e4a]">{benefit}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* GARANTIA */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto bg-white border-4 border-[#1a2e4a] rounded-[3rem] p-8 md:p-16 flex flex-col md:flex-row items-center gap-12 shadow-2xl">
          <div className="relative">
            <div className="w-48 h-48 bg-[#1a2e4a] rounded-full flex items-center justify-center shadow-lg">
              <ShieldCheck size={100} className="text-white" />
            </div>
            <div className="absolute -bottom-4 -right-4 bg-[#f97316] shadow-lg rounded-full w-20 h-20 flex items-center justify-center font-black text-2xl text-white border-4 border-white">
              7
            </div>
          </div>
          <div className="text-center md:text-left">
            <h2 className="text-3xl font-black mb-4 uppercase tracking-tighter">Garantia de Satisfação</h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              Você tem 7 dias para testar o protocolo. Se não sentir alívio na sua dor ou não gostar do conteúdo, nós devolvemos cada centavo. O risco é todo nosso.
            </p>
          </div>
        </div>
      </section>

      {/* OFERTA ÚNICA */}
      <section id="planos" className="py-20 px-4 bg-[#f0f4f8]">
        <div className="max-w-3xl mx-auto text-center">
          <div className="bg-white p-10 md:p-16 rounded-[3rem] shadow-2xl border-4 border-[#f97316] relative overflow-hidden">
            <div className="absolute top-6 right-6 bg-[#1a2e4a] text-white text-[10px] font-black px-3 py-1 rounded-full uppercase tracking-widest">Oferta Exclusiva</div>
            <h3 className="text-3xl font-black mb-2 uppercase">Protocolo Alívio Imediato</h3>
            <p className="text-gray-500 mb-8">Tudo o que você precisa para viver sem dor</p>
            
            <div className="mb-8">
              <div className="text-sm font-bold text-gray-400 line-through">De R$ 97,00</div>
              <div className="text-7xl font-black text-[#1a2e4a]">R$ 10,00</div>
              <div className="text-sm font-bold text-[#f97316]">PAGAMENTO ÚNICO</div>
            </div>

            <ul className="space-y-4 mb-10 text-left max-w-xs mx-auto">
              <li className="flex items-center gap-2 font-bold"><CheckCircle2 size={18} className="text-[#f97316]" /> 14 Exercícios em Vídeo</li>
              <li className="flex items-center gap-2 font-bold"><CheckCircle2 size={18} className="text-[#f97316]" /> Guia PDF Ilustrado</li>
              <li className="flex items-center gap-2 font-bold"><CheckCircle2 size={18} className="text-[#f97316]" /> Acesso Vitalício</li>
              <li className="flex items-center gap-2 font-bold"><CheckCircle2 size={18} className="text-[#f97316]" /> Suporte via E-mail</li>
            </ul>

            {CTA_BUTTON("QUERO COMEÇAR AGORA", redirectToCheckout)}
            
            <p className="mt-6 text-xs text-gray-400 font-medium">
              Compra segura processada pela Hotmart
            </p>
          </div>
        </div>
      </section>

      {/* DEPOIMENTOS */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-black mb-12 italic text-[#1a2e4a]">Resultados Reais</h2>
          <ImageCarousel images={testimonialImages} interval={20000} />
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-black mb-4">Dúvidas Frequentes</h2>
            <HelpCircle className="mx-auto text-[#f97316]" size={40} />
          </div>

          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <div key={i} className="border-2 border-gray-100 rounded-2xl overflow-hidden">
                <button 
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full p-6 text-left flex justify-between items-center bg-white hover:bg-gray-50 transition-colors"
                >
                  <span className="font-bold text-lg">{faq.q}</span>
                  <ChevronDown className={`transition-transform ${openFaq === i ? 'rotate-180' : ''}`} />
                </button>
                <AnimatePresence>
                  {openFaq === i && (
                    <motion.div 
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="bg-gray-50 px-6 pb-6 text-gray-600 leading-relaxed"
                    >
                      {faq.a}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-[#1a2e4a] text-white py-20 px-4">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="flex items-center gap-2 mb-6">
              <Activity className="text-[#f97316]" size={32} />
              <span className="text-2xl font-black uppercase tracking-tighter italic">Alívio Lombar</span>
            </div>
            <p className="text-gray-400 mb-8 max-w-md">
              Nossa missão é devolver a liberdade de movimento para milhares de brasileiros através de métodos simples e eficazes.
            </p>
            <div className="text-sm text-gray-500">
              © 2025 Alívio Lombar. Todos os direitos reservados.
            </div>
          </div>
          <div className="bg-white/5 p-8 rounded-3xl border border-white/10">
            <h4 className="text-xl font-bold mb-4">Precisa de suporte?</h4>
            <p className="text-gray-400 mb-6">Nossa equipe está pronta para te ajudar com qualquer dúvida.</p>
            <a href="mailto:suporte@aliviolombar.com.br" className="flex items-center gap-3 text-[#f97316] font-bold text-lg hover:underline">
              <Mail size={20} /> suporte@aliviolombar.com.br
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

