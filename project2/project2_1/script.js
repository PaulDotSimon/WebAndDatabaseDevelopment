var arr = []
const sizeArr = 10

for (let i = 0; i < sizeArr; i++) {

    arr[i] = []

    for (let j = 0; j < sizeArr; j++) {

        arr[i][j] = i * j
    }
}

while (true) {
    let i_i = prompt('Введите первое число:')

    while (isNaN(i_i) || i_i < 1 || i_i >= sizeArr) {
        i_i = prompt(`Значение выходит за пределы массива!\nВведите корректное значение от 1 до ${sizeArr - 1}`)
    }

    let j_j = prompt('Введите второе число:')

    while (isNaN(j_j) || j_j < 1 || j_j >= sizeArr) {
        j_j = prompt(`Значение выходит за пределы массива!\nВведите корректное значение от 1 до ${sizeArr - 1}`)
    }

    alert('Ваш ответ:\n' + i_i +' * '+ j_j +' = '+ arr[i_i][j_j])

    break;
}

let arr = [1,2,3,4,5]
arr.splice(3, 1)

console.log(arr.indexOf(4))
