let str = prompt('Введите строку для преобразования в транслит:');

while (typeof (str) != 'string' || str.trim() == '') {
    str = prompt('Введите строку Нормально!!!');
}

let arrVariable = [];
var strGlobal = '';

arrVariable['А'] = 'A';
arrVariable['а'] = 'a';
arrVariable['Б'] = 'B';
arrVariable['б'] = 'b';
arrVariable['В'] = 'V';
arrVariable['в'] = 'v';
arrVariable['Г'] = 'G';
arrVariable['г'] = 'g';
arrVariable['Д'] = 'D';
arrVariable['д'] = 'd';
arrVariable['Е'] = 'E';
arrVariable['е'] = 'e';
arrVariable['Ё'] = 'Yo';
arrVariable['ё'] = 'yo';
arrVariable['Ж'] = 'Zh';
arrVariable['ж'] = 'zh';
arrVariable['З'] = 'Z';
arrVariable['з'] = 'z';
arrVariable['И'] = 'I';
arrVariable['и'] = 'i';
arrVariable['Й'] = 'J';
arrVariable['й'] = 'j';
arrVariable['К'] = 'K';
arrVariable['к'] = 'k';
arrVariable['Л'] = 'L';
arrVariable['л'] = 'l';
arrVariable['М'] = 'M';
arrVariable['м'] = 'm';
arrVariable['Н'] = 'N';
arrVariable['н'] = 'n';
arrVariable['О'] = 'O';
arrVariable['о'] = 'o';
arrVariable['П'] = 'P';
arrVariable['п'] = 'p';
arrVariable['Р'] = 'R';
arrVariable['р'] = 'r';
arrVariable['С'] = 'S';
arrVariable['с'] = 's';
arrVariable['Т'] = 'T';
arrVariable['т'] = 't';
arrVariable['У'] = 'U';
arrVariable['у'] = 'u';
arrVariable['Ф'] = 'F';
arrVariable['ф'] = 'f';
arrVariable['Х'] = 'X';
arrVariable['х'] = 'x';
arrVariable['Ц'] = 'C';
arrVariable['ц'] = 'c';
arrVariable['Ч'] = 'Ch';
arrVariable['ч'] = 'ch';
arrVariable['Ш'] = 'Sh';
arrVariable['ш'] = 'sh';
arrVariable['Щ'] = 'Shh';
arrVariable['щ'] = 'shh';
arrVariable['Ъ'] = '"';
arrVariable['ъ'] = '"';
arrVariable['Ы'] = 'Y\'';
arrVariable['ы'] = 'y\'';
arrVariable['Ь'] = '\'';
arrVariable['ь'] = '\'';
arrVariable['Э'] = 'E\'';
arrVariable['э'] = 'e\'';
arrVariable['Ю'] = 'Yu';
arrVariable['ю'] = 'yu';
arrVariable['Я'] = 'Ya';
arrVariable['я'] = 'ya';

for (let key = 0; key < str.length; key++) {
    if (arrVariable[str[key]] !== undefined) {
        strGlobal += arrVariable[str[key]];
    }
    else
        strGlobal += str[key];

}

document.write(strGlobal);
console.log(strGlobal);
