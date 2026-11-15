# Manual acadêmico — Gestão Pública (Unimontes)

Site estático de orientação para acadêmicos do curso de **Tecnologia em Gestão Pública** da Universidade Estadual de Montes Claros. Conteúdo curado a partir dos manuais em `docs/` e links institucionais oficiais.

## Desenvolvimento

```bash
npm install
npm run dev
```

Abra [http://localhost:3000](http://localhost:3000).

## Build (publicação estática)

```bash
npm run build
```

A pasta `out/` pode ser publicada em **GitHub Pages**, Netlify ou Vercel (modo estático).

### GitHub Pages

1. Em `next.config.ts` já está `output: "export"`.
2. Se o repositório for publicado em subpath (`usuario.github.io/repo`), defina `basePath` e `assetPrefix` no `next.config.ts`.
3. Faça upload do conteúdo de `out/` ou configure CI para gerar no push.

## Atualizar conteúdo

1. Revise os DOCX em `docs/`.
2. Execute `node scripts/ingest-docs.mjs` para pré-visualizar texto bruto.
3. Atualize os arquivos tipados em `src/content/*.ts` (fonte da verdade no site).
4. Rode `npm run build` e confira páginas críticas (`/oportunidades/`, `/contatos/`, `/campus/`).

## Estrutura

- `src/content/` — dados do manual (matriz, contatos, oportunidades, docentes)
- `public/maps/` — mapas do campus
- `public/research/` — gráficos da pesquisa com acadêmicos
- `public/docs/ppc-gestao-publica-2022.pdf` — PPC

## Aviso legal

Este projeto acadêmico **não substitui** editais, regulamentos ou comunicados oficiais da Unimontes. Confirme informações mutáveis (horários, valores, bolsas) no portal antes de tomar decisões.