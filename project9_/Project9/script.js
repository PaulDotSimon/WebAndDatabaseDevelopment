let client = prompt(`Name: `);

let hotel = prompt(`Hotel: `);

if (client == null || client == '') {var successName = false;}
else{successName = true;}

if (hotel == null || hotel == '') {var successHotel = false;}
else{successHotel = true;}


function getTicket(client) {
    console.log('start getting client')
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            //let success = true;
            if (successName) {
                resolve({ id: 1, name: `${client}` });
            }
            else {
                reject(`The ticket booking operation could not be completed!`);
            }
        }, 1000);
    });
}

function getHotel(hotel) {
    console.log('start getting hotel')
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            //let success = true;
            if (successHotel) {
                resolve({ hotelId: 5, hotelName: `${hotel}` });
            }
            else {
                reject(`The hotel booking operation could not be completed!`);
            }
        }, 1000);
    });
}

async function getVisa(clientId, clientName, hotelId, hotelName) {
    console.log('start getting visa')
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let success = true;
            if (success) {
                resolve({ id: 3, clientName: clientName, clientId: clientId, hotelId: hotelId, hotelName: hotelName });
            }
            else {
                reject(`The visa operation could not be completed!`);
            }
        }, 1000)
    });
}

(async function () {
    try {
        
        let newClient = getTicket(client);
        let newHotel = getHotel(hotel);
        
        let myClient = await newClient;
        let myHotel = await newHotel;

        console.log(myClient)
        console.log(myHotel)

        // let visa = await Promise.all([]).then(func => { return getVisa(myClient.Id, myClient.Name, myHotel.hotelId, myHotel.hotelName) });
        let visa = await getVisa(myClient.id, myClient.name, myHotel.hotelId, myHotel.hotelName);
        document.write(`<style> body{font-size: 30px;}</style>Client ID: ${visa.clientId};<br>Client name: ${visa.clientName};<br><br> Hotel ID: ${visa.hotelId};<br>Hotel name: ${visa.hotelName}<br><br>Visa ID: ${visa.id};`);

    }
    catch (err) {
        console.error(err);
    }
})();