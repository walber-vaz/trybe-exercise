/**
 * REI
 * DAMA
 * BISPOS
 * CAVALOS
 * TORRES
 * PEÕES
 */

const pecaXadrez = 'Rei';

switch (pecaXadrez.toLowerCase) {
  case 'rei':
    console.log('A sua movimentação consiste no deslocamento de uma casa na direção horizontal,');
    console.log('vertical ou diagonal, desde que ela não esteja sob ataque adversário.');
    break

  case 'dama':
    console.log('A Dama movimenta-se em linhas retas pelas fileiras, colunas e diagonais no tabuleiro.');
    break
    
  case 'bispo':
    console.log('Movimenta-se em diagonal, não podendo pular peças intervenientes, e captura tomando o lugar ocupado pela peça adversária.');
    break

  case 'cavalo':
    console.log('Tem um movimento assemelhado a um "L" e, diferente das outras peças, pode pular as peças intervenientes.')
    break

  case 'torre':
    console.log('Movimenta-se em linhas retas nas colunas e fileiras do tabuleiro não podendo,');
    console.log('entretanto, pular peças adversárias ou aliadas e captura ao ocupar a casa deixada pelo adversário.');
    break

  case 'peao':
    console.log('O peão move-se verticalmente na coluna que encontra-se, sendo incapaz de recuar.');
}