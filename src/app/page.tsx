import Image from "next/image";
import Link from "next/link";
import { Card } from "@/components/ui/Card";
import { ContactChip } from "@/components/ui/ContactChip";
import { quickLinks } from "@/lib/navigation";

export default function HomePage() {
  return (
    <main className="max-w-6xl mx-auto px-4 py-10">
      <section className="rounded-2xl bg-uni-green text-white p-8 md:p-10 shadow-lg mb-10">
        <p className="text-uni-gold font-semibold text-sm uppercase tracking-wide">
          Tecnologia em Gestão Pública · UNIMONTES
        </p>
        <h1 className="text-3xl md:text-4xl font-bold mt-2 mb-4">
          Manual de orientação acadêmica
        </h1>
        <p className="text-white/90 max-w-2xl text-lg leading-relaxed">
          Caminhos práticos para pesquisa, ensino, extensão, serviços e vida no campus — com
          setores responsáveis, contatos e links oficiais. Conteúdo baseado no portal Unimontes,
          editais e páginas dos setores (referência nov/2026).
        </p>
        <div className="flex flex-wrap gap-3 mt-6">
          <ContactChip type="phone" value="(38) 3229-8265" label="Coordenação" />
          <ContactChip type="email" value="curso.gestaopublica@unimontes.br" />
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-xl font-bold text-uni-green-dark mb-4">Acesso rápido</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {quickLinks.map((q) =>
            q.href.startsWith("http") ? (
              <a
                key={q.href}
                href={q.href}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-xl border border-uni-border bg-white p-4 hover:border-uni-green text-uni-green-dark font-semibold text-sm"
              >
                {q.label} ↗
              </a>
            ) : (
              <Link
                key={q.href}
                href={q.href}
                className="rounded-xl border border-uni-border bg-white p-4 hover:border-uni-green text-uni-green-dark font-semibold text-sm"
              >
                {q.label}
              </Link>
            ),
          )}
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-xl font-bold text-uni-green-dark mb-4">Explore o manual</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          <Card href="/oportunidades/" title="Oportunidades" description="Editais, bolsas, monitoria, PEAES e extensão." icon="📋" />
          <Card href="/caminhos/" title="Qual setor procurar?" description="Mapa de decisão: começo por onde e o que perguntar." icon="🧭" />
          <Card href="/campus/" title="Campus e mapas" description="Prédios, CCSA, biblioteca, RU e deslocamento." icon="🗺️" />
          <Card href="/matriz/" title="Matriz curricular" description="Disciplinas por período, EAD e carga horária." icon="📚" />
          <Card href="/pesquisa/" title="Pesquisa" description="GEPAD, iniciação científica e eventos." icon="🔬" />
          <Card href="/primeiros-30-dias/" title="Primeiros 30 dias" description="Checklist para ingressantes." icon="✅" />
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-xl font-bold text-uni-green-dark mb-2">Por que este manual?</h2>
        <p className="text-uni-muted text-sm mb-6 max-w-3xl">
          Pesquisa com 27 acadêmicos do curso (2026) indicou dificuldade em encontrar informações
          sobre oportunidades, estrutura do campus e serviços. Os gráficos abaixo sintetizam os
          resultados — sem identificar respondentes.
        </p>
        <div className="grid md:grid-cols-2 gap-4 mb-4">
          {["WhatsApp-Image-2026-11-13-at-18.35.27-(1).jpeg", "WhatsApp-Image-2026-11-13-at-18.35.26.jpeg"].map(
            (file) => (
              <figure key={file} className="rounded-lg border border-uni-border bg-white p-3">
                <Image
                  src={`/research/${file}`}
                  alt="Gráfico de pesquisa com acadêmicos sobre acesso à informação na universidade"
                  width={800}
                  height={500}
                  className="w-full h-auto rounded"
                />
              </figure>
            ),
          )}
        </div>
        <Link
          href="/diagnostico/"
          className="inline-block text-uni-link font-semibold underline"
        >
          Ver todos os gráficos e o diagnóstico do projeto
        </Link>
      </section>

      <p className="text-sm text-uni-muted border-t border-uni-border pt-6">
        Projeto de intervenção sob orientação da Profa. June Marize Castro Silva.{" "}
        <Link href="/sobre/" className="underline text-uni-link">
          Sobre o manual
        </Link>
        {" · "}
        <Link href="/fontes/" className="underline text-uni-link">
          Fontes oficiais
        </Link>
      </p>
    </main>
  );
}