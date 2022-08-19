// IMPORTANTE: As funções "gets" e "print" são acessíveis globalmente e têm as seguintes funcionalidades: 
// - "gets()" : lê UMA linha com dados de entrada (inputs) do usuário;
// - "print()": imprime um texto de saída (output) e pula uma linha ("\n") automaticamente;
// - "split()": divide uma String em um Array de Strings;

// Abaixo segue um exemplo de código que você pode ou não utilizar:

let line = gets().split(" ");
let A = parseInt(line[0]);
let B = parseInt(line[1]);

//TODO: Complete os espaços em branco com uma possível solução para o desafio:

let total = A + B; 
print("X = " + total);
