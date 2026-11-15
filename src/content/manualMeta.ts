/** Textos extraídos dos manuais em docs/ — não alterar sem conferir a fonte. */

export const presentationOportunidades = [
  "Este manual reúne caminhos práticos para que o acadêmico de Tecnologia em Gestão Pública conheça, localize e utilize as oportunidades acadêmicas e os serviços oferecidos pela Universidade Estadual de Montes Claros (Unimontes). O foco é o campus-sede de Montes Claros, sem deixar de indicar canais institucionais que também atendem os demais campi.",
  "O material foi construído prioritariamente a partir de páginas, editais, catálogos e documentos publicados pela própria Unimontes. Ele não substitui editais, regulamentos, calendários, orientações da coordenação ou decisões dos setores responsáveis. Horários, preços, contatos, responsáveis e critérios podem mudar.",
  "Uma orientação importante: não basta conhecer o nome de um programa. O estudante precisa saber onde localizar a informação, quem procurar, quais documentos preparar, como acompanhar prazos e como comprovar sua participação. Por isso, cada eixo apresenta o caminho institucional e um roteiro de ação.",
];

export const comoUsarManual = [
  "Comece pela coordenação do curso e pela Secretaria Geral: são os pontos de orientação acadêmica mais próximos.",
  "Consulte o portal oficial e a página de Editais semanalmente. O edital vigente é sempre a referência para requisitos, prazos, documentos e seleção.",
  "Antes de se deslocar, confirme por telefone ou e-mail o horário, o local e se o atendimento exige agendamento.",
  "Guarde comprovantes de inscrição, protocolos, e-mails, termos de compromisso, certificados e relatórios.",
  "Quando a informação não estiver publicada, solicite orientação formal ao setor responsável e peça indicação do regulamento ou procedimento aplicável.",
];

export const cursoIdentificacao = {
  profile:
    "O curso de Tecnologia em Gestão Pública é presencial, tem duração indicada de quatro semestres e está vinculado ao Centro de Ciências Sociais Aplicadas (CCSA), no campus-sede. A página oficial apresenta 35 vagas semestrais e informa como endereço acadêmico o CCSA. O curso tem perfil voltado à formação para planejamento, implantação e gerenciamento de programas e projetos de políticas públicas.",
  vagasNota:
    "35 vagas semestrais conforme página oficial do curso (consulta 13/11/2026). Confirme oferta e turno no portal ou na coordenação.",
};

export type ContactUnit = {
  unit: string;
  info: string;
  use: string;
};

export const contactUnits: ContactUnit[] = [
  {
    unit: "CCSA – Centro de Ciências Sociais Aplicadas",
    info: "Prédio 1 – Campus Sede; funcionamento informado: 7h às 22h. Recepção: (38) 3229-8250; direção: (38) 3229-8251.",
    use: "Localize a coordenação, chefia departamental e espaços do curso.",
  },
  {
    unit: "Coordenação de Gestão Pública",
    info: "Telefone: (38) 3229-8265. Página do curso informa coord.gestaopublica@unimontes.br.",
    use: "Dúvidas sobre percurso formativo, atividades, projetos, orientação e encaminhamentos.",
  },
  {
    unit: "Secretaria Geral – Gestão Pública",
    info: "secretaria.gestaopublica@unimontes.br; ramal publicado: (38) 3229-8048. Horários divulgados na página variam por dia.",
    use: "Registro acadêmico, matrícula, dados, notas, frequência e documentos.",
  },
  {
    unit: "Departamento de Ciências da Administração",
    info: "Catálogo telefônico: coordenação/chefia (38) 3229-8252; Empresa Júnior (38) 3229-8254; GEPAD (38) 3229-8255; Sala de Estágios (38) 3229-8253.",
    use: "Buscar grupos, estágio, projetos e oportunidades ligadas à Administração.",
  },
];

