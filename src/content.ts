/**
 * Todo o conteúdo editável do site.
 * Marcadores "[verificar fonte oficial]" indicam pontos para revisão humana.
 */

export const site = {
  title: "VPN e Apostas Online: o que você precisa saber",
  description:
    "Conteúdo informativo sobre a regulamentação das apostas no Brasil, o funcionamento técnico de uma VPN e os riscos técnicos e legais envolvidos.",
  footerNotice: "18+ • Jogue com responsabilidade.",
  legalDisclaimer:
    "Conteúdo informativo. Não constitui aconselhamento jurídico ou financeiro. Verifique sempre as fontes oficiais.",
  officialSourceUrl: "https://www.gov.br", // [verificar fonte oficial]
};

export const nav = [
  { id: "inicio", label: "Início" },
  { id: "slides", label: "Entenda" },
  { id: "mitos", label: "Mitos e verdades" },
  { id: "como-funciona", label: "Como funciona" },
  { id: "cenarios", label: "Cenários" },
  { id: "jogo-responsavel", label: "Jogo responsável" },
  { id: "faq", label: "Dúvidas" },
];

export const hero = {
  tag: "APOSTAS ONLINE NO BRASIL",
  titleLine1: "VPN NAS APOSTAS:",
  titleLine2: "O QUE VOCÊ PRECISA SABER.",
  subtitle:
    "Com as novas regras para as casas de apostas no Brasil, o uso de VPN gerou muitas dúvidas. Entenda o que é, como funciona e quais são os riscos técnicos e legais.",
  cta: "Saiba mais",
};

export type Slide = {
  kicker: string;
  title: string;
  body: string[];
  notice?: string;
  noticeLink?: { label: string; url: string };
  highlight?: boolean;
};

export const slides: Slide[] = [
  {
    kicker: "Contexto",
    title: "Regulamentação das apostas",
    body: [
      "As apostas de quota fixa passaram a ter regras, autorização e fiscalização no Brasil. Isso significa que a atividade deixou de ocorrer sem qualquer controle e passou a depender de requisitos definidos pelo poder público.",
      "Somente empresas autorizadas pelo órgão regulador podem operar legalmente no país. Plataformas sem autorização atuam fora desse controle, sem supervisão e sem as obrigações exigidas das autorizadas.",
    ],
    notice: "Consulte sempre a lista oficial de empresas autorizadas no site do governo federal.",
    noticeLink: { label: "Fonte oficial [verificar fonte oficial]", url: site.officialSourceUrl },
  },
  {
    kicker: "Conceito",
    title: "O que é uma VPN",
    body: [
      "VPN significa rede privada virtual. É uma tecnologia que cria um túnel criptografado entre o seu dispositivo e um servidor externo, por onde o tráfego passa antes de chegar à internet.",
      "Como a conexão sai desse servidor, o endereço IP aparente da navegação passa a ser o do servidor, e não o da sua rede. A tecnologia é legítima e muito usada em ambientes corporativos e de segurança da informação.",
    ],
  },
  {
    kicker: "Técnico",
    title: "Como funciona o mascaramento de IP",
    body: [
      "O endereço IP identifica a origem aparente de uma conexão na internet. As consultas de DNS traduzem nomes de sites em endereços. Quando uma VPN está ativa, esse tráfego é encapsulado em um túnel criptografado.",
      "Para o provedor de internet, o que fica visível é a existência de tráfego cifrado com um servidor, e não o conteúdo das páginas. O site de destino, por sua vez, enxerga o IP do servidor no lugar do IP original.",
      "Esta é uma explicação conceitual e neutra: não há aqui instruções de configuração nem indicação de serviços.",
    ],
  },
  {
    kicker: "Ponto central",
    title: "VPN NÃO MUDA A AUTORIZAÇÃO",
    body: [
      "Uma VPN altera a localização aparente da conexão. Ela não altera a situação regulatória de nada.",
      "Uma plataforma que não é autorizada no Brasil continua não autorizada, independentemente de como você se conecta. As regras que uma plataforma precisa cumprir também não mudam por causa da sua conexão.",
      "Em outras palavras: a tecnologia muda o caminho dos dados, não muda a lei nem o contrato.",
    ],
  },
  {
    kicker: "Conformidade",
    title: "Verificação de identidade (KYC)",
    body: [
      "Casas de apostas que seguem as regras verificam identidade, CPF, idade e localização do apostador. Esse processo é conhecido como KYC, do inglês “conheça o seu cliente”.",
      "Ele existe para prevenir fraude e lavagem de dinheiro, impedir o acesso de menores de idade e permitir a proteção de apostadores com comportamento problemático, incluindo limites e autoexclusão.",
      "Tentar contornar essas verificações pode resultar em bloqueio da conta, retenção de saldo e perda das proteções previstas pela plataforma e pela regulamentação.",
    ],
  },
  {
    kicker: "Consequências",
    title: "Riscos reais",
    body: [
      "Conta suspensa ou encerrada e saldo retido por descumprimento dos termos de uso.",
      "Em plataformas não autorizadas, dificuldade ou ausência de amparo prático do Código de Defesa do Consumidor e dos canais oficiais de reclamação.",
      "Exposição a golpes e sites falsos, além do risco de vazamento de dados pessoais e bancários.",
      "Possíveis consequências legais dependendo do caso concreto. Em dúvida, consulte um advogado ou a fonte oficial.",
    ],
    highlight: true,
  },
];

