const brand1 = "BMW";
const model1 = "X6";
const year1 = 2021;
const km1 = 87.421;
const zeroKM1 = km1 == 0;
const color1 = "silver";
//variables car01

const brand2 = "Mercedes";
const model2 = "EQS";
const year2 = 2022;
const km2 = 22.421;
const zeroKM2 = km2 == 0;
const color2 = "gray";
//variables car02

const brand3 = "Audi";
const model3 = "Q8";
const year3 = 2023;
const km3 = 0;
const zeroKM3 = km3 == 0;
const color3 = "black";
//variables car03

const brand4 = "Porshe";
const model4 = "911";
const year4 = 2019;
const km4 = 42.454;
const zeroKM4 = km3 == 0;
const color4 = "black";

//variables car03

let cars = [
  {
    img: "./images/bmw-X6-2021.png",
    brand: `BMW`,
    model: `X6`,
    price: "$67.990",
    year: 2021,
    km: 87421,
    newCar: "Used",
    color: "silver",
    tramission: "Automatic Transmission",
  },
  {
    img: "./images/Mercedes-EQS-2022.png",
    brand: `Mercedes`,
    model: `EQS`,
    price: "$92.480",
    year: 2022,
    km: 22421,
    newCar: "Used",
    color: "Gray",
    tramission: "Automatic Transmission",
  },
  {
    img: "./images/Audi-Q8-2018.png",
    brand: `Audi`,
    model: `Q8`,
    price: "$92.480",
    year: 2023,
    km: 0,
    newCar: "New",
    color: "Black",
    tramission: "Automatic Transmission",
  },
  {
    img: "./images/Porshe-911-2019.png",
    brand: `Porsche`,
    model: `911`,
    price: "$102.990",
    year: 2019,
    km: 42452,
    newCar: "Used",
    color: "Black",
    tramission: "Automatic Transmission",
  },
  {
    img: "./images/golf-2019.png",
    brand: `Volkswagen`,
    model: `Golf`,
    price: "$17.599",
    year: 2019,
    km: 42452,
    newCar: "Used",
    color: "Black",
    tramission: "Automatic Transmission",
  },
  {
    img: "./images/corrola-2022.png",
    brand: `Toyota`,
    model: `Corolla`,
    price: "$27.990",
    year: 2022,
    km: 3000,
    newCar: "Used",
    color: "Black",
    tramission: "Automatic Transmission",
  },
  {
    img: "./images/corsa-2015.png",
    brand: `Opel`,
    model: `Corsa`,
    price: "$11.950",
    year: 2015,
    km: 43401,
    newCar: "Used",
    color: "Gray",
    tramission: "Automatic Transmission",
  },
  {
    img: "./images/audi-Q3.png",
    brand: `Audi`,
    model: `Q3`,
    price: "$49.950",
    year: 2022,
    km: 11850,
    newCar: "Used",
    color: "White",
    tramission: "Automatic Transmission",
  },
  {
    img: "./images/volwswagen-sharan.png",
    brand: `Volkswagen`,
    model: `Sharan`,
    price: "$12.999",
    year: 2016,
    km: 233000,
    newCar: "Used",
    color: "Black",
    tramission: "Automatic Transmission",
  },
  {
    img: "./images/peugeot-508.png",
    brand: `Peugeot`,
    model: `508`,
    price: "$28.489",
    year: 2020,
    km: 79824,
    newCar: "Used",
    color: "Black",
    tramission: "Automatic Transmission",
  },
];
/*
function allCars() {
  for (let car of cars) {
    for (property in car) {
      console.log(`${property}: ${car[property]}`);
    }

    console.log("----------------------");
  }
  return;
}

console.log(allCars(cars));*/

function carsSearch(object, carName) {
  let carroEncontrado = "";
  for (let i in object) {
    if (object[i].brand.toLowerCase().includes(carName)) {
      carroEncontrado = object[i].brand;

      console.log(object[i]);
    }
  }
  if (carroEncontrado !== carName) {
    console.log("Carro não encontrado");
  }
}

carsSearch(cars, "mercedes");

const btnMobile = document.getElementById("btn-mobile");

const toggleMenu = () => {
  const nav = document.getElementById("nav");
  nav.classList.toggle("active");
};

const input = document.getElementById("car-research");
const container = document.getElementById("cars");
const armazenar = container.innerHTML;

input.addEventListener("input", (e) => {
  let informacao = e.target.value;
  let filterCar = cars.filter((card) => {
    return card.model.toLowerCase().includes(informacao);
  });
  container.innerHTML = "";
  let info = "";
  for (card of filterCar) {
    info += `
    <div class="cars" >  
    <img id="img-car" src=${card.img} >
    <ul id="title-cars">
      <li id="brand">${card.brand}  </li>
      <li id="model">${card.model}  </li>
      <li id="ano">${card.year}  </li>
      <li id="price">${card.price}  </li>
      </ul>
      <ul id="summary-cars">
      <li id="newcar">${card.newCar}  </li>
      <li id="color"><img id="icons-cars" src="./images/color.png" alt="color">${card.color}</li>
      <li id="km"><img id="icons-cars" src="./images/km.png" alt="km">${card.km} Kilometers</li>
      <li id="tramission"><img id="icons-cars" src="./images/tramission.png" alt="transmission">${card.tramission}</li> 
    </ul>
    </div>
    `;
  }
  container.innerHTML += info;
});
