while (true) {
    var hisName=(prompt('Введите ваше имя:'))
    if (hisName!=='') {
        if(confirm(`Ваше имя "${hisName}"?`)){
            alert(`Привет, ${hisName}`);
            break;
        }
    }
}