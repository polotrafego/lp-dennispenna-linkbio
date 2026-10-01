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
   capa e o botão de compra na Amazon (livro físico).
5. **Showmakers** — cartão-banner com a imagem dos trabalhos (`showmakers-card.jpg`), o logo,
   a descrição ("Sua história pode se transformar em uma grande palestra…") e o botão de
   WhatsApp da Arena Academy (`whatsapp_url` no painel do palestras.academy).
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
| Showmakers (WhatsApp) | `https://wa.link/2n9ofj` — o mesmo da Arena Academy; abre com a mensagem pronta "Olá, Sara! Gostaria de mais informações sobre o Palestras Academy!" |
| PodPalco no Spotify | `https://open.spotify.com/show/28e8exfjwKveskUGheeokV` |
| PodPalco no YouTube | `https://www.youtube.com/@palestras.academy` |
| Instagram | `https://www.instagram.com/dennispenna/` |
| LinkedIn | `https://www.linkedin.com/in/dennispenna/` |

Os links da GPS Mentoria e do Programa Online levam UTMs, para o tráfego desta página
aparecer separado nos relatórios.

## Imagens: só JPG e PNG

Todas as imagens da página são `.jpg` ou `.png`, de propósito. Algumas hospedagens não
servem `.webp` nem `.svg` (ou bloqueiam o envio de `.svg`), e a imagem simplesmente não
aparece. Foi o que aconteceu com a capa do livro e o logo do Showmakers ao subir a pasta
num domínio próprio em 01.10.2026; os dois foram convertidos (e o favicon também).
Se for trocar alguma imagem, mantenha esses dois formatos.

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

## No ar

- **Endereço:** https://lp-dennispenna-linkbio.vercel.app
- **Repositório:** https://github.com/polotrafego/lp-dennispenna-linkbio (branch `main`)
- **Vercel:** projeto `lp-dennispenna-linkbio`, time *trafego-polo*, ligado ao repositório —
  todo `git push` no `main` publica sozinho, em poucos segundos.
- Configuração: **Framework** `Other`, sem build, raiz do repositório. Sem variáveis de
  ambiente nem formulário.
