# Power Fit – Site Institucional

Site institucional da **Academia Power Fit**, feito com React, Vite e Tailwind CSS.

> Todo o conteúdo (preços, horários, endereço, telefones, redes sociais e imagens) é **demonstrativo** e deve ser substituído pelos dados reais.

## Objetivo

Atrair novos alunos, apresentar planos, horários e estrutura, e facilitar o contato para matrícula.

## Tecnologias

React 18, Vite 5, Tailwind CSS 4 (plugin `@tailwindcss/vite`, sem `tailwind.config.js`), JavaScript e Lucide React.

## Funcionalidades

- Navbar fixa com menu móvel (fecha com Esc ou ao clicar em um link) e botão "Matricule-se".
- Hero, planos (com destaque para o mais recomendado), horários, estrutura, contato e rodapé.
- Botão "Tenho interesse" leva ao formulário já com o plano selecionado.
- Formulário com validação de campos obrigatórios e mensagens de erro/sucesso.
- Responsivo, HTML semântico, rótulos acessíveis, foco visível, textos alternativos e respeito a `prefers-reduced-motion`.

## Estrutura de pastas

```text
power-fit/
├── public/images/        # imagens (hoje SVGs de exemplo)
├── src/
│   ├── components/       # Navbar, Hero, Planos, Horarios, Estrutura, Contato, Footer, Button, SectionTitle
│   ├── data/siteData.js  # planos, horários, estrutura e contatos (edite aqui)
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css         # Tailwind + cores e fontes do tema
├── index.html
├── package.json
├── vite.config.js
└── README.md
```

## Pré-requisitos

Node.js 18 ou superior e npm.

## Como executar

```bash
npm install
npm run dev       # servidor de desenvolvimento
npm run build     # versão de produção (pasta dist/)
npm run preview   # visualizar a versão de produção
```

## Como editar o conteúdo

Tudo fica em `src/data/siteData.js`:

- **Planos:** array `plans` (nome, preço, período, frase de destaque; `featured: true` marca o recomendado). Itens comuns em `planFeatures`.
- **Horários:** array `schedule`.
- **Estrutura:** array `structure` (confirme equipamentos e serviços antes de publicar).
- **Contato e redes sociais:** objeto `contactInfo`. Preencha `whatsappDigits` (ex.: `5547999999999`) para ativar o link do WhatsApp.
- **Imagens:** substitua os arquivos em `public/images/` (ou ajuste os caminhos em `images`).
- **Cores:** variáveis `--color-*` em `src/index.css`.

## Limitações conhecidas

- O formulário **não envia nem armazena dados**: ele só valida e mostra uma confirmação ilustrativa. É necessário um backend (ou serviço de formulários) para receber matrículas.
- As imagens atuais são ilustrações de exemplo, não fotos reais.
- As fontes vêm do Google Fonts (exige internet; há fontes alternativas de fallback).

## Melhorias futuras

Backend/API para o formulário, fotos reais, link de WhatsApp com mensagem pré-preenchida, depoimentos e FAQ, SEO e analytics, testes automatizados.
