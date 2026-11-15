import type { FacultyMember } from "./types";

/** Coordenação do curso — Manual Gestão Pública / Secretaria Geral */
export const courseCoordination: FacultyMember[] = [
  {
    name: "Profa. Françoise de Fátima Barbosa",
    role: "Coordenação do curso de Tecnologia em Gestão Pública",
    email: "curso.gestaopublica@unimontes.br",
    location: "Prédio 1 — sala 214, 2º andar",
    courseCoordination: true,
    notes: "Instagram: gestaopublica.unimontes",
  },
  {
    name: "Profa. June Marize Castro Silva",
    role: "Orientadora do projeto de intervenção / coordenação de estágios (GEPAD)",
    email: "june.silva@unimontes.br",
    location: "Departamento de Ciências da Administração",
    lattes: "http://lattes.cnpq.br/8924302379485509",
  },
  {
    name: "Profa. Claudiana Leal de Araujo",
    role: "Direção do CCSA",
    email: "dir.ccsa@unimontes.br",
    phone: "(38) 3229-8250",
    location: "CCSA — Prédio 1",
  },
];

/**
 * Corpo docente do Departamento de Ciências da Administração.
 * Fonte: página institucional do curso de Administração (Google Sites Unimontes) e GEPAD.
 * Não é lista exclusiva de docentes de Gestão Pública.
 */
