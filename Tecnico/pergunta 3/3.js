/*3) Dado um vetor que guarda o valor de faturamento diário de uma distribuidora, faça um programa, na linguagem que desejar, que calcule e retorne:
• O menor valor de faturamento ocorrido em um dia do mês;
• O maior valor de faturamento ocorrido em um dia do mês;
• Número de dias no mês em que o valor de faturamento diário foi superior à média mensal.

IMPORTANTE:
a) Usar o json ou xml disponível como fonte dos dados do faturamento mensal;
b) Podem existir dias sem faturamento, como nos finais de semana e feriados. Estes dias devem ser ignorados no cálculo da média;
*/

fetch('./dados.json')
    .then(response => response.json())
    .then(data => {
        let menorValor = data[0].valor;
        let maiorValor = data[0].valor;
        let soma = 0;
        let diasComFaturamento = 0;

        data.forEach(dia => {
            if (dia.valor > 0) {
                soma += dia.valor;
                diasComFaturamento++;
            }
            if (dia.valor < menorValor) {
                menorValor = dia.valor;
            }
            if (dia.valor > maiorValor) {
                maiorValor = dia.valor;
            }
        });

        let mediaMensal = soma / diasComFaturamento;
        let diasAcimaDaMedia = data.filter(dia => dia.valor > mediaMensal).length;

        console.log(`Menor valor de faturamento: ${menorValor}`);
        console.log(`Maior valor de faturamento: ${maiorValor}`);
        console.log(`Número de dias com faturamento acima da média: ${diasAcimaDaMedia}`);
    })
    .catch(error => console.error('Erro ao carregar o arquivo JSON:', error));
