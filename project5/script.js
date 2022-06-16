let myTime = new Date();
console.log(myTime);

//let a = funcGetTime();
let myT;


// window.onload = function() {

    myT = setInterval(function() {
        let data = new Date();
        let hours = data.getHours().toString().padStart(2, "0");
        let minut = data.getMinutes().toString().padStart(2, "0");
        let sec = data.getSeconds().toString().padStart(2, "0");

        document.getElementById("time").innerHTML = hours + ":" + minut + ":" + sec;
    });


// }

setTimeout(function() {
    clearInterval(myT)
}, 10000);