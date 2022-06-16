let inputStr = prompt('Введите строку с разделителями ";" :')

while (typeof(inputStr) != 'string'|| inputStr.trim() == '' || inputStr.indexOf(';') === -1) {
    inputStr = prompt('Некорректный ввод\nВведите строку с разделителями ";"')
}

let array = inputStr.split(';')

for (let i = 0; i < array.length; i++) {
    
    

    if (array[i].length) 
        {
            if(array[i].trim()==''){
                continue;
            }

            document.write(`${array[i]} <br>`);

        } 
    
}