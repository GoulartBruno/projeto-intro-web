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

const car01 = {
  brand: `BMW`,
  model: `X6`,
  price: 67990,
  year: 2021,
  km: 10214,
  newCar: false,
};

const car02 = {
  brand: `Mercedes`,
  model: `EQS`,
  price: 42450,
  year: 2018,
  km: 87421,
  newCar: false,
};

const car03 = {
  brand: `Audi`,
  model: `Q8`,
  price: 56590,
  year: 2023,
  km: 0,
  newCar: true,
};

const allCars = [];

allCars.push(car01, car02, car03);

function newProperties(value1, value2, value3) {
  if (value1 === true) {
    car01.financeable = true;
  } else {
    alert(`The ${car01[`brand`]} ${car01[`model`]} car isn't financeable.`);
  }
  if (value2 === true) {
    car02.financeable = true;
  } else {
    alert(`The ${car02[`brand`]} ${car02[`model`]} car isn't financeable.`);
  }

  if (value3 === true) {
    car03.financeable = true;
  } else {
    alert(`The ${car03[`brand`]} ${car03[`model`]} car isn't financeable.`);
  }

  return;
}

newProperties(true, false, true);

console.table(allCars);
