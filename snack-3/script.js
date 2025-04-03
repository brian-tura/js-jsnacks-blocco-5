const numbers = [2, 8, 4, 7, 2, 87];

const newNumbers = numbers.map(addition)
console.log(newNumbers);

function addition(num){
    return num+1;
}

// Crea un nuovo array in cui tutti i numeri siano incrementati di 1
// Risultato: [3, 9, 5, 8, 3, 88]