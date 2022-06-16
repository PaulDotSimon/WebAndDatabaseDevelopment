
var Client = prompt(`Введите своё имя`);
while (Client == null || Client == '' || Client == false || isNaN(Client) == false) {
    var Client = prompt(`Введите своё имя`);
}
var Hotel = prompt(`Введите имя отеля`);
while (Client == null || Client == '' || Client == false || isNaN(Client) == false) {
    var Hotel = prompt(`Введите имя отеля`);
}

async function getClient(Client) {
    console.log('start getClient')
    return new Promise((resolve, reject) => {
        setTimeout(function () {
            let success = true;
            if (success) {
                resolve({ id: 1, ClientName: `${Client}` })
            } else {
                reject(`чёт клиент из вас не очень`);
            }
        }, 1000);
    });
}

async function getHotel(Hotel_name) {
    return new Promise((resolve, reject) => {
        setTimeout(function () {
            let success = true;
            if (success) {
                resolve({ id: 10, Hotel_id: 1, Hotel_name: Hotel_name });
            } else {
                reject(`чёт отель у вас моё почтение жаль проживающих с вами тараканов`);
            }
        }, 1000);
    });
}


async function getVisa(ClientName, Client_id, Hotel_id, Hotel_name) {
    return new Promise((resolve, reject) => {
        setTimeout(function () {
            let success = true;
            if (success) {
                resolve({ id: 100, Client_id: Client_id, ClientName: ClientName, Hotel_id: Hotel_id, Hotel_name: Hotel_name }, );
            } else {
                reject(`чёт с визой не вышло, подайте документы ещё раз примерно через 200 лет`);
            }
        }, 1000);
    });
}

(async function main() {
    try {
        let customer = getClient(Client);
        let clienthotel = getHotel(Hotel);
        let cus = await customer;
        let hot = await clienthotel;
        console.log (cus);
        console.log (hot);

        let visa = await Promise.all([cus, hot]).then(value => { return getVisa(cus.ClientName, cus.id, hot.Hotel_id, hot.Hotel_name) });
        console.log(visa);
        document.write(`ID заказа ${visa.id}, ID отеля ${visa.Hotel_id}, ID клиента ${visa.Client_id}, имя клиента ${visa.ClientName}, имя отеля ${visa.Hotel_name}`);
    } catch (err) {
        console.error(err);
    } finally {

    }
})();
