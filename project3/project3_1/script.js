let palindrome = prompt('Введите фразу - палиндром:')
palindrome = palindrome.toLowerCase()

let arrPalindrome = palindrome.split('')


for (let i = 0; i < arrPalindrome.length; i++) {
    if (arrPalindrome[i] == ' ') {
        arrPalindrome.splice(i, 1)
    }
}
// console.log(arrPalindrome)

let arrPalindrome2 = arrPalindrome;

// for (let i = 0, j = arrPalindrome.length-1 ; i = j; i++, j--) {

//     arrPalindrome2[i] = arrPalindrome[j]
// }
// console.log(arrPalindrome2)

var temp;
for (let i = 0, j = arrPalindrome.length - 1; i < j; i++, j--) {
    temp = arrPalindrome2[j];
    arrPalindrome2[j] = arrPalindrome[i];
    arrPalindrome2[i] = temp;
}
// console.log(arrPalindrome2)

var answer = true;

for (let i = 1; i <= arrPalindrome.length; i++) {
    // console.log(i)
    // console.log(arrPalindrome[arrPalindrome.length - i])
    // console.log(arrPalindrome2[i - 1])

    if (arrPalindrome2[i - 1] != arrPalindrome[arrPalindrome.length - i]) {
        answer = false;
    }

}

if (answer) {
    alert('Это Палиндром!');
} else {
    alert('Это не Палиндром!');
}