import remedioImg from '../assets/img/remedios/remedio.png';
import img2 from '../assets/img/remedios/2.png';
import img3 from '../assets/img/remedios/3.png';
import img4 from '../assets/img/remedios/4.png';
import img5 from '../assets/img/remedios/5.png';
import img6 from '../assets/img/remedios/6.png';
import img7 from '../assets/img/remedios/7.png';
import img8 from '../assets/img/remedios/8.png';
import img9 from '../assets/img/remedios/9.png';
import img10 from '../assets/img/remedios/10.png';
import img11 from '../assets/img/remedios/11.png';
import img12 from '../assets/img/remedios/12.png';
import img13 from '../assets/img/remedios/13.png';
import img14 from '../assets/img/remedios/14.png';
import img15 from '../assets/img/remedios/15.png';
import img16 from '../assets/img/remedios/16.png';
import img17 from '../assets/img/remedios/17.png';
import img18 from '../assets/img/remedios/18.png';
import img19 from '../assets/img/remedios/19.png';
import img20 from '../assets/img/remedios/20.png';

// Definição dos produtos
const JsonProdutos = [
  {
    id: 1,
    nomeProduto: 'Dipirona Sódica 500mg Genérico EMS 10 Comprimidos',
    descricao:
      'Dipirona Sódica 500mg EMS é um medicamento analgésico e antitérmico, sendo utilizado no alívio da dor e da febre.',
    especificacao:
      'Este medicamento não deve ser utilizado por mulheres grávidas sem orientação médica ou do cirurgião-dentista. Informe imediatamente seu médico em caso de suspeita de gravidez.',
    preco: '12.75',
    precoAntigo: '17.75',
    subtitulo: 'Remédio para dores',
    imagemProduto: remedioImg,
    categoria: 'Sem receita',
  },
  {
    id: 2,
    nomeProduto: 'Cimegripe 400mg Cimed 20 Cápsulas',
    descricao:
      'Cimegripe 400mg Cimed é utilizado para tratamento dos sintomas de gripes e resfriados como congestão nasal, coriza, febre, dores de cabeça e dores musculares.',
    especificacao:
      'Este medicamento é contraindicado para pacientes com hipersensibilidade conhecida aos componentes da fórmula, bem como a qualquer outro medicamento derivado das pirazolonas.',
    preco: '12.90',
    precoAntigo: '17.90',
    subtitulo: 'Remédio para gripes e resfriados',
    imagemProduto: img2,
    categoria: 'Sem receita',
  },
 {
    id: 3,
    nomeProduto: 'Analgésico Dorflex Sanofi 50 Comprimidos',
    descricao:
      'O Analgésico Dorflex Sanofi é utilizado para o tratamento de dores no corpo, associadas à contraturas musculares, processos traumáticos ou inflamatórios.',
    especificacao:
      'Este medicamento é contraindicado para pacientes com insuficiência renal grave, distúrbios hematológicos, úlcera péptica, glaucoma de ângulo fechado, miastenia gravis e em pacientes que apresentaram reações alérgicas a qualquer um dos componentes da fórmula.',
    preco: '26.90',
    precoAntigo: '31.90',
    subtitulo: 'Remédio para dores musculares',
    imagemProduto: img3,
    categoria: 'Sem receita',
  },
  {
    id: 4,
    nomeProduto: 'Xarope Vick Guaifenesina 44E 120ml',
    descricao:
      'Xarope Vick Guaifenesina é expectorante que alivia a tosse que acompanha gripes e resfriados e alivia a tosse seca e com catarro.',
    especificacao:
      'Este medicamento é contraindicado para pacientes com hipersensibilidade conhecida aos componentes da fórmula, bem como a pacientes com úlcera péptica ativa ou história de úlcera péptica recorrente.',
    preco: '30.90',
    precoAntigo: '35.90',
    subtitulo: 'Remédio para tosse',
    imagemProduto: img4,
    categoria: 'Com receita',
  },
  {
    id: 5,
    nomeProduto: 'Pastilhas para Garganta Strepsils Mel e Limão 8 Pastilhas',
    descricao:
      'Pastilhas para Garganta Strepsils Mel e Limão é um medicamento analgésico e anti-inflamatório, indicado para aliviar dor de garganta.',
    especificacao:
      'Este medicamento não deve ser utilizado por pacientes com hipersensibilidade conhecida aos componentes da fórmula, bem como a pacientes com diabetes mellitus, úlcera péptica ativa ou história de úlcera péptica recorrente.',
    preco: '14.47',
    precoAntigo: '19.47',
    subtitulo: 'Remédio para dor de garganta',
    imagemProduto: img5,
    categoria: 'Sem receita',
  },
  {
    id: 6,
    nomeProduto:
      'Losartana Potássica Medley 50mg, caixa com 30 comprimidos revestidos',
    descricao:
      'Losartana Potássica é um medicamento para tratar hipertensão (pressão alta) ou doença conhecida como insuficiência cardíaca (enfraquecimento do coração).',
    especificacao:
      'Este medicamento é contraindicado para pacientes com hipersensibilidade conhecida aos componentes da fórmula e em pacientes com histórico de angioedema relacionado a tratamento prévio com inibidores da ECA (enzima conversora de angiotensina) e pacientes com estenose bilateral da artéria renal ou estenose da artéria renal em rim único.',
    preco: '2.00',
    precoAntigo: '7.00',
    subtitulo: 'Remédio para pressão alta',
    imagemProduto: img6,
    categoria: 'Com receita',
  },
  {
    id: 7,
    nomeProduto: 'Ibuprofeno 600mg Genérico Prati Donaduzzi 20 Comprimidos',
    descricao:
      'Ibuprofeno 600mg Genérico Prati Donaduzzi 20 Comprimidos combate inflamação, dor e febre, sendo indicado para aliviar sintomas de osteoartrite, artrite reumatoide, reumatismo.',
    especificacao:
      'Este medicamento é contraindicado para pacientes com hipersensibilidade ao ibuprofeno ou a qualquer componente da fórmula, bem como para pacientes com úlcera péptica, antecedentes de sangramento ou perfuração gastrointestinal relacionados a tratamentos anteriores com anti-inflamatórios não esteroidais (AINEs), insuficiência hepática grave, insuficiência renal grave e insuficiência cardíaca grave.',
    preco: '8.50',
    precoAntigo: '13.45',
    subtitulo: 'Remédio anti-inflamatório',
    imagemProduto: img7,
    categoria: 'Sem receita',
  },
  {
    id: 8,
    nomeProduto: 'Loratamed 10mg Cimed 12 Comprimidos',
    descricao:
      'Loratamed 10mg Cimed (loratadina) é um anti-histamínico utilizado para alívio de sintomas associados a rinite alérgica como coriza, coceira nasal, espirros, ardência.',
    especificacao:
      'Este medicamento é contraindicado para pacientes com hipersensibilidade à loratadina ou a qualquer componente da fórmula.',
    preco: '8.50',
    precoAntigo: '13.50',
    subtitulo: 'Remédio para alergia',
    imagemProduto: img8,
    categoria: 'Sem receita',
  },
  {
    id: 9,
    nomeProduto: 'Soro Fisiológico Ever Care 500ml',
    descricao:
      'Soro Fisiológico é uma solução salina esterilizada utilizada para diversas finalidades como a desidratação, além de usos para limpeza da pele, dos olhos e nariz, queimaduras ou feridas e também para fazer nebulizações.',
    especificacao:
      'Este produto é contraindicado para pacientes com hipersensibilidade aos componentes da fórmula.',
    preco: '7.90',
    precoAntigo: '12.99',
    subtitulo: 'Solução salina esterilizada',
    imagemProduto: img9,
    categoria: 'Sem receita',
  },
  {
    id: 10,
    nomeProduto: 'Lacrifilm 10ml Colírio',
    descricao:
      'O Lacrifilm Colírio é indicado para o tratamento de problemas oftalmológicos como ressecamento nos olhos, ardência, coceira, exposição ao sol, vento e mar.',
    especificacao:
      'Este medicamento é contraindicado para pacientes com hipersensibilidade a qualquer um dos componentes da fórmula.',
    preco: '28.99',
    precoAntigo: '33.99',
    subtitulo: 'Colírio para problemas oculares',
    imagemProduto: img10,
    categoria: 'Sem receita',
  },
  {
    id: 11,
    nomeProduto: 'Laxante Fitoterápico Lacto-Purga Blister 6 Comprimidos',
    descricao:
      'Lacto-Purga (bisacodil) é um laxante de ação local indicado para tratamento da prisão de ventre.',
    especificacao:
      'Este medicamento é contraindicado em casos de hipersensibilidade aos componentes da fórmula e em casos de obstrução intestinal, apendicite, dor abdominal de causa desconhecida, desidratação grave com perda de água e eletrólitos, hemorragia retal não diagnosticada e dor abdominal intensa associada com náusea e vômito que pode ser indicativo de condições graves.',
    preco: '5.90',
    precoAntigo: '10.79',
    subtitulo: 'Laxante para prisão de ventre',
    imagemProduto: img11,
    categoria: 'Sem receita',
  },
  {
    id: 12,
    nomeProduto: 'Simeticona Gotas 75mg/ml Genérico Cimed 15ml',
    descricao:
      'Simeticona Gotas 75mg/ml Genérico Cimed com 15ml é indicado para tratar pacientes com excesso de gases no aparelho digestivo e aliviar sintomas como desconforto.',
    especificacao:
      'Este medicamento é contraindicado para pacientes com hipersensibilidade a qualquer componente da fórmula.',
    preco: '4.90',
    precoAntigo: '9.90',
    subtitulo: 'Remédio para excesso de gases',
    imagemProduto: img12,
    categoria: 'Sem receita',
  },
  {
    id: 13,
    nomeProduto: 'Relaxante Muscular Miorrelax 10 Comprimidos',
    descricao:
      'Relaxante Muscular Miorrelax 10 Comprimidos é utilizado para aliviar dores associadas a contraturas musculares, incluindo a dor de cabeça tensional.',
    especificacao:
      'Este medicamento é contraindicado para pacientes com hipersensibilidade a qualquer componente da fórmula e para pacientes com miastenia grave.',
    preco: '4.90',
    precoAntigo: '9.90',
    subtitulo: 'Remédio para dores musculares',
    imagemProduto: img13,
    categoria: 'Sem receita',
  },
  {
    id: 14,
    nomeProduto: 'Glifage 850mg Merck S/A 30 Comprimidos',
    descricao:
      'Glifage 850mg Merck S/A 30 Comprimidos é indicado para tratar a diabetes tipo 2, associado a uma dieta alimentar.',
    especificacao:
      'Este medicamento é contraindicado para pacientes com hipersensibilidade ao cloridrato de metformina ou a qualquer componente da fórmula, com acidose metabólica, com pré-coma diabético, com diabetes complicada com cetoacidose, coma diabético e história de alcoolismo crônico.',
    preco: '29.99',
    precoAntigo: '34.99',
    subtitulo: 'Remédio para diabetes tipo 2',
    imagemProduto: img14,
    categoria: 'Com receita',
  },
  {
    id: 15,
    nomeProduto:
      'Insulina Tresiba Flextouch Novo Nordisk 1 Caneta Descartável 3ml',
    descricao:
      'Insulina Tresiba Flextouch Novo Nordisk 1 Caneta Descartável 3ml é indicada para tratar a diabetes mellitus, reduzindo o nível de açúcar no sangue.',
    especificacao:
      'Este medicamento é contraindicado em casos de hipersensibilidade à insulina degludeca ou a qualquer um dos componentes da fórmula.',
    preco: '14.,00',
    precoAntigo: '15.,00',
    subtitulo: 'Insulina para diabetes mellitus',
    imagemProduto: img15,
    categoria: 'Com receita',
  },
  {
    id: 16,
    nomeProduto: 'Fralda Descartável Pampers Supersec Pacotão M 30 Unidades',
    descricao:
      'Fralda Descartável Pampers é um produto de higiene íntima usado por bebês e crianças.',
    especificacao:
      'Este produto é hipoalergênico e dermatologicamente testado.',
    preco: '36.74',
    precoAntigo: '41.74',
    subtitulo: 'Fraldas para bebês',
    imagemProduto: img16,
    categoria: 'Bebê',
  },
  {
    id: 17,
    nomeProduto: 'Lenços Umedecidos Huggies Puro e Natural 48 Unidades',
    descricao:
      'Lenços Umedecidos Huggies Puro e Natural limpa de forma segura e ajuda a prevenir assaduras.',
    especificacao:
      'Este produto é hipoalergênico e dermatologicamente testado.',
    preco: '15.90',
    precoAntigo: '20.90',
    subtitulo: 'Lenços umedecidos para bebês',
    imagemProduto: img17,
    categoria: 'Higiene',
  },
   {
    id: 18,
    nomeProduto:
      'Gel de Limpeza Facial La Roche-Posay Effaclar Concentrado 300g',
    descricao:
      'Gel de Limpeza Facial La Roche-Posay Effaclar limpa profundamente a pele, reduzindo a oleosidade e lesões acneicas.',
    especificacao:
      'Este produto é indicado para peles mistas a oleosas, podendo ser utilizado de manhã e/ou à noite.',
    preco: '79.90',
    precoAntigo: '84.90',
    subtitulo: 'Gel de limpeza facial',
    imagemProduto: img18,
    categoria: 'Beleza',
  },
  {
    id: 19,
    nomeProduto: 'Hidratante Facial Neutrogena Hydro Boost Water Gel 50g',
    descricao:
      'Hidratante Facial Neutrogena combina uma exclusiva textura ultraleve gel não oleosa, de rápida absorção e refrescante.',
    especificacao:
      'Este produto é hipoalergênico e oil-free, proporcionando uma hidratação eficaz para peles secas e extrasseca.',
    preco: '87.69',
    precoAntigo: '92.69',
    subtitulo: 'Hidratante facial',
    imagemProduto: img19,
    categoria: 'Beleza',
  },
  {
    id: 20,
    nomeProduto: 'Dimorf 10mg Cristália 50 Comprimidos',
    descricao:
      'Dimorf 10mg (sulfato de morfina pentaidratado) atua sobre sistema nervoso central e outros órgãos do corpo proporcionando alívio para dores intensas e crônicas.',
    especificacao:
      'Este medicamento é contraindicado em casos de hipersensibilidade à morfina ou a qualquer componente da fórmula e para pacientes com depressão respiratória grave, insuficiência respiratória, obstrução das vias aéreas, insuficiência hepática grave, glaucoma de ângulo fechado, choque, colapso circulatório, aumento da pressão intracraniana ou traumatismo craniano.',
    preco: '51.59',
    precoAntigo: '56.59',
    subtitulo: 'Analgésico potente',
    imagemProduto: img20,
    categoria: 'Sem receita',
  },
];

export default JsonProdutos;