export type Myth = {
  claim: string;
  verdict: "MITO" | "VERDADE";
  answer: string;
};

export const myths: Myth[] = [
  {
    claim: "VPN deixa qualquer site de apostas legal.",
    verdict: "MITO",
    answer:
      "A situação regulatória de uma plataforma não depende da sua conexão. Uma casa sem autorização continua sem autorização, com ou sem VPN.",
  },
  {
    claim: "VPN garante anonimato total.",
    verdict: "MITO",
    answer:
      "A VPN altera o IP aparente e cifra o tráfego, mas não elimina outras formas de identificação, como contas, documentos, meios de pagamento e dados fornecidos por você.",
  },
  {
    claim: "VPN impede o encerramento da conta.",
    verdict: "MITO",
    answer:
      "Os termos de uso das plataformas costumam permitir bloqueio, suspensão e retenção de saldo quando há indício de descumprimento das regras de cadastro ou localização.",
  },
  {
    claim: "Casas autorizadas verificam a identidade do apostador.",
    verdict: "VERDADE",
    answer:
      "A verificação de identidade, idade e CPF faz parte das obrigações de conformidade. É o que permite barrar menores de idade e oferecer ferramentas de proteção ao apostador.",
  },
  {
    claim: "Um provedor gratuito de VPN é sempre seguro.",
    verdict: "MITO",
    answer:
      "Serviços gratuitos podem manter registros, injetar publicidade ou monetizar dados de navegação. Segurança depende do provedor, do modelo de negócio e da política de privacidade — não do preço.",
  },
  {
    claim: "Usar VPN é, por si só, ilegal no Brasil.",
    verdict: "MITO",
    answer:
      "VPN é uma tecnologia de uso comum, inclusive corporativo. O que pode gerar consequências é a finalidade: descumprir termos de uso ou regras aplicáveis. Situações específicas exigem orientação jurídica. [verificar fonte oficial]",
  },
  {
    claim: "Se a plataforma aceitou meu cadastro, está tudo regular.",
    verdict: "MITO",
    answer:
      "Aceitar um cadastro não é prova de autorização. A conferência precisa ser feita na lista oficial de empresas autorizadas divulgada pelo poder público.",
  },
  {
    claim: "Plataforma não autorizada tem os mesmos canais de reclamação.",
    verdict: "MITO",
    answer:
      "Sem autorização e, muitas vezes, sem presença formal no país, os caminhos de reclamação ficam bem mais frágeis, o que reduz a chance de solução do problema.",
  },
];

export const howItWorks = {
  title: "Como a VPN funciona",
  subtitle:
    "Um caminho simplificado dos dados quando uma rede privada virtual está ativa. Ilustração conceitual, sem passo a passo de configuração.",
  steps: [
    { label: "Dispositivo", detail: "Origem do tráfego: celular, computador ou tablet." },
    { label: "Túnel criptografado", detail: "Os dados são encapsulados e cifrados no caminho." },
    { label: "Servidor VPN", detail: "A conexão sai deste ponto, com outro IP aparente." },
    { label: "Internet", detail: "O destino final recebe a requisição." },
  ],
  sees: [
    "Que existe tráfego cifrado com um servidor",
    "O volume aproximado de dados trafegados",
    "Os horários em que a conexão acontece",
  ],
  doesNotSee: [
    "O conteúdo das páginas acessadas",
    "As consultas de DNS feitas dentro do túnel",
    "Quais endereços específicos foram visitados",
  ],
  caption: "Ilustração educativa. Não é um guia de uso.",
};

