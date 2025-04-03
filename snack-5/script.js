const nums = [2, 8, 4, 7, 12, 87];

const even = nums.filter(isEven);
console.log(even);

function isEven(numbers){
    return numbers % 2 == 0;
}

// Crea un array a partire dall'array nums, che abbia solo i numeri pari
// Risultato: [2, 8, 4, 12]