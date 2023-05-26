// escribe la función max acá
function max(numeros){

    let total = 0;
    for(let i = 0; i < numeros.length; i++) total+=numeros[i];
    return total;

}

console.log(max([1, 3, 2])) // 3
console.log(max([10, 9, 8, 7, 6, 5, 4])) // 10
console.log(max([])) // undefin