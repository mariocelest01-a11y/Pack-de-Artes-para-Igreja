/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion, AnimatePresence } from "motion/react";
import { CheckCircle2, Church, ChevronDown, ThumbsUp, ShieldCheck, Star, ArrowRight, Zap, Gift, Clock, Image as ImageIcon, Video, Mail } from "lucide-react";
import { useState, useEffect } from "react";

const CTA_BUTTON = (text: string = "Eu Quero o Pack de Artes", onClick?: () => void) => (
  <motion.button
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
    onClick={onClick}
    className="bg-[#3498db] text-white font-black py-5 px-10 rounded-full text-xl md:text-2xl shadow-[0_10px_20px_rgba(52,152,219,0.3)] hover:bg-[#2980b9] transition-all cursor-pointer uppercase tracking-tight"
  >
    {text}
  </motion.button>
);

const ImageCarousel = ({ images }: { images: string[] }) => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 3000);
    return () => clearInterval(timer);
  }, [images.length]);

  return (
    <div className="relative w-full max-w-[400px] mx-auto aspect-[9/16] rounded-[2rem] overflow-hidden shadow-2xl border-4 border-white">
      <AnimatePresence mode="wait">
        <motion.img
          key={index}
          src={images[index]}
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.9 }}
          transition={{ duration: 0.5 }}
          className="w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
      </AnimatePresence>
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2">
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

  const redirectToCheckout = (plan: string) => {
    // Links reais de checkout Hotmart
    const links: Record<string, string> = {
      basico: "https://pay.hotmart.com/L105337952S",
      premium: "https://pay.hotmart.com/V105338213V"
    };
    window.location.href = links[plan] || "#";
  };

  const carouselImages2 = [
    "https://www.image2url.com/r2/default/images/1776027997758-75229b9e-d371-4142-b862-3518f059522e.jpeg",
    "https://www.image2url.com/r2/default/images/1776028116012-beca84e8-f187-42de-bb95-59d123607048.jpeg",
    "https://www.image2url.com/r2/default/images/1776028191583-286c63f0-c660-4776-adf6-bdb57242a9d4.jpeg",
    "https://www.image2url.com/r2/default/images/1776028247021-380a2875-ae0f-40b2-a714-54e6043c42b3.jpeg",
    "https://www.image2url.com/r2/default/images/1776028302634-6052c251-5ace-4770-88b6-e626ebf1bfa8.jpeg",
  ];

  return (
    <div className="min-h-screen font-sans text-[#2c3e50] bg-white overflow-x-hidden selection:bg-[#3498db]/20">
      
      {/* BARRA DE PROMOÇÃO */}
      <div className="bg-[#e74c3c] text-white py-2 px-4 text-center font-bold text-sm md:text-base animate-pulse">
        🔥 OFERTA POR TEMPO LIMITADO: 80% DE DESCONTO + BÔNUS EXCLUSIVOS!
      </div>

      {/* HERO SECTION (HEADLINE & SUBHEADLINE) */}
      <section className="bg-gradient-to-b from-[#f8fbff] to-white pt-12 pb-20 px-4">
        <div className="max-w-5xl mx-auto text-center">
          <div className="flex justify-center mb-6">
            <span className="bg-[#3498db]/10 text-[#3498db] px-4 py-1 rounded-full text-sm font-bold uppercase tracking-widest flex items-center gap-2">
              <Church size={16} /> Mídia para Igreja
            </span>
          </div>
          
          {/* HEADLINE */}
          <h1 className="text-4xl md:text-7xl font-black mb-6 leading-[1.1] tracking-tight text-[#1a252f]">
            Transforme a Mídia da sua Igreja com <span className="text-[#3498db]">Design Profissional</span>
          </h1>
          
          {/* SUBHEADLINE */}
          <p className="text-xl md:text-2xl text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed">
            Tenha acesso a mais de 500 artes modernas e editáveis direto do seu celular. 
            Valorize seus cultos e eventos com excelência visual.
          </p>

          {/* VÍDEO VSL */}
          <div className="mb-12 flex justify-center">
            <div className="relative w-full max-w-[350px] aspect-[9/16] rounded-[2rem] overflow-hidden shadow-2xl border-4 border-white bg-black">
              <iframe 
                src="https://player.vimeo.com/video/1182437507?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479&amp;title=0&amp;byline=0&amp;portrait=0&amp;loop=1" 
                className="absolute top-0 left-0 w-full h-full"
                frameBorder="0" 
                allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share" 
                referrerPolicy="strict-origin-when-cross-origin" 
                title="VSL pack church"
              ></iframe>
            </div>
          </div>

          {/* BOTAO DE COMPRA */}
          <div className="flex flex-col items-center gap-4">
            {CTA_BUTTON("Eu Quero o Pack de Artes", scrollToPlanos)}
            <div className="flex items-center gap-2 text-sm text-gray-500 font-medium">
              <ShieldCheck size={16} className="text-green-500" /> Compra 100% Segura e Acesso Imediato
            </div>
          </div>
        </div>
      </section>

      {/* O QUE VAI RECEBER */}
      <section className="py-20 px-4 bg-[#f9fafb]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-black mb-4">O que você vai receber?</h2>
            <div className="w-20 h-1.5 bg-[#3498db] mx-auto rounded-full"></div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "+500 Artes Editáveis",
                desc: "Modelos para Cultos, Congressos, Santa Ceia, Jovens e muito mais.",
                icon: <Zap className="text-[#3498db]" size={32} />
              },
              {
                title: "Banco de Imagens HD",
                desc: "Milhares de fotos e fundos cristãos de alta resolução.",
                icon: <ImageIcon className="text-[#3498db]" size={32} />
              },
              {
                title: "Videoaulas Práticas",
                desc: "Aprenda a editar tudo em minutos usando apenas o celular.",
                icon: <Video className="text-[#3498db]" size={32} />
              }
            ].map((item, i) => (
              <div key={i} className="bg-white p-8 rounded-[2rem] shadow-xl border border-gray-100 hover:border-[#3498db]/30 transition-all group">
                <div className="mb-6 bg-[#f0f7ff] w-16 h-16 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform">
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold mb-4">{item.title}</h3>
                <p className="text-gray-600 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BENEFICIOS DIRETOS */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-black mb-4">Por que escolher nosso Pack?</h2>
          </div>

          <div className="space-y-6">
            {[
              "Economize tempo: Crie artes profissionais em menos de 5 minutos.",
              "100% Celular: Não precisa de computador ou softwares caros.",
              "Identidade Visual: Mantenha um padrão de excelência nas redes sociais.",
              "Acesso Vitalício: Pague uma vez e use para sempre.",
              "Atualizações Gratuitas: Receba novos modelos sem custo adicional."
            ].map((benefit, i) => (
              <div key={i} className="flex items-center gap-4 bg-[#f8fbff] p-6 rounded-2xl border-l-4 border-[#3498db]">
                <CheckCircle2 className="text-[#3498db] shrink-0" size={24} />
                <span className="text-lg md:text-xl font-bold text-[#2c3e50]">{benefit}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SESSÃO DOS BÓNUS */}
      <section className="py-20 px-4 bg-[#2c3e50] text-white overflow-hidden relative">
        <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-96 h-96 bg-[#3498db]/10 rounded-full blur-3xl"></div>
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-black mb-4">Bônus Exclusivos 🎁</h2>
            <p className="text-[#3498db] font-bold text-xl uppercase tracking-widest">Somente para compras hoje</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                title: "Pack de Stories Animados",
                value: "R$ 97,00",
                desc: "Artes com movimento para engajar ainda mais sua congregação.",
                icon: <Gift size={40} />
              },
              {
                title: "Guia de Legendas Criativas",
                value: "R$ 47,00",
                desc: "Textos prontos para copiar e colar em suas postagens.",
                icon: <Gift size={40} />
              }
            ].map((bonus, i) => (
              <div key={i} className="bg-white/5 backdrop-blur-lg p-8 rounded-[2.5rem] border border-white/10 flex flex-col md:flex-row gap-6 items-start">
                <div className="bg-[#3498db] p-4 rounded-2xl shadow-lg">
                  {bonus.icon}
                </div>
                <div>
                  <div className="flex items-center gap-3 mb-2">
                    <h3 className="text-2xl font-bold">{bonus.title}</h3>
                    <span className="bg-red-500 text-xs font-bold px-2 py-1 rounded uppercase">Grátis</span>
                  </div>
                  <p className="text-gray-400 mb-4">{bonus.desc}</p>
                  <div className="text-sm font-medium">Valor original: <span className="line-through">{bonus.value}</span></div>
                </div>
              </div>
            ))}
          </div>
          
          {/* BOTAO DE COMPRA */}
          <div className="mt-16 text-center">
            {CTA_BUTTON("Quero Garantir meus Bônus", scrollToPlanos)}
          </div>
        </div>
      </section>

      {/* OUTRO CARROSSEL DE IMAGEM SEMPRE MOSTRANDO O PRODUTO */}
      <section className="py-20 px-4 bg-[#f9fafb]">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-black mb-12 italic">Qualidade que você pode ver</h2>
          <ImageCarousel images={carouselImages2} />
        </div>
      </section>

      {/* GARANTIA DE 7 DIAS */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto bg-white border-4 border-[#f1c40f] rounded-[3rem] p-8 md:p-16 flex flex-col md:flex-row items-center gap-12 shadow-2xl">
          <div className="relative">
            <div className="w-48 h-48 bg-[#f1c40f] rounded-full flex items-center justify-center shadow-lg">
              <ShieldCheck size={100} className="text-white" />
            </div>
            <div className="absolute -bottom-4 -right-4 bg-white shadow-lg rounded-full w-20 h-20 flex items-center justify-center font-black text-2xl border-4 border-[#f1c40f]">
              7
            </div>
          </div>
          <div className="text-center md:text-left">
            <h2 className="text-3xl font-black mb-4 uppercase tracking-tighter">Risco Zero: Garantia Incondicional</h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              Você tem 7 dias para testar todo o conteúdo. Se por qualquer motivo você achar que o pack não é para você, 
              nós devolvemos 100% do seu dinheiro. Sem perguntas, sem burocracia.
            </p>
          </div>
        </div>
      </section>

      {/* DOIS CARDS DA OFERTA PARA A PESSOA COMPRAR */}
      <section id="planos" className="py-20 px-4 bg-[#f0f7ff]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-black mb-4">Escolha o seu Plano</h2>
            <p className="text-gray-600 font-bold">Acesso imediato após a confirmação do pagamento</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Plano Básico */}
            <div className="bg-white p-10 rounded-[3rem] shadow-xl border-2 border-transparent hover:border-[#3498db] transition-all flex flex-col">
              <div className="mb-8">
                <h3 className="text-2xl font-black mb-2 uppercase">Plano Básico</h3>
                <p className="text-gray-500">Acesso Essencial</p>
              </div>
              <div className="mb-8">
                <div className="text-5xl font-black text-[#2c3e50]">R$ 10,00</div>
                <div className="text-sm font-bold text-gray-400">Pagamento Único</div>
              </div>
              <ul className="space-y-4 mb-10 flex-grow">
                <li className="flex items-center gap-2 font-medium"><CheckCircle2 size={18} className="text-green-500" /> Acesso a 500+ Artes</li>
                <li className="flex items-center gap-2 font-medium"><CheckCircle2 size={18} className="text-green-500" /> Suporte via E-mail</li>
                <li className="flex items-center gap-2 font-medium text-gray-400 line-through"><CheckCircle2 size={18} /> Bônus Exclusivos</li>
              </ul>
              {CTA_BUTTON("Garantir Plano Básico", () => redirectToCheckout("basico"))}
            </div>

            {/* Plano Premium */}
            <div className="bg-[#2c3e50] p-10 rounded-[3rem] shadow-2xl border-4 border-[#3498db] text-white relative overflow-hidden flex flex-col scale-105">
              <div className="absolute top-6 right-6 bg-[#3498db] text-white text-[10px] font-black px-3 py-1 rounded-full uppercase tracking-widest">Recomendado</div>
              <div className="mb-8">
                <h3 className="text-2xl font-black mb-2 uppercase">Plano Premium</h3>
                <p className="text-gray-400">Acesso Completo + Bônus</p>
              </div>
              <div className="mb-8">
                <div className="text-sm font-bold text-gray-400 line-through">R$ 97,00</div>
                <div className="text-6xl font-black text-[#3498db]">R$ 19,90</div>
                <div className="text-sm font-bold text-[#3498db]">Pagamento Único</div>
              </div>
              <ul className="space-y-4 mb-10 flex-grow">
                <li className="flex items-center gap-2 font-bold"><CheckCircle2 size={18} className="text-[#3498db]" /> Acesso Vitalício</li>
                <li className="flex items-center gap-2 font-bold"><CheckCircle2 size={18} className="text-[#3498db]" /> Todos os Bônus Inclusos</li>
                <li className="flex items-center gap-2 font-bold"><CheckCircle2 size={18} className="text-[#3498db]" /> Suporte VIP WhatsApp</li>
                <li className="flex items-center gap-2 font-bold"><CheckCircle2 size={18} className="text-[#3498db]" /> Atualizações Grátis</li>
              </ul>
              {CTA_BUTTON("Garantir Plano Premium", () => redirectToCheckout("premium"))}
            </div>
          </div>
        </div>
      </section>

      {/* DEPOIMENTOS */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-black mb-4">O que dizem nossos alunos</h2>
            <div className="flex justify-center gap-1 text-[#f1c40f]">
              {[...Array(5)].map((_, i) => <Star key={i} fill="currentColor" size={24} />)}
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Pr. Ricardo Silva",
                church: "Igreja Batista Renovada",
                text: "O pack mudou completamente a cara do nosso Instagram. Hoje temos uma comunicação que condiz com a excelência do nosso ministério."
              },
              {
                name: "Ana Cláudia",
                church: "Líder de Mídia AD",
                text: "Eu não sabia nada de design. Com as aulas e os modelos prontos, consigo fazer artes lindas em minutos pelo meu celular."
              },
              {
                name: "Marcos Oliveira",
                church: "Comunidade Cristã",
                text: "O melhor investimento que fizemos este ano. Economizamos muito com designer e temos artes muito mais modernas agora."
              }
            ].map((dep, i) => (
              <div key={i} className="bg-[#f8fbff] p-8 rounded-[2.5rem] shadow-lg border border-gray-100 relative">
                <div className="absolute -top-4 left-8 text-6xl text-[#3498db] opacity-20 font-serif">“</div>
                <p className="text-gray-600 italic mb-8 relative z-10 leading-relaxed">
                  {dep.text}
                </p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-[#3498db] rounded-full flex items-center justify-center text-white font-bold">
                    {dep.name[0]}
                  </div>
                  <div>
                    <div className="font-bold text-[#2c3e50]">{dep.name}</div>
                    <div className="text-xs text-gray-400 font-bold uppercase tracking-wider">{dep.church}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#1a252f] text-white py-20 px-4">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="flex items-center gap-2 mb-6">
              <Church className="text-[#3498db]" size={32} />
              <span className="text-2xl font-black uppercase tracking-tighter italic">Pack de Artes</span>
            </div>
            <p className="text-gray-400 mb-8 max-w-md">
              Nossa missão é capacitar igrejas e ministérios a comunicarem a mensagem do Reino with excelência visual e agilidade.
            </p>
            <div className="text-sm text-gray-500">
              © 2025 Pack de Artes para Igreja. Todos os direitos reservados.
            </div>
          </div>
          <div className="bg-white/5 p-8 rounded-3xl border border-white/10">
            <h4 className="text-xl font-bold mb-4">Precisa de suporte?</h4>
            <p className="text-gray-400 mb-6">Nossa equipe está pronta para te ajudar com qualquer dúvida sobre o pack.</p>
            <a href="mailto:suporte@artesparaigreja.com.br" className="flex items-center gap-3 text-[#3498db] font-bold text-lg hover:underline">
              <Mail size={20} /> suporte@artesparaigreja.com.br
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