export const portalSteps = [
  "Acesse https://unimontes.br/.",
  'Abra o menu "Unidades" ou utilize a busca do próprio portal e selecione "Centro de Ciências Sociais Aplicadas (CCSA)".',
  'Na página do CCSA, localize "Tecnologia em Gestão Pública" e entre em "Ver mais".',
  "Na página do curso, confira contato, duração, estrutura curricular, endereço e documentos disponíveis.",
  'Para assuntos de registro acadêmico, abra "Secretaria Geral" > "Fale com a Secretaria" e procure o bloco "Tecnologia em Gestão Pública".',
  "Se a dúvida envolver oportunidade acadêmica, encaminhe também à coordenação e pergunte qual professor ou setor coordena a atividade.",
];

export const extensaoTemasGestaoPublica = [
  "Oficinas sobre acesso à informação, transparência e participação em conselhos municipais.",
  "Educação fiscal e noções de orçamento público para jovens e associações comunitárias.",
  "Mapeamento de problemas de acesso a serviços públicos e produção de cartas de orientação ao cidadão.",
  "Capacitação comunitária sobre direitos, serviços municipais e canais de ouvidoria.",
  "Diagnóstico participativo de políticas públicas locais, com devolutiva dos resultados à comunidade.",
];

export const prexPropostaDocumentos = [
  "Memorando via SEI",
  "Ata de aprovação departamental",
  "Declaração sobre financiamento/despesas",
  "Formulário de encaminhamento",
  "Compromisso de entrega de relatório",
  "Projeto em PDF",
];

export const prexPropostaPassos = [
  "Comece por uma conversa com professor orientador e chefia do Departamento de Ciências da Administração.",
  "Construa diagnóstico, público-alvo, objetivos, metodologia, cronograma, equipe, resultados esperados e avaliação.",
  "Use os modelos oficiais da PREX e confirme o fluxo SEI e as aprovações necessárias.",
  "Verifique custos, uso de espaços, parcerias, imagem institucional, proteção de dados e autorizações antes de executar.",
];

export const bibliotecaPassos = [
  'Localize no portal a página "Biblioteca Universitária".',
  "Abra o Guia do Usuário e confira cadastro, empréstimo, renovação, reserva, penalidades, acesso ao catálogo e serviços digitais.",
  "Leve documento de identificação e comprovante de vínculo acadêmico, se exigidos para cadastro.",
  "Pesquise livros e periódicos relacionados às disciplinas e peça orientação aos profissionais da biblioteca.",
  "Confirme diretamente horários especiais, funcionamento em recessos e regras de acesso a salas ou equipamentos.",
];

export const bibliotecaContatoOportunidades = {
  phone: "(38) 3229-8212",
  email: "biblioteca.central@unimontes.br",
  building: "Prédio 4, campus-sede",
  hours: "Segunda a sexta, 7h30 às 22h30, sujeito a alterações",
};

export const bibliotecaContatoManualGP = {
  phone: "(38) 3229-8211",
  email: "biblioteca.central@unimontes.br",
  director: "Roseli Aparecida Damaso Messias Garcia",
  cadastro: "RG com foto e cadastro de senha e e-mail na biblioteca",
};

export const laboratoriosCchAviso = [
  "O portal apresenta páginas de unidades e estruturas acadêmicas. A página do CCH, por exemplo, lista laboratórios de informática, história oral, geoprocessamento, línguas, educação, artes e ciências, além de auditório e outros espaços.",
  "Essa listagem serve para demonstrar a diversidade de estruturas do campus, mas não significa que todos os laboratórios sejam destinados ao curso de Gestão Pública ou tenham acesso livre.",
  "Para usar laboratório, identifique a unidade responsável e o professor/técnico responsável.",
  "Pergunte se há agenda, treinamento, autorização, cadastro, equipamento disponível ou restrição de horário.",
  "Para sala de estudo, auditório ou espaço de convivência, consulte a unidade gestora ou a Gerência Geral de Campus.",
  "Não entre em laboratórios técnicos, salas de pesquisa ou áreas administrativas sem autorização.",
];

