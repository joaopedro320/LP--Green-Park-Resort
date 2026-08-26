Green Park Resort — pacote para Vercel

Como subir:
1. Envie o conteúdo desta pasta para um repositório GitHub ou arraste a pasta/ZIP na Vercel.
2. A raiz do deploy deve conter este index.html e a pasta images/.
3. Não precisa configurar build command: é um site estático.

Alterações feitas:
- Imagens separadas da página em /images.
- Logo Green Park trocada: versão empilhada no hero e versão horizontal no header/footer.
- Marcas d'água grandes da logo PARK removidas dos fundos.
- Cores originais preservadas, sem troca de paleta.


Alteração desta versão: logo preta aplicada apenas no menu/header superior.

Rodada de ajustes (Ajustes_LP__2_.pptx):
- Hero: texto reduzido, badges de lazer removidas.
- Lazer: carrossel com 11 itens na ordem solicitada (5 itens ainda sem foto real: beach tennis, salão de jogos, car wash, mercadinho, bicicletário — aparecem com placeholder "foto em breve").
- Implantação: imagem trocada pela versão completa com rosa dos ventos e legenda numerada (extraída da ficha técnica).
- Removido texto redundante da seção de implantação (já coberto na seção de plantas).
- Card lateral renomeado para "O empreendimento" com textos atualizados.
- Plantas: convertidas de abas para carrossel (setas + dots + swipe + autoplay).
- Financiamento: subtítulos removidos, badges de texto trocados pelas logos reais da Caixa e do Minha Casa Minha Vida.
- Adicionado link do site da Engefor na seção "Quem está por trás".
- Corrigida sobrescrita de CSS que deixava o ícone do WhatsApp laranja (agora verde padrão).
- Rodapé: "Segunda à Sábado" (crase) e horário atualizado para 08h às 18h.

Rodada de correções (2):
- Implantação reconstruída: mapa limpo (render 3D em alta resolução, sem foto de piscina nem título "cozidos") + legenda dos 19 itens remontada em HTML real, no estilo tipográfico do site (não é mais um print do PDF).
- Corrigido o bug do carrossel de plantas: removido um script de "acompanhar o scroll" (de uma rodada de ajustes anterior a esta) que estava incompatível com o carrossel novo e fazia a imagem sumir/deslocar. Carrossel também foi aumentado (mais largura e altura).
- Reduzido o excesso de sombra decorativa (folhas desfocadas) no fundo da seção "Quem está por trás" (Engefor).
- Substituídas as 6 imagens de plantas pelas versões em alta resolução do render 3D.
- Preenchidas as 5 fotos de lazer que faltavam (beach tennis, salão de jogos, car wash, mercadinho, bicicletário) com as imagens reais do render 3D — os placeholders "foto em breve" foram removidos.

Rodada de correções (3):
- Implantação: recorte do mapa refeito com margem generosa — agora mostra a rosa dos ventos e as setas de acesso (pedestres/veículos/torres) completas, sem cortar nada nas bordas.
- Plantas: corrigido o espaço em branco em volta da imagem (bug de min-height conflitando com aspect-ratio, que sobrava "letterbox" cor creme acima/abaixo da planta). Agora a imagem preenche o quadro por completo, sem cortar a planta.
- Plantas: aumentada a proporção da coluna da imagem em relação ao card "O empreendimento" (de 1.35fr para 1.6fr), pra imagem ganhar mais destaque visual.

Rodada de correções (4):
- Corrigido bug crítico: card "O empreendimento" e carrossel de plantas estavam invertidos (imagem pequena à esquerda, card grande à direita) porque o CSS de reordenação (order) mirava um elemento que não era mais filho direto do grid depois da reestruturação em carrossel. Corrigido reordenando o próprio HTML: card de informações agora vem primeiro (esquerda, estreito) e a planta depois (direita, larga) — sem depender de "order".
- Card da planta redesenhado: fundo branco com respiro ao redor da imagem (a imagem não fica mais colada na borda), barra de legenda ocupando a largura total, no estilo da referência enviada.
- Adicionado selo com o nome da planta atual acima do carrossel (ex: "PLANTA — PAV. TIPO GARDEN"), sincronizado via JS conforme o usuário navega.

Rodada de correções (5):
- Adicionado "sticky" no card da planta (só CSS, position:sticky) para ele acompanhar visualmente o card de texto "O empreendimento" enquanto a página rola — já que o texto é mais alto que a imagem, a planta agora fica visível na tela até o texto terminar de rolar, em vez de sumir antes.

Rodada de correções (6):
- Corrigido o motivo do sticky não funcionar: a seção #plantas tinha um "overflow: hidden" no CSS (sobra de uma versão anterior, sem nenhuma decoração usando mais isso). Esse overflow:hidden é uma causa clássica de position:sticky não funcionar em elementos filhos. Removido — agora o card da planta acompanha o scroll de verdade.

========================================================
Rodada de correções (7) — ajuste de tipologia + performance
========================================================

