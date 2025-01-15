/*
5) Escreva um programa que inverta os caracteres de um string.

IMPORTANTE:
a) Essa string pode ser informada através de qualquer entrada de sua preferência ou pode ser previamente definida no código;
b) Evite usar funções prontas, como, por exemplo, reverse;

*/

function inverteString(str) {
    let invertida = '';
    for (let i = str.length - 1; i >= 0; i--) {
        invertida += str[i];
    } 
    return invertida;
    }


    let stringOriginal = "Hello World!";
    let stringInvertida = inverteString(stringOriginal);
    console.log("String Original ", stringOriginal);
    console.log("String Invertida ", stringInvertida);


