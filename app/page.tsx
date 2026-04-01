"use client";

import { motion } from "framer-motion";

export default function Home() {

  const whatsappLink =
    "https://wa.me/5511971802678?text=Olá,%20quero%20um%20diagnóstico%20gratuito%20de%20dados";

  return (
    <div className="bg-slate-950 text-white min-h-screen">

      {/* WHATSAPP FLOAT */}
      <a
        href={whatsappLink}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 bg-green-500 p-4 rounded-full shadow-lg hover:scale-110 transition z-50"
      >
        💬
      </a>

      {/* HERO */}
      <section className="text-center py-28 px-6">
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-5xl md:text-6xl font-bold mb-6"
        >
          Organize seus dados, elimine retrabalho e tome decisões com confiança
        </motion.h1>

        <p className="text-lg text-slate-300 max-w-2xl mx-auto">
          Ajudo empresas a sair do caos de planilhas e construir uma estrutura de dados escalável com BI, pipelines e cloud
        </p>

        <div className="mt-10">
          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-green-500 text-black px-10 py-5 rounded-2xl font-semibold text-lg shadow-lg hover:scale-105 transition"
          >
            Quero meu diagnóstico 🚀
          </a>
        </div>
      </section>

      {/* PARA QUEM É */}
      <section className="py-20 px-6 text-center">
        <h2 className="text-3xl font-semibold mb-10">Para quem é</h2>

        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {[
            "Empresas com dados espalhados em planilhas",
            "Negócios que não confiam nos relatórios",
            "Times que perdem tempo consolidando dados manualmente"
          ].map((item, i) => (
            <div key={i} className="bg-slate-900 p-6 rounded-xl">
              {item}
            </div>
          ))}
        </div>
      </section>

      {/* SERVIÇOS */}
      <section className="py-20 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-semibold mb-12 text-center">Serviços</h2>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              title: "Engenharia de Dados",
              desc: "Pipelines, ETL e integração de sistemas"
            },
            {
              title: "Business Intelligence",
              desc: "Dashboards estratégicos e KPIs"
            },
            {
              title: "Cloud & Arquitetura",
              desc: "Soluções escaláveis em cloud"
            }
          ].map((item, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.05 }}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="bg-slate-900 p-8 rounded-2xl shadow-xl border border-slate-800"
            >
              <h3 className="text-xl font-bold mb-3">{item.title}</h3>
              <p className="text-slate-400">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* COMO FUNCIONA */}
      <section className="py-24 px-6 bg-slate-900 text-center">
        <h2 className="text-3xl font-semibold mb-10">Como funciona</h2>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {[
            "Diagnóstico do seu cenário atual",
            "Desenho da arquitetura ideal",
            "Implementação e entrega de valor"
          ].map((step, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              className="bg-slate-800 p-6 rounded-xl"
            >
              <p>{step}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* RESULTADOS */}
      <section className="py-24 px-6 text-center">
        <h2 className="text-3xl font-semibold mb-6">Resultados</h2>

        <div className="flex flex-col md:flex-row gap-8 justify-center">
          <div>
            <h3 className="text-4xl font-bold text-green-400">+80%</h3>
            <p>Ganho de performance</p>
          </div>
          <div>
            <h3 className="text-4xl font-bold text-green-400">-40%</h3>
            <p>Redução de custo</p>
          </div>
          <div>
            <h3 className="text-4xl font-bold text-green-400">100%</h3>
            <p>Decisões baseadas em dados</p>
          </div>
        </div>
      </section>

      {/* OFERTA */}
      <section className="py-24 text-center bg-slate-900">
        <h2 className="text-3xl font-semibold mb-6">
          Diagnóstico gratuito de dados
        </h2>

        <p className="text-slate-300 max-w-xl mx-auto mb-8">
          Em uma conversa rápida, identifico os principais problemas da sua estrutura
          de dados e mostro como resolver.
        </p>

        <a
          href={whatsappLink}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-green-500 px-8 py-4 rounded-xl font-semibold text-black"
        >
          Quero meu diagnóstico 🚀
        </a>
      </section>

      {/* CTA FINAL */}
      <section className="py-28 text-center">
        <h2 className="text-3xl font-semibold mb-6">
          Pronto para escalar seus dados?
        </h2>

        <a
          href={whatsappLink}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-green-500 px-10 py-5 rounded-2xl font-semibold text-lg text-black shadow-lg hover:scale-105 transition"
        >
          Quero meu diagnóstico 🚀
        </a>
      </section>

    </div>
  );
}