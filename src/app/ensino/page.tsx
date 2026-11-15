import { PageShell } from "@/components/layout/PageShell";
import { ExternalLink } from "@/components/ui/ExternalLink";
import { PAGE_SOURCES } from "@/content/pageSources";
import { pageTitle } from "@/lib/metadata";

export const metadata = pageTitle("Ensino");

export default function EnsinoPage() {
  return (
    <PageShell
      title="Ensino"
      lead="Monitoria, estágio, intercâmbio e rotina acadêmica."
      source={PAGE_SOURCES.ensino}
      sourceDate="13/11/2026"
    >
      <h2>Monitoria</h2>
      <ol>
        <li>Portal Unimontes → Pró-Reitoria de Ensino → Documentos e Normas → Orientações para Monitoria.</li>
        <li>Leia as Normas Gerais e documentos (plano, termo, ficha, relatório).</li>
        <li>Pergunte à coordenação e aos professores quais disciplinas abrirão seleção.</li>
        <li>Acompanhe editais — confirme se a vaga é remunerada ou voluntária.</li>
      </ol>

      <h2>Estágios e práticas</h2>
      <p>
        O Catálogo Telefônico identifica no Departamento de Ciências da Administração a Sala de
        Estágios (ramal 8253). O catálogo geral também relaciona a área de Convênios e Estágios da
        Pró-Reitoria de Ensino. O estágio curricular deve observar o PPC, normas acadêmicas e
        legislação aplicável.
      </p>
      <p>
        No curso de Gestão Pública o PPC indica estágio <strong>não obrigatório</strong>; mesmo assim,
        confirme reconhecimento de atividades com a coordenação.
      </p>
      <ol>
        <li>Pergunte à coordenação se o estágio é obrigatório no currículo vigente, em que período ocorre e quais atividades podem ser reconhecidas.</li>
        <li>Procure a Sala de Estágios do Departamento de Ciências da Administração e confirme procedimentos, modelos e responsáveis.</li>
        <li>Antes de iniciar, confirme convênio, plano de atividades, termo de compromisso, seguro e assinaturas.</li>
        <li>Não comece estágio formal contando apenas com autorização verbal.</li>
      </ol>

      <h2>Intercâmbio, eventos e formação complementar</h2>
      <p>
        A Pró-Reitoria de Ensino mantém referência ao Núcleo de Intercâmbio e à Coordenadoria de
        Graduação no catálogo institucional. Editais e chamadas podem oferecer participação em
        atividades, disciplinas, eventos ou experiências acadêmicas. A existência de um setor não
        significa seleção aberta — confirme em edital ou comunicado.
      </p>
      <ul>
        <li>Portal: Pró-Reitoria de Ensino, Editais e Notícias.</li>
        <li>Catálogo telefônico: ramais de Convênios e Estágios e Núcleo de Intercâmbio.</li>
        <li>
          Pergunte à coordenação se atividades externas podem ser aproveitadas como atividade
          acadêmica complementar, observadas as regras do curso.
        </li>
      </ul>

      <h2>Calendário e matrícula</h2>
      <ul>
        <li>
          <ExternalLink href="https://secretariageral.unimontes.br/">
            Secretaria Geral
          </ExternalLink>{" "}
          — solicitações, normas e calendário.
        </li>
        <li>
          <ExternalLink href="http://www.webgiz.unimontes.br/">WebGiz</ExternalLink> — frequência,
          notas, matrícula, coeficiente, renovação semestral. Não compartilhe sua senha; em caso de
          instruções divergentes, prevalece a orientação publicada pela Universidade.
        </li>
      </ul>
    </PageShell>
  );
}