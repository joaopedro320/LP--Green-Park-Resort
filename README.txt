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