export const peaesRoteiro = [
  'Entre no portal oficial e procure "Programa Estadual de Assistência Estudantil – PEAES".',
  "Abra o edital vigente, leia requisitos, impedimentos, modalidades, limites de acumulação, cronograma e anexos.",
  "Organize documentos de identificação, matrícula, renda, composição familiar, moradia e demais comprovantes exigidos especificamente no edital.",
  "Preencha o formulário eletrônico indicado e confira se todos os arquivos foram anexados corretamente.",
  "Acompanhe resultados, recursos, convocações e assinatura de termo de compromisso.",
  "Em caso de dúvida, use o e-mail oficial indicado no edital vigente; guarde cópia da inscrição e dos documentos.",
];

export const peaesNotaEdital =
  "O edital 05/2026, publicado no portal em julho de 2026, exemplifica modalidades de apoio e documentos comprobatórios. Comunicados institucionais de 2026 mencionam inscrição pelo portal peaes.unimontes.br e contato peaes@unimontes.br; sempre confira o edital mais recente.";

export const naeOrientacoes = [
  "A página do NAE descreve áreas de atuação em esporte, cultura e lazer; apoio didático/pedagógico e auxílio-creche; e saúde dos estudantes, incluindo ações preventivas e encaminhamentos dentro das competências institucionais. A disponibilidade concreta de atendimento, agenda, equipe e critérios deve ser confirmada diretamente com o NAE/CAE.",
  "Se precisar de apoio pedagógico ou adaptação, procure a CAE/NAE e a coordenação, descrevendo a necessidade e perguntando qual fluxo institucional deve ser seguido.",
  "Se precisar de orientação de saúde estudantil, confirme quais atendimentos estão disponíveis, como agendar e quais situações exigem encaminhamento à rede externa.",
  "Para questões de acessibilidade física, informe a unidade e o local exato à coordenação/CAE e solicite orientação sobre o canal formal de registro.",
  "Em situação de urgência, utilize os serviços públicos de emergência e saúde adequados; não considere a Universidade substituta de atendimento médico de urgência.",
];

export const ouvidoriaTexto =
  "Quando a informação não for localizada ou o atendimento não resolver a demanda, consulte os canais institucionais de atendimento e ouvidoria indicados no portal. A página do campus informa Disque-Ouvidoria 162. Para dúvidas simples, prefira primeiro o setor responsável; para reclamação, sugestão, denúncia ou pedido formal, utilize o canal oficial apropriado e registre protocolo.";

export const redesSociaisAviso =
  "Redes sociais institucionais podem divulgar notícias e chamadas, mas a confirmação de requisitos, prazos e regras deve ser feita na página oficial, no edital ou diretamente com o setor responsável. Não envie documentos pessoais por perfis não verificados nem confie em mensagens sem publicação institucional correspondente.";

export const limitesLevantamento = [
  "Prioridade das fontes: páginas oficiais da Unimontes, editais, documentos normativos e catálogo telefônico institucional.",
  "Informações mutáveis: horários, preços do RU, responsáveis, telefones, e-mails, valores e critérios de bolsas/auxílios devem ser confirmados antes de qualquer decisão.",
  "Divergência de cadastro: foram encontrados dois endereços de e-mail diferentes para a coordenação de Gestão Pública em páginas institucionais. O telefone da coordenação (38) 3229-8265 é o melhor ponto de confirmação.",
  "Acesso físico: a existência de um prédio, laboratório, auditório ou sala no portal não garante acesso irrestrito. O uso depende da unidade responsável, finalidade, agenda, segurança e autorização.",
  "Oportunidades: a listagem de editais de 2026 é ilustrativa e comprova a variedade de chamadas, mas não significa que todas permaneçam abertas em 13/11/2026.",
  "Escopo: o manual concentra-se no campus-sede de Montes Claros e no curso de Gestão Pública. Para serviços de outros campi, use a página específica do campus e confirme os contatos locais.",
];

