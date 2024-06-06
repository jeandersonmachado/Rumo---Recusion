
// Retorna os valores de forma decrescente.
let descendingOrder = "";              // Variável criada e iniciada como string.

function countDown(number){            // Função com o parâmetro "number", que define o valor inicial para a ordem decrescente.
    descendingOrder += number;         // A cada loop a variável será concatenada com o valor atual de "number".
    if(number <= 1){                   // Vericação para certificar q a função será retornada quando o valor de "number" for <=1, caso contrário, ficaria infinitamente sendo decrescido 1. 
        console.log(descendingOrder)   // Mostra o valor final no console
    }
    else {
        return countDown(number - 1)   // retorna a própria função subtraindo o valor em 1 a cada loop até que o valor de "number" seja 1.
    }
}

countDown(10);

////////////////////////////////////////

// Retorna os valores de forma crescente.
let ascendingNumber = "";

function countUp(number){
    ascendingNumber += number;
    if(number >=10 ){
        console.log(ascendingNumber)
    }
    else {
        return countUp(number + 1)
    }
}

countUp(1);