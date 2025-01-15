//2) Dado a sequência de Fibonacci, onde se inicia por 0 e 1 e o próximo valor sempre será a 
// soma dos 2 valores anteriores (exemplo: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34...), 
// escreva um programa na linguagem que desejar onde, informado um número, 
// ele calcule a sequência de Fibonacci e retorne uma mensagem avisando 
// se o número informado pertence ou não a sequência.

//IMPORTANTE: Esse número pode ser informado através de qualquer entrada de s
// ua preferência ou pode ser previamente definido no código;

function isFibonacci(num) {
    let a = 0, b = 1;
    let sequence = [a, b];

    while (b <= num) {
        let next = a + b;
        sequence.push(next);
        a = b;
        b = next;
    }

    if (sequence.includes(num)) {
        console.log(`${num} pertence à sequência de Fibonacci. Sequência: ${sequence.join(', ')}`);
    } else {
        console.log(`${num} não pertence à sequência de Fibonacci. Sequência: ${sequence.join(', ')}`);
    }
}

// Exemplo de uso:
let numero = 89; // Substitua este valor pelo número que deseja verificar
isFibonacci(numero);
