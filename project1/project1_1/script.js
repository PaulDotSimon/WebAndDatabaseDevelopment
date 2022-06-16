var date = (prompt('Сколько дней прошло?'))

let daysPassed = Number(date)

let daysLeft = Number(100 - date)

if ((daysPassed / daysPassed !== 1) || (!Number.isInteger(daysPassed)) || (daysPassed > 100)) {
    alert("Введите корректное число. Целочисленное значение, равное 100 или меньше")
}
//------------------------------------------------------------------------------------------
if (daysLeft === 1) {
    alert("Остался 1 день")
} 

else if (((daysLeft > 4) && (daysLeft < 21)) || ((daysLeft % 10 === 5) || (daysLeft % 10 === 6) || (daysLeft % 10 === 7) || (daysLeft % 10 === 8) || (daysLeft % 10 === 9) || (daysLeft % 10 === 0))) {
    alert(`Осталось ${daysLeft} дней`)
}

else if (daysLeft % 10 === 1) {
    alert(`Осталось ${daysLeft} день`)
} 

else if ((daysLeft % 10 === 2) || (daysLeft % 10 === 3) || (daysLeft % 10 === 4)) {
    alert(`Осталось ${daysLeft} дня`)
}

