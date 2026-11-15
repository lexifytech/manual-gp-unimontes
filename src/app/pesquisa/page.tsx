import { PageShell } from "@/components/layout/PageShell";
import { ExternalLink } from "@/components/ui/ExternalLink";
import { iniciacaoModalidades } from "@/content/manualMeta";
import { PAGE_SOURCES } from "@/content/pageSources";
import { pageTitle } from "@/lib/metadata";

export const metadata = pageTitle("Pesquisa");

export default function PesquisaPage() {
  const mod = iniciacaoModalidades;
  return (
    <PageShell
      title="Pesquisa"
      lead="Iniciação científica, grupos, inovação e divulgação científica."
      source={PAGE_SOURCES.pesquisa}
      sourceDate="13/11/2026"
    >
      <h2>Pró-Reitoria de Pesquisa (PRP)</h2>
      <p>
        Planejamento, financiamento, iniciação científica e divulgação. Localização usual: Prédio
        5, 2º andar (confirmar atendimento).
      </p>

      <h2>Iniciação científica — modalidades</h2>
      <p>{mod.intro}</p>
      <ul>
        <li>{mod.icv}</li>
        <li>{mod.pibic}</li>
        <li>{mod.bicCampi}</li>
      </ul>

      <h2>Roteiro com orientador</h2>
      <ol>
        <li>Defina tema de Gestão Pública investigável (ex.: transparência, avaliação de política).</li>
        <li>Identifique docentes e projetos no CCSA/Administração.</li>
        <li>Leve proposta curta: problema, objetivo, método e fontes.</li>
        <li>Pergunte sobre projeto institucionalizado, vaga ou edital em preparação.</li>
      </ol>

      <h2>GEPAD</h2>
      <p>
        Grupo de Estudos e Pesquisas em Administração — Resolução CEPEX nº 14/2002. Ramal{" "}
        <strong>(38) 3229-8255</strong> ·{" "}
        <ExternalLink href="https://www.gepad.unimontes.br/">gepad.unimontes.br</ExternalLink>
      </p>
      <p>
        Local publicado: Prédio 1, 3º piso, salas 307/309. Para ingressar como discente: apresente
        nome, período, e-mail, telefone e disponibilidade.
      </p>

      <h2>CCAP e inovação</h2>
      <p>
        Projetos passam pela Coordenadoria de Controle e Acompanhamento de Projetos de Pesquisa e
        Inovação (CCAP), na estrutura da PRP. A PRP também apresenta a Coordenadoria de Inovação
        Tecnológica e a Incubadora de Empresas de Base Tecnológica da Unimontes (Inemontes). Embora
        a incubadora não seja exclusiva de Gestão Pública, pode ser relevante a estudantes
        interessados em inovação, empreendedorismo, soluções para problemas públicos e
        desenvolvimento de projetos.
      </p>

      <h2>FEPEG e publicação</h2>
      <p>
        Fórum anual de Ensino, Pesquisa, Extensão e Gestão — acompanhe chamadas de resumo e
        certificação. Portal de Periódicos e Editora Unimontes para normas editoriais.
      </p>

      <h2>Ética em pesquisa</h2>
      <p>
        Projetos que envolvam participantes humanos, dados pessoais identificáveis, animais ou
        procedimentos específicos podem exigir avaliação ética e/ou autorizações institucionais. A
        PRP mantém referências ao Comitê de Ética em Pesquisa, à comissão de ética no uso de animais
        e à biossegurança. Não inicie coleta de dados sensíveis ou intervenção com participantes antes
        de confirmar as exigências com o orientador e o comitê competente.
      </p>
    </PageShell>
  );
}