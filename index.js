/*
const brand1 = "BMW";
const model1 = "X6";
const year1 = 2021;
const km1 = 10214;
const zeroKM1 = km1 == 0;
//variables car01

const brand2 = "Mercedes";
const model2 = "EQS";
const year2 = 2018;
const km2 = 87421;
const zeroKM2 = km2 == 0;
//variables car02

const brand3 = "Audi";
const model3 = "Q8";
const year3 = 2023;
const km3 = 0;
const zeroKM3 = km3 == 0;
//variables car03
*/

let cars = [
  {
    brand: `BMW`,
    model: `X6`,
    price: 67990,
    year: 2021,
    km: 10214,
    newCar: false,
  },
  {
    brand: `Mercedes`,
    model: `EQS`,
    price: 42450,
    year: 2018,
    km: 87421,
    newCar: false,
  },
  {
    brand: `Audi`,
    model: `Q8`,
    price: 56590,
    year: 2023,
    km: 0,
    newCar: true,
  },
  {
    brand: `Porsche`,
    model: `911`,
    price: 154900,
    year: 2019,
    km: 21214,
    newCar: false,
  },
  {
    brand: `Audi`,
    model: `A3`,
    price: 25254,
    year: 2017,
    km: 84510,
    newCar: false,
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

objectSearch(3);

function arrayCars(array, string) {}