AJUSTE PEDIDO PELA CLIENTE
- Adicionada a opção "2 dorms com garden" no seletor de Tipologia dos DOIS
  formulários (o do hero e o do "Seu momento é agora").
- No formulário final, "Ver as duas opções" virou "Ver todas as opções",
  já que agora são três tipologias.
- ATENÇÃO: o mesmo ajuste precisa ser replicado no site da Engefor
  (WordPress / Turbo Cloud), que não faz parte deste pacote.

OTIMIZAÇÃO DE PESO E VELOCIDADE
Peso do primeiro carregamento: ~9,8 MB  ->  ~529 KB  (95% menor)
Pasta de imagens:              20 MB    ->  3,9 MB
index.html:                    709 KB   ->  160 KB

O que foi feito:
1. As 5 máscaras decorativas de folha estavam embutidas em base64 dentro do
   CSS (565 KB dentro do próprio HTML, baixados antes de qualquer pixel
   aparecer na tela). Foram extraídas para images/decor/*.webp.
2. Causa principal da lentidão: as folhas decorativas (form-final-leaf-left,
   form-final-leaf-right, palm-leaf, palm-leaf-new) somavam 7,9 MB em PNG e
   estavam SEM loading="lazy", ou seja, o navegador baixava tudo isso já no
   carregamento inicial, antes de mostrar a página. Agora estão em WebP
   redimensionado (211 KB as maiores) e com lazy load.
3. Todas as imagens convertidas para WebP, redimensionadas para o tamanho em
   que realmente aparecem na tela. Plantas e mapa de implantação mantidos em
   alta resolução (o lightbox continua nítido).
4. Todas as <img> agora têm width/height reais (evita o layout "pulando"
   enquanto carrega, que conta como CLS no PageSpeed), loading="lazy" e
   decoding="async".
5. Adicionado preconnect/dns-prefetch para googletagmanager e connect.facebook.net
   e preload da imagem de fundo do hero.
6. Vídeos agora com preload="none" nos dois (antes o decorado estava em
   "metadata" e já puxava dados sem o usuário pedir). Os arquivos em si foram
   mantidos: já estão bem compactados e com faststart, e por serem preload="none"
   não pesam no carregamento da página.
7. Removidos 90 arquivos de imagem que não eram usados em lugar nenhum
   (duplicatas em images/condicoes/, images/plantas/, images/decorative/, etc.)
   e o arquivo park-residence-index.html (4,4 MB, versão antiga).
8. Criada images/fachada.jpg (1200x630). A og:image e a twitter:image
   apontavam para esse arquivo, mas ele não existia no pacote — ou seja, o
   link compartilhado no WhatsApp/Facebook saía sem imagem de preview.

PENDÊNCIA IMPORTANTE (fora do meu alcance neste pacote)
- O CSS carrega a fonte Nexa de fonts/Nexa-*.otf, mas a pasta fonts/ não veio
  no ZIP. São 5 requisições que dão 404. Se a pasta existir no servidor, é só
  ignorar. Se não existir, a página está renderizando na fonte padrão do
  sistema, não na Nexa. Vale conferir no deploy.
- Sugestão: converter as fontes de .otf para .woff2 (costuma ficar 60-70%
  menor e é o formato que os navegadores realmente preferem).

========================================================
Rodada de correções (8) — reversão das plantas + mobile
========================================================

PLANTAS — REVERTIDO
Na rodada 7 eu tinha adicionado width/height/decoding nas <img> das plantas
junto com todas as outras imagens. Isso brigou com o "aspect-ratio: 16/9" que
já existia no CSS de .pt-panel img e desalinhou o carrossel.
As 6 <img> das plantas voltaram a ter EXATAMENTE os atributos originais
(só o src mudou de .jpg para .webp). Comparei o carrossel renderizado antes e
depois, em 390px e em 1280px: está idêntico ao original.

MOBILE — BOTÃO FORA DO LUGAR (corrigido)
Causa: a classe .btn tem "white-space: nowrap" com letter-spacing de .14em.
Rótulos longos ficavam mais largos que a própria tela e vazavam para fora do
container. Os casos encontrados:

  "VISITE O DECORADO E CONHEÇA A MAQUETE"  -> 407px de largura numa tela de
      360px. Sobrava para fora dos dois lados e o texto ficava cortado.
  "FALAR SOBRE A OBRA NO WHATSAPP"         -> passava da borda direita.
  "GARANTIR CONDIÇÕES DE LANÇAMENTO"       -> texto estourava o próprio botão
      no formulário do hero.

Correção: bloco novo de CSS no fim da folha de estilo, só em @media.
Abaixo de 900px os .btn passam a quebrar linha, ficam centralizados e
respeitam max-width:100%. Abaixo de 480px a fonte, o padding e o
letter-spacing diminuem um pouco e os CTAs dos formulários ocupam a largura
útil. Desktop não foi tocado (as regras são todas max-width).

Testado em 320, 360, 375, 390, 414, 430 e 768px: nenhum elemento passa da
borda e não há mais rolagem lateral em nenhuma dessas larguras.
