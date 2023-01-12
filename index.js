const brand1 = "BMW";
const model1 = "X6";
const year1 = 2021;
const km1 = 87421;
const zeroKM1 = km1 == 0;
const color1 = "silver";
//variables car01

const brand2 = "Mercedes";
const model2 = "EQS";
const year2 = 2022;
const km2 = 22421;
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
const km4 = 42454;
const zeroKM4 = km3 == 0;
const color4 = "black";

//variables car03

let cars = [
  {
    brand: `BMW`,
    model: `X6`,
    price: 67990,
    year: 2021,
    km: 87421,
    newCar: false,
    color1: "silver",
  },
  {
    brand: `Mercedes`,
    model: `EQS`,
    price: 92480,
    year: 2022,
    km: 22421,
    newCar: false,
    color1: "gray",
  },
  {
    brand: `Audi`,
    model: `Q8`,
    price: 82254,
    year: 2023,
    km: 0,
    newCar: true,
    color1: "black",
  },
  {
    brand: `Porsche`,
    model: `911`,
    price: 102990,
    year: 2019,
    km: 42452,
    newCar: false,
    color1: "black",
  },
];

function allCars() {
  for (let car of cars) {
    for (property in car) {
      console.log(`${property}: ${car[property]}`);
    }

    console.log("----------------------");
  }
  return;
}

allCars();

function carsSearch(object) {
  return console.log(cars[object]);
}

const btnMobile = document.getElementById("btn-mobile");

const toggleMenu = () => {
  const nav = document.getElementById("nav");
  nav.classList.toggle("active");
};

const search = () => {};