export const scenarios = {
  title: "Riscos: simulador de cenários",
  subtitle: "Compare o que muda, na prática, dependendo do tipo de plataforma.",
  options: [
    { id: "autorizada", label: "Casa autorizada" },
    { id: "nao-autorizada", label: "Casa não autorizada" },
  ] as const,
  rows: [
    {
      criterion: "Proteção ao consumidor",
      autorizada:
        "Relação de consumo formal no país, com regras a cumprir e fiscalização do órgão regulador.",
      naoAutorizada:
        "Amparo prático reduzido. Sem presença formal e sem autorização, fazer valer direitos é muito mais difícil.",
    },
    {
      criterion: "Saque",
      autorizada:
        "Regras de saque definidas em termos publicados, com obrigações de transparência e prazos.",
      naoAutorizada:
        "Regras podem mudar sem aviso claro, com bloqueios e retenções de saldo de difícil contestação.",
    },
    {
      criterion: "Verificação de identidade",
      autorizada:
        "KYC obrigatório: identidade, CPF, idade e localização, o que barra menores e permite proteções.",
      naoAutorizada:
        "Verificação frágil ou inexistente, o que abre espaço para fraude e para o acesso de menores de idade.",
    },
    {
      criterion: "Canais de reclamação",
      autorizada:
        "SAC da empresa, Procon e consumidor.gov.br como caminhos formais de reclamação.",
      naoAutorizada:
        "Muitas vezes só há um canal informal de atendimento, sem instância a quem recorrer.",
    },
    {
      criterion: "Segurança de dados",
      autorizada:
        "Obrigações de tratamento de dados pessoais e de segurança da informação aplicáveis no país.",
      naoAutorizada:
        "Risco maior de vazamento e uso indevido de dados pessoais e bancários, incluindo sites falsos.",
    },
  ],
  conclusion:
    "Apostar em plataformas não autorizadas aumenta o risco em todas as dimensões acima: financeiro, jurídico e de proteção de dados.",
};

export const responsible = {
  title: "Jogo responsável",
  subtitle: "Apostas são entretenimento pago, não fonte de renda. Reconhecer sinais cedo faz diferença.",
  signs: [
    "Apostar valores acima do que você pode perder",
    "Perseguir perdas tentando recuperar o que já foi gasto",
    "Esconder gastos ou mentir sobre apostas para pessoas próximas",
    "Pedir dinheiro emprestado ou usar reservas para apostar",
    "Prejuízo no trabalho, nos estudos ou nas relações pessoais",
    "Irritação, ansiedade ou insônia ligadas às apostas",
  ],
  tools: [
    { label: "Limites de depósito", detail: "Defina um teto de valor por período diretamente na plataforma." },
    { label: "Pausas", detail: "Suspensão temporária do acesso à conta por um intervalo escolhido." },
    { label: "Autoexclusão", detail: "Bloqueio de longo prazo do acesso à conta, quando disponível." },
  ],
  help: [
    "Procure ajuda profissional em serviços de saúde mental. A rede pública do SUS, incluindo os CAPS, atende gratuitamente.",
    "Para apoio emocional a qualquer hora, o CVV atende pelo 188.",
  ],
  ageWarning: "Apostas são proibidas para menores de 18 anos.",
};

export const faq = [
  {
    q: "O que é uma VPN?",
    a: "É uma rede privada virtual: uma tecnologia que cria um túnel criptografado entre o seu dispositivo e um servidor externo, alterando o endereço IP aparente da conexão.",
  },
  {
    q: "VPN é ilegal?",
    a: "VPN é uma tecnologia de uso corrente, inclusive em empresas. O que pode gerar consequências é a finalidade do uso, como descumprir termos de uso de uma plataforma. Para o seu caso específico, consulte um advogado ou a fonte oficial.",
  },
  {
    q: "Uma VPN me protege em qualquer site?",
    a: "Não. Ela cifra o tráfego no caminho, mas não avalia a confiabilidade do site, não impede golpes e não protege dados que você mesmo informa em um cadastro.",
  },
  {
    q: "Por que as casas pedem meus documentos?",
    a: "Para verificar identidade, CPF, idade e localização. Isso previne fraude e lavagem de dinheiro, impede o acesso de menores e viabiliza ferramentas de proteção ao apostador.",
  },
  {
    q: "Como sei se uma casa é autorizada?",
    a: "Conferindo a lista oficial de empresas autorizadas divulgada pelo governo federal. Selo ou aviso no próprio site da plataforma não substitui essa conferência. [verificar fonte oficial]",
  },
  {
    q: "Usar VPN pode fazer eu perder a conta?",
    a: "Os termos de uso das plataformas costumam prever suspensão, encerramento e retenção de saldo quando há indício de descumprimento das regras de cadastro ou de localização. Leia os termos da plataforma.",
  },
  {
    q: "O que fazer se tiver problemas com uma casa de apostas?",
    a: "Registre o ocorrido, procure primeiro o SAC da empresa e guarde os protocolos. Se não houver solução, é possível recorrer ao Procon e ao consumidor.gov.br. Em situações que envolvam interpretação jurídica, consulte um advogado.",
  },
  {
    q: "Este site indica algum serviço de VPN ou casa de apostas?",
    a: "Não. O conteúdo é apenas informativo e educativo, não cita marcas e não recomenda contratar, baixar ou usar qualquer serviço.",
  },
];

export const banner = {
  text: "Este site é informativo e educativo. Não constitui aconselhamento jurídico ou financeiro, e não promove o uso de VPN para contornar regras. 18+",
  cta: "Entendi",
};
