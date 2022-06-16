

let pScore=0;
let Kletka;

function gameStart() {
    // window.location.reload();
    fMole();
    setInterval(fMole, 1500)
}

function fMole() {
    rand= Math.floor(Math.random() * 9) + 1;
    console.log(rand);
    Kletka=rand;
    let Mole=document.getElementById(`pole${rand}`);
    Mole.innerHTML=("<img src=\"krot.png\">");
    setTimeout(cleaner, 1000);
}

function cleaner() {
   if (Kletka!=0){ 
    let Mole1 = document.getElementById(`pole${Kletka}`);
    Mole1.innerHTML=("<img src=\"nora.png\">");
    Kletka=0}
}

function f(el) {
    if (`pole${Kletka}` == el.id){
        pScore++
        ScoreBoardElement = document.getElementById("pScoreBoard");
    ScoreBoardElement.innerHTML = `Счет: ${pScore}`;
    cleaner();
    }
    else{
        if(pScore>0){
        pScore--;
        ScoreBoardElement = document.getElementById("pScoreBoard");
        ScoreBoardElement.innerHTML = `Счет: ${pScore}`;}
    }
    
}

function endGame() {
    if (pScore < 8) {
        alert(`Ваши очки: ${pScore} Вы проиграли!`);
        location.reload();
    }
    else {
        alert(`Ваши очки: ${pScore} Вы выиграли!`);
        location.reload();
    }
}

setTimeout(endGame, 20000);