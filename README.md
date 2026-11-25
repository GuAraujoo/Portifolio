# Portfólio — Gustavo Santos Araujo

Portfólio pessoal estático desenvolvido com **HTML, CSS e JavaScript puros** para apresentar minha formação, habilidades técnicas, experiências e canais de contato para vagas de desenvolvedor júnior (front-end e back-end).

## Seções da página

- **Início:** apresentação rápida, disponibilidade para vagas de Desenvolvedor Jr. e links principais (Contato, GitHub e LinkedIn).
- **Sobre:** resumo da trajetória, foco atual (NestJS, Prisma e PostgreSQL) e objetivo profissional.
- **Habilidades:** linguagens, tecnologias web/interfaces, bancos de dados, vivência prática e idiomas.
- **Projetos:** projetos desenvolvidos, com descrição, tecnologias utilizadas e link direto para o repositório no GitHub (iniciando pelo **Portfólio Web**).
- **Trajetória:** histórico de experiências profissionais e formação acadêmica/técnica.
- **Trabalhos anteriores:** detalhamento das atividades realizadas como programador trainee e instrutor de inclusão digital.
- **Contato:** envio direto via **Gmail** ou **Outlook Web**, botão para **copiar e-mail** e link para o **LinkedIn**.

## O que foi implementado

- **Tema claro e escuro:** alternância manual pelo botão no cabeçalho e detecção automática da preferência do sistema (`prefers-color-scheme`), com persistência em `localStorage` (protegida por `try/catch`) e aplicação antecipada no `<head>` para evitar flash de tema ao carregar.
- **Acessibilidade:** contraste ajustado para WCAG AA nos dois temas (incluindo estado `:hover` dos botões), link *"Pular para o conteúdo"*, navegação completa por teclado com `:focus-visible`, `aria-pressed` no botão de tema, região de status (`role="status"`) ao copiar o e-mail e respeito a `prefers-reduced-motion`.
- **Responsividade e compatibilidade:** layout adaptável para mobile e desktop, alvos de toque com mínimo de `44×44px` no menu e no botão de tema, fallback de cor sólida antes de `color-mix()` e suporte a `safe-area-inset` em dispositivos com notch.
- **Contato sem depender de app local:** links diretos de composição para **Gmail** e **Outlook Web** (com destinatário e assunto preenchidos), além de cópia do e-mail via `navigator.clipboard` com fallback via `document.execCommand("copy")` e mensagem persistente caso o navegador bloqueie a cópia automática.
- **SEO e compartilhamento:** favicon SVG inline, `meta description` e tags básicas de **Open Graph** e **Twitter Card**.

## Estrutura de arquivos

```text
Portifolio/
├── index.html   # Estrutura semântica, conteúdo e meta tags
├── style.css    # Estilos, temas claro/escuro e responsividade
├── script.js    # Controle de tema, cópia de e-mail com fallback e ano dinâmico
└── README.md    # Documentação do projeto
```

## Como executar localmente

Por ser um site estático sem dependências ou build:

1. Clone o repositório:
   ```bash
   git clone https://github.com/GuAraujoo/Portifolio.git
   ```
2. Abra o arquivo `index.html` diretamente no navegador (ou sirva a pasta com uma extensão como *Live Server*).

## Contato

- **GitHub:** [github.com/GuAraujoo](https://github.com/GuAraujoo)
- **LinkedIn:** [Gustavo Santos Araujo](https://www.linkedin.com/in/gustavo-santos-araujo-21750a413)
- **E-mail:** `a.s.gustavo@outlook.com.br`