export const administrationFaculty: FacultyMember[] = [
  { name: "Alcino Franco de Moura Júnior", bond: "Convocado", email: "alcino.moura@unimontes.br", lattes: "http://lattes.cnpq.br/7947733583131601" },
  { name: "Christine Veloso Barbosa Araujo", bond: "Convocado", email: "christine.araujo@unimontes.br", lattes: "http://lattes.cnpq.br/6797702584312296" },
  { name: "Prof. Dr. Cledinaldo Aparecido Dias", bond: "Efetivo", email: "cledinaldo.dias@unimontes.br", lattes: "http://lattes.cnpq.br/6384719963302649", role: "Coordenador GEPAD", location: "GEPAD — Prédio 1, 3º piso" },
  { name: "Eustáquio R. Versiani Júnior", bond: "Convocado", email: "eustaquio.junior@unimontes.br", lattes: "http://lattes.cnpq.br/8159868240237911" },
  { name: "Prof. Dr. Felipe Fróes Couto", bond: "Efetivo", email: "felipe.couto@unimontes.br", lattes: "http://lattes.cnpq.br/1542783014894190" },
  { name: "Fernando Etiene P. Teixeira Junior", bond: "Efetivo", email: "fernando.teixeira@unimontes.br", lattes: "http://lattes.cnpq.br/4064040101213219" },
  { name: "Frederico Augusto Malta Ribeiro", bond: "Efetivo", email: "frederico.ribeiro@unimontes.br", lattes: "http://lattes.cnpq.br/1535901263651177" },
  { name: "Frederico Bida de Oliveira", bond: "Convocado", email: "fred@unimontes.br", lattes: "http://lattes.cnpq.br/8794993526041092" },
  { name: "Glauco Ricardo Simões Gomes", bond: "Convocado", email: "glauco.gomes@unimontes.br", lattes: "http://lattes.cnpq.br/3531131705016174" },
  { name: "Heraclides Veloso Marques", bond: "Convocado", email: "heraclides.marques@unimontes.br", lattes: "http://lattes.cnpq.br/6693733161818301" },
  { name: "Isabela Ladeia Santos", bond: "Convocado", email: "isabela.santos@unimontes.br", lattes: "http://lattes.cnpq.br/5064976521820676" },
  { name: "João Guilherme M. Timotio", bond: "Convocado", email: "joao.timotio@unimontes.br", lattes: "http://lattes.cnpq.br/3427283166062684" },
  { name: "Prof.ª Dra. June Marize Castro Silva", bond: "Efetiva", email: "june.silva@unimontes.br", lattes: "http://lattes.cnpq.br/8924302379485509", role: "Coordenação de estágios" },
  { name: "Prof. Dr. Juventino Ruas de Abreu Junior", bond: "Efetivo", email: "juventino.abreu@unimontes.br", lattes: "http://lattes.cnpq.br/6072969520381275" },
  { name: "Karine Gomes dos Santos", bond: "Convocado", email: "karine.santos@unimontes.br", lattes: "http://lattes.cnpq.br/7118035402947902" },
  { name: "Prof.ª Dra. Karla Veloso Coura", bond: "Efetiva", email: "karla.coura@unimontes.br", lattes: "http://lattes.cnpq.br/0661302027220627" },
  { name: "Leandro Gonçalves Cristovam", bond: "Convocado", email: "leandro.cristovam@unimontes.br", lattes: "http://lattes.cnpq.br/4454439123227578" },
  { name: "Marcelo Caetano de R. Melo", bond: "Convocado", email: "marcelo.melo@unimontes.br", lattes: "http://lattes.cnpq.br/3416916179383609" },
  { name: "Prof. Dr. Marcelo Vieira Lopes", bond: "Efetivo", email: "marcelo.lopes@unimontes.br", lattes: "http://lattes.cnpq.br/9972551669216758" },
  { name: "Prof. Dr. Márcio Antônio Alves Veloso", bond: "Efetivo", email: "marcio.veloso@unimontes.br", lattes: "http://lattes.cnpq.br/8467401080600604" },
  { name: "Maria de Fátima Vieira", bond: "Convocado", email: "mariaf.vieira@unimontes.br", lattes: "http://lattes.cnpq.br/2763873550024699" },
  { name: "Naiara Vieira Silva Ivo", bond: "Efetiva", email: "naiara.ivo@unimontes.br", lattes: "http://lattes.cnpq.br/6452790792258109" },
  { name: "Prof. Dr. Narciso Ferreira dos Santos Neto", bond: "Efetivo", email: "narciso.ferreira@unimontes.br", lattes: "http://lattes.cnpq.br/5703335372799074" },
  { name: "Prof. Dr. Pablo Perón de Paula", bond: "Efetivo", email: "pablo.peron@unimontes.br", lattes: "http://lattes.cnpq.br/5687020466210094" },
  { name: "Ramon Alves de Oliveira", bond: "Convocado", email: "ramon.oliveira@unimontes.br", lattes: "http://lattes.cnpq.br/3101875204466551" },
  { name: "Prof. Ms. Roberto César Faria e Silva", bond: "Efetivo", email: "roberto.silva@unimontes.br", lattes: "http://lattes.cnpq.br/3347281641969300" },
  { name: "Prof. Ms. Rogério Martins Furtado de Souza", bond: "Efetivo", email: "rogerio.furtado@unimontes.br", lattes: "http://lattes.cnpq.br/2192199492394613" },
  { name: "Prof. Dr. Roney Versiani Sindeaux", bond: "Efetivo", email: "roney.sindeaux@unimontes.br", lattes: "http://lattes.cnpq.br/3738128368255348" },
  { name: "Prof.ª Dra. Simarly Maria Soares", bond: "Efetiva", email: "simarly.soares@unimontes.br", lattes: "http://lattes.cnpq.br/6463072618583166", role: "Chefe de departamento" },
  { name: "Prof.ª Dra. Simone Gelmini Araújo", bond: "Efetiva", email: "simone.gelmini@unimontes.br", lattes: "http://lattes.cnpq.br/4909761295312765" },
  { name: "Wanderklayson A. M. de Oliveira", bond: "Convocado", email: "wanderklayson.oliveira@unimontes.br", lattes: "http://lattes.cnpq.br/8072462713188902" },
  { name: "Wilian Toneli da Silva", bond: "Convocado", email: "wilian.silva@unimontes.br", lattes: "http://lattes.cnpq.br/4596494308601937" },
];