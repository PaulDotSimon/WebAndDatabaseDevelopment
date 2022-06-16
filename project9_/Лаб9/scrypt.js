const name_mass = [
  { id: 1, name: "Усачёв" },
  { id: 2, name: "Горбачёв" },
  { id: 3, name: "Сталин" },
  { id: 4, name: "Петрушкин" },
  { id: 5, name: 'Кислов' },
  { id: 6, name: 'Иванович' }];
const house_mass = [
  { id: 1, name: "Пять звёзд" },
  { id: 2, name: "Четыре звезды" },
  { id: 3, name: "Три звезды" },
  { id: 4, name: "Две звезды" },
  { id: 5, name: 'Одна звезда' },
  { id: 6, name: 'Курятник' }
];

for (let i = 0; i < house_mass.length; i++) {
  let option = document.createElement("option");
  option.id = `${house_mass[i].id}`
  option.innerHTML = house_mass[i].name;
  document.getElementById("house").appendChild(option);
}
for (let i = 0; i < name_mass.length; i++) {
  let option2 = document.createElement("option");
  option2.id = `${name_mass[i].id}`
  option2.innerHTML = name_mass[i].name;
  document.getElementById("names").appendChild(option2);
}


async function getName() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let success = true;
      if (success) {
        let select = document.getElementById("names");
        let name = name_mass.find(item => item.id == select.options.selectedIndex + 1)
        console.log(name);
        resolve(name)
      } else reject("Ошибка имени")
    }, 1000);
  });
}

async function getHotel() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let success = true;
      if (success) {
        let select = document.getElementById("house");
        let hotel = house_mass.find(item => item.id == select.options.selectedIndex + 1)
        console.log(hotel);
        resolve(hotel);
      } else {
        reject('Ошибка отеля');
      }
    }, 1000);
  });
}

async function getVisa(names, hotels, amount) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let success = true;
      if (success) {
        resolve({ id: amount, name: names.name, hotel: hotels.name })
      } else {
        reject('Ошибка визы');
      }
    }, 1000);
  });
}
var visasAmount = 0;
async function main() {
  try {
    visasAmount++;
    let name = getName();
    let hotel = getHotel();
    let visa = await getVisa((await name), (await hotel), visasAmount);
    console.log(visa);
  } catch (err) {
    console.error(err);
  } finally {
  }
}
