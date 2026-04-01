"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function Home() {
  const whatsappLink =
    "https://wa.me/5511971802678?text=Olá,%20quero%20um%20diagnóstico%20gratuito%20de%20dados";

  return (
    <div className="bg-[#020617] text-white min-h-screen">

      {/* HEADER */}
      <header className="sticky top-0 z-50 backdrop-blur-xl bg-[#020617]/80 border-b border-white/10">
        <div className="max-w-7xl mx-auto flex justify-between items-center px-6 md:px-10 py-4">

          {/* LOGO FORTE */}
          <div className="flex items-center gap-4">

            <div className="bg-white/5 p-2 rounded-xl">
              <Image
                src="/logo.png"
                alt="WA Data Solutions Logo"
                width={260}
                height={100}
                className="h-16 md:h-20 w-auto"
                priority
              />
            </div>

            <span className="hidden md:block font-semibold text-2xl tracking-wide">
              WA <span className="text-green-400">DATA</span>
            </span>

          </div>

          {/* CTA */}
          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gradient-to-r from-green-400 to-emerald-500 text-black px-6 py-3 rounded-xl font-semibold hover:scale-105 transition shadow-lg"
          >
            Falar com especialista
          </a>

        </div>
      </header>

      {/* WHATSAPP FLOAT */}
      <a
        href={whatsappLink}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 bg-green-500 p-4 rounded-full shadow-xl hover:scale-110 transition z-50"
      >
        💬
      </a>

      {/* HERO */}
      <section className="text-center py-32 px-6 relative overflow-hidden">

        <div className="absolute inset-0 bg-gradient-to-r from-green-500/10 via-cyan-500/10 to-transparent blur-3xl"></div>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          className="relative text-4xl md:text-6xl font-bold mb-6 leading-tight"
        >
          Pare de perder dinheiro com dados bagunçados
        </motion.h1>

        <p className="relative text-lg text-slate-300 max-w-2xl mx-auto">
          Estruturamos seus dados, eliminamos retrabalho e criamos dashboards que realmente ajudam você a crescer.
        </p>

        <div className="mt-10 relative">
          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gradient-to-r from-green-400 to-emerald-500 text-black px-10 py-5 rounded-2xl font-semibold text-lg shadow-xl hover:scale-105 transition"
          >
            Quero meu diagnóstico gratuito 🚀
          </a>

          {/* URGÊNCIA */}
          <p className="text-sm text-green-400 mt-4">
            🔥 Diagnóstico gratuito por tempo limitado
          </p>
        </div>

      </section>

      {/* PROVA SOCIAL */}
      <section className="py-12 text-center">
        <p className="text-slate-400">
          +10 projetos entregues • +80% ganho de eficiência • redução de custos reais
        </p>
      </section>

      {/* PROBLEMA */}
      <section className="py-20 px-6 text-center">
        <h2 className="text-3xl font-semibold mb-10">
          Se você se identifica com isso…
        </h2>

        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {[
            "Planilhas espalhadas e sem controle",
            "Relatórios inconsistentes",
            "Tempo perdido consolidando dados"
          ].map((item, i) => (
            <div key={i} className="bg-white/5 p-6 rounded-xl border border-white/10">
              {item}
            </div>
          ))}
        </div>
      </section>

      {/* SERVIÇOS */}
      <section className="py-20 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-semibold mb-12 text-center">
          O que fazemos
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              title: "Engenharia de Dados",
              desc: "Pipelines robustos e integração de sistemas"
            },
            {
              title: "Business Intelligence",
              desc: "Dashboards estratégicos para decisão"
            },
            {
              title: "Cloud & Arquitetura",
              desc: "Infraestrutura escalável e moderna"
            }
          ].map((item, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.05 }}
              className="bg-white/5 p-8 rounded-2xl border border-white/10 hover:border-green-400/30 transition"
            >
              <h3 className="text-xl font-bold mb-3">{item.title}</h3>
              <p className="text-slate-400">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* PROCESSO */}
      <section className="py-24 px-6 text-center bg-white/5">
        <h2 className="text-3xl font-semibold mb-10">Como funciona</h2>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {[
            "Diagnóstico do cenário atual",
            "Desenho da solução ideal",
            "Implementação e entrega"
          ].map((step, i) => (
            <div key={i} className="bg-[#020617] p-6 rounded-xl border border-white/10">
              {step}
            </div>
          ))}
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="py-28 text-center">
        <h2 className="text-3xl font-semibold mb-6">
          Vamos estruturar seus dados?
        </h2>

        <a
          href={whatsappLink}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-gradient-to-r from-green-400 to-emerald-500 text-black px-10 py-5 rounded-2xl font-semibold text-lg shadow-xl hover:scale-105 transition"
        >
          Falar com especialista 🚀
        </a>
      </section>

    </div>
  );
}

