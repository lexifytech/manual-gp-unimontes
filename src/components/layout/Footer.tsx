import Link from "next/link";

export function Footer() {
  return (
    <footer className="mt-auto border-t border-uni-border bg-uni-blue-dark text-white">
      <div className="max-w-6xl mx-auto px-4 py-8 grid gap-6 md:grid-cols-2">
        <div>
          <p className="font-semibold text-lg mb-2">
            Campus Universitário Professor Darcy Ribeiro
          </p>
          <p className="text-white/85 text-sm leading-relaxed">
            Av. Dr. Rui Braga, s/n — Vila Mauricéia
            <br />
            Montes Claros/MG — CEP 39401-089
            <br />
            Tel.: (38) 3229-8000 · Atendimento 8h às 17h
          </p>
        </div>
        <div className="text-sm text-white/85">
          <p className="font-medium text-white mb-2">Aviso importante</p>
          <p className="leading-relaxed">
            Este manual não substitui editais, regulamentos, calendários ou orientações da
            coordenação. Confirme prazos, valores e responsáveis nos canais oficiais antes de
            se inscrever.
          </p>
          <p className="mt-3">
            <Link href="/sugestoes/" className="underline hover:text-white">
              Sugerir melhoria
            </Link>
            {" · "}
            <Link href="/fontes/" className="underline hover:text-white">
              Ver fontes consultadas
            </Link>
            {" · "}
            <Link
              href="https://unimontes.br/editais/"
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:text-white"
            >
              Editais vigentes
            </Link>
          </p>
        </div>
      </div>
      <div className="bg-black/20 text-center text-xs py-3 text-white/70">
        Projeto de intervenção — Curso de Tecnologia em Gestão Pública — UNIMONTES
      </div>
    </footer>
  );
}