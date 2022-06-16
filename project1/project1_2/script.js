let multTable = ''

for (let index_i = 1; index_i <= 9; index_i++) {
    
    for (let index_j = 1; index_j <= 9; index_j++) {

        multTable += index_i * index_j + "\t";

    }
    multTable += '\n';
}

console.log(multTable);