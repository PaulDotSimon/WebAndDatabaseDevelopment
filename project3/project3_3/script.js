let aArray = [10]
let bArray = [10, [30], 60]

aArray = myFunc(bArray)
console.log(aArray);

function myFunc(bArray_link) {
    let bArrCopy

    if (Array.isArray(bArray_link)) {
        bArrCopy = bArray_link.slice(0)

        for (let i = 0; i < bArrCopy.length; i++) {
            bArrCopy[i] = myFunc(bArrCopy[i])
        }

        return bArrCopy
    }
    else if (typeof arr === 'object') {
        throw 'Массив невозможно клонировать!'
    }
    else {
        return bArray_link
    }
}