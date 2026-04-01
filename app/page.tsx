"use client";

import { motion } from "framer-motion";

export default function Home() {

  const whatsappLink =
    "https://wa.me/5511971802678?text=Olá,%20quero%20falar%20sobre%20engenharia%20de%20dados";

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
          Transforme dados em decisões estratégicas
        </motion.h1>

        <p className="text-lg text-slate-300 max-w-2xl mx-auto">
          Engenharia de Dados, BI e Cloud para empresas que querem escalar com inteligência
        </p>

        <div className="mt-10">
          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gradient-to-r from-sky-400 to-cyan-300 text-slate-900 px-10 py-5 rounded-2xl font-semibold text-lg shadow-lg hover:scale-105 transition"
          >
            Falar no WhatsApp
          </a>
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

      {/* AUTORIDADE */}
      <section className="py-24 px-6 text-center">
        <h2 className="text-3xl font-semibold mb-6">Resultados</h2>

        <div className="flex flex-col md:flex-row gap-8 justify-center">
          <div>
            <h3 className="text-4xl font-bold text-sky-400">+80%</h3>
            <p>Ganho de performance</p>
          </div>
          <div>
            <h3 className="text-4xl font-bold text-sky-400">-40%</h3>
            <p>Redução de custo</p>
          </div>
          <div>
            <h3 className="text-4xl font-bold text-sky-400">100%</h3>
            <p>Decisões baseadas em dados</p>
          </div>
        </div>
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
          className="bg-gradient-to-r from-sky-400 to-cyan-300 text-slate-900 px-10 py-5 rounded-2xl font-semibold text-lg shadow-lg hover:scale-105 transition"
        >
          Falar no WhatsApp
        </a>
      </section>

    </div>
  );
}