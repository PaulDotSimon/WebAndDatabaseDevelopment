let myText = 'dfjasdf kljdasf kjdsfs ijj234 -0234 simonenko.0418@gmail.com sdkfj2f 2i3rj oi2j3rdsf k238942 20394823941 ht 23e kukareku@mail.ru http://example.example/example/example.example?param1=value1&param2=value2 sdfsdf2,, 2w, https://www.example.example'

let setLink = new RegExp(/\b(https?:\/\/)\b[^\s\Z]+/g)

let resultLink= myText.match(setLink)

console.log(resultLink)

let resultEmail = myText.match(/[\da-z_\-.]+@[a-z]+\.[a-z]+/g)
console.log(resultEmail)

let teststr='ikjjl-joijo';

let test = teststr.match(/[\-]/g)

let Regg = new RegExp(/[\-]/g)
let reggRes = Regg.test(teststr)
console.log(reggRes)

// console.log(test)
//  if (test != 0){
//      console.log(true)
//  }