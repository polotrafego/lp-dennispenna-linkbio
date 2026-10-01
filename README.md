# Dennis Penna — Linkbio

Página de **link na bio** do Dennis Penna, no estilo Linktree, inspirada em
[lp.victordamasio.com.br](https://lp.victordamasio.com.br/): foto no topo, cartões-banner
para os produtos e cartões de link com ícone.

A **identidade visual** é a da página da GPS Mentoria
([palestras.academy/gpsmentoria](https://www.palestras.academy/gpsmentoria)): preto
`#0c0908`, pergaminho `#f9f6f1`, latão `#c08f42`, DM Sans, cantos retos e o pontilhado de
latão no fundo, que brilha perto do cursor. As fotos e os logos vieram da mesma página.

Site **100% estático** (HTML + CSS + JS puro, sem build), pronto para deploy na **Vercel**,
no mesmo formato dos links na bio dos outros palestrantes.

## Conteúdo (nesta ordem)

1. **Topo** — retrato do hero da GPS Mentoria à esquerda; ao lado, "Mentor de palestrantes",
   o nome e uma linha de apresentação.
2. **GPS Mentoria** — cartão-banner → `palestras.academy/gpsmentoria`.
3. **Programa Online Palestra Além do Palco** — cartão-banner → `palestras.academy/programaonline`.
4. **Livro "Crie palestras inesquecíveis"** (Dennis Penna e Joni Galvão, Gente Editora) —
   capa e dois botões de compra: Amazon (livro físico) e Gente Editora.
5. **Showmakers** — logo e texto do bloco de parceiros do palestras.academy (`parceiro_1_*`
   no painel) e o botão de WhatsApp da Arena Academy (`whatsapp_url` no painel).
6. **PodPalco** — Spotify e YouTube.
7. **Redes sociais** — Instagram e LinkedIn.

O topo é compacto: retrato de ~168px de altura à esquerda e o texto ao lado (01.10.2026).
Na primeira versão a foto ocupava ~68% da tela, com o nome por cima; depois ~42%.

## Links

| Botão | Destino |
|---|---|
| GPS Mentoria | `https://www.palestras.academy/gpsmentoria?utm_source=linkbio&utm_medium=dennispenna&utm_campaign=gpsmentoria` |
| Programa Online | `https://www.palestras.academy/programaonline?utm_source=linkbio&utm_medium=dennispenna&utm_campaign=programaonline` |
| Livro — Amazon | `https://a.co/d/00jQQQsb` (livro físico) |
| Livro — Gente Editora | `https://www.editoragente.com.br/crie-palestras-inesqueciveis/p` |
| Showmakers (WhatsApp) | `https://wa.link/2n9ofj` — o mesmo da Arena Academy; abre com a mensagem pronta "Olá, Sara! Gostaria de mais informações sobre o Palestras Academy!" |
| PodPalco no Spotify | `https://open.spotify.com/` — **genérico por enquanto** |
| PodPalco no YouTube | `https://www.youtube.com/@palestras.academy` |
| Instagram | `https://www.instagram.com/dennispenna/` |
| LinkedIn | `https://www.linkedin.com/in/dennispenna/` |

Os links da GPS Mentoria e do Programa Online levam UTMs, para o tráfego desta página
aparecer separado nos relatórios.

## ⚠️ Pendência antes de publicar

- **Link do PodPalco no Spotify**: trocar `https://open.spotify.com/` no `index.html`
  pelo endereço do programa (`https://open.spotify.com/show/…`) quando ele existir.

## Estrutura

```
lp-dennispenna-linkbio/
├─ index.html          # página única
├─ css/styles.css      # identidade da GPS Mentoria + componentes do linkbio
├─ js/main.js          # ano no rodapé, brilho do pontilhado, entrada suave
├─ assets/img/         # fotos (1200px) e logos recortados, favicon
├─ vercel.json
├─ .gitignore
└─ .vercelignore
```

## Rodar localmente

```bash
npx --yes serve . -l 4331
```

Depois abra `http://localhost:4331`.

## Deploy na Vercel

1. Suba **esta pasta** para um repositório no GitHub.
2. Na Vercel: **Add New → Project** e importe o repositório.
3. **Framework Preset:** `Other` · **Build Command:** _(vazio)_ · **Root Directory:** raiz.
4. Deploy. Não há variáveis de ambiente nem formulário.