export const conclusaoManual = [
  "O acadêmico de Gestão Pública pode ampliar significativamente sua formação quando utiliza a Universidade para além da sala de aula. Coordenação, departamento, monitoria, estágio, pesquisa, extensão, biblioteca, assistência estudantil, esporte, cultura, eventos e serviços digitais formam uma rede de oportunidades. O caminho mais seguro é combinar três atitudes: acompanhar regularmente o portal e os editais; manter contato com a coordenação, professores e setores responsáveis; e formalizar cada participação conforme as regras institucionais.",
  "A recomendação central é transformar este manual em um roteiro de consulta contínua. Antes de cada inscrição ou uso de serviço, confirme a versão vigente da informação no canal oficial indicado.",
];

export const introducaoManualGP =
  "Este manual nasceu de um projeto de intervenção desenvolvido em 2026 por acadêmicos do curso de Gestão Pública, sob a orientação da professora June Marize Castro Silva. O material foi concebido com o propósito de guiar os novos estudantes em sua trajetória inicial na graduação, reunindo de forma clara e simplificada as orientações essenciais para a vida universitária.";

export const iniciacaoModalidades = {
  intro:
    "A página da Coordenadoria de Iniciação Científica descreve o PROINIC como programa institucional de iniciação científica e apresenta modalidades e chamadas. Entre as informações publicadas estão a Iniciação Científica Voluntária (ICV), além de programas com bolsas vinculados a agências e linhas específicas. Requisitos, cotas, perfil do orientador e prazos variam por edital.",
  icv: "ICV: a página informa modalidade voluntária, sem remuneração, voltada a acadêmicos que desejam desenvolver pesquisa; o calendário e a duração devem ser confirmados no edital vigente.",
  pibic:
    "PIBIC/PIBIC-AF/PIBITI e programas associados: podem contemplar iniciação científica, ações afirmativas, desenvolvimento tecnológico e inovação, conforme a chamada e a agência financiadora.",
  bicCampi:
    "PROINIC e BIC/Campi: acompanhe a página da PRP e os editais próprios para identificar modalidades aplicáveis ao seu curso e campus.",
};

export const ruManualOportunidades = {
  descricao:
    "A página oficial descreve o RU como parte da política de assistência e permanência estudantil, com refeições subsidiadas.",
  valor:
    "Na consulta realizada, a página informava valor de R$ 2,50 por refeição para acadêmicos; almoço das 10h30 às 13h30 e jantar das 17h30 às 20h.",
  cadastro:
    "O cadastro do estudante exige documento original com foto e comprovante do número de matrícula, impresso ou virtual.",
};

export const ruManualGP = {
  marmitas:
    "Valor: R$ 2,50 por refeição e marmitas que são duas a de alumínio por R$ 2,50 e a de Isopor por R$3,00",
  cadastro:
    "Cadastro: RG com foto e comprovante de matrícula carimbado pela Secretaria Geral.",
};

export const researchImages = [
  "WhatsApp-Image-2026-11-13-at-18.35.27.jpeg",
  "WhatsApp-Image-2026-11-13-at-18.35.27-(1).jpeg",
  "WhatsApp-Image-2026-11-13-at-18.35.26.jpeg",
  "WhatsApp-Image-2026-11-13-at-18.35.27-(2).jpeg",
  "WhatsApp-Image-2026-11-13-at-18.35.28.jpeg",
  "WhatsApp-Image-2026-11-13-at-18.35.28-(1).jpeg",
  "WhatsApp-Image-2026-11-13-at-18.16.39.jpeg",
];

/** Trecho do diagnóstico (projeto de intervenção, docs/DOC-20260628-WA0016..docx) */
export const diagnosticoProjeto =
  "Muitos estudantes ingressantes enfrentam dificuldades de adaptação acadêmica e de acesso às informações institucionais essenciais para sua permanência no ensino superior — incluindo dúvidas sobre matrícula, PPC, normas, estágios, extensão, iniciação científica, sistemas institucionais e localização no campus.";