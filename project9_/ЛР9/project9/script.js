var ticket = null;
var hotel = null;
var visa = null;

var ticketForm = document.forms.ticket;
var hotelForm = document.forms.hotel;
var visaForm = document.forms.visa;

function getTicket() {
    return new Promise((resolve, reject) => {
        console.log('Начало бронирования билета');
        let ticket = {};
        setTimeout(() => {
            ticket.name = ticketForm.elements.name.value;
            ticket.surname = ticketForm.elements.surname.value;
            ticket.gender = ticketForm.elements.gender.value;
            ticket.passport = ticketForm.elements.passport.value;
            ticket.flight = ticketForm.elements.flight.value;
            ticket.place = ticketForm.elements.place.value;

            resolve(ticket);
        }, 2000);
    });
}

function getHotel() {
    return new Promise((resolve, reject) => {
        console.log('Начало бронирования отеля');
        let hotel = {};
        setTimeout(() => {
            hotel.name = hotelForm.elements.name.value;
            hotel.surname = hotelForm.elements.surname.value;
            hotel.gender = hotelForm.elements.gender.value;
            hotel.passport = hotelForm.elements.passport.value;
            hotel.room = hotelForm.elements.room.value;

            resolve(hotel);
        }, 2000);
    });
}

function getVisa(ticket, hotel) {
    return new Promise((resolve, reject) => {
        console.log('Начало получения визы');
        let visa = {};
        setTimeout(() => {
            if (ticket.name === hotel.name) {
                visa.name = ticket.name;
            } else {
                reject(new Error("Имя в билете и в отеле не совпадает"));
            }

            if (ticket.surname === hotel.surname) {
                visa.surname = ticket.surname;
            } else {
                reject(new Error("Фамилия в билете и в отеле не совпадает"));
            }

            if (ticket.gender === hotel.gender) {
                visa.gender = ticket.gender;
            } else {
                reject(new Error("Пол в билете и в отеле не совпадает"));
            }

            if (ticket.passport === hotel.passport) {
                visa.passport = ticket.passport;
            } else {
                reject(new Error("Паспорт в билете и в отеле не совпадает"));
            }
            visa.flightTicket = ticket.flight;
            visa.placeTicket = ticket.place;

            visa.roomHotel = hotel.room;
            resolve(visa);
        }, 2000);
    });
}

async function orderTicket(e) {
    e.preventDefault();
    // console.log('click');
    try {
        ticket = await getTicket();
        console.log(ticket);
    } catch (error) {
        console.error(error);
    }
    visaForm.elements.nameTicket.value = ticket.name;
    visaForm.elements.surnameTicket.value = ticket.surname;
    visaForm.elements.genderTicket.value = ticket.gender;
    visaForm.elements.passportTicket.value = ticket.passport;
    visaForm.elements.flightTicket.value = ticket.flight;
    visaForm.elements.placeTicket.value = ticket.place;
    console.log('Конец бронирования билета');
}

async function orderHotel(e) {
    e.preventDefault();
    try {
        hotel = await getHotel();
        console.log(hotel);
    } catch (error) {
        console.error(error);
    }
    visaForm.elements.nameHotel.value = hotel.name;
    visaForm.elements.surnameHotel.value = hotel.surname;
    visaForm.elements.genderHotel.value = hotel.gender;
    visaForm.elements.passportHotel.value = hotel.passport;
    visaForm.elements.roomHotel.value = hotel.room;
    console.log('Конец бронирования отеля');
}
async function orderVisa(e) {
    e.preventDefault();
    if (hotel === null || ticket === null) {
        try {
            ticket = getTicket();
            hotel = getHotel();
        } catch (error) {
            console.error(error);
        }
    }

    try {
        visa = await getVisa(await ticket, await hotel);
        console.log(visa);
        alert(`Добро пожаловать в Арстоцку, ${visa.name}`);
    } catch (error) {
        console.error(error);
        alert(`ОТКАЗАНО: ${error}`);
    }
    console.log('Конец получения визы');
}
ticketForm.elements.button.addEventListener('click', orderTicket);
hotelForm.elements.button.addEventListener('click', orderHotel);
visaForm.elements.button.addEventListener('click', orderVisa);