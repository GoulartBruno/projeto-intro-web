// const brand1 = "BMW";
// const model1 = "X6";
// const year1 = 2021;
// const km1 = 87.421;
// const zeroKM1 = km1 == 0;
// const color1 = "silver";

// const brand2 = "Mercedes";
// const model2 = "EQS";
// const year2 = 2022;
// const km2 = 22.421;
// const zeroKM2 = km2 == 0;
// const color2 = "gray";

// const brand3 = "Audi";
// const model3 = "Q8";
// const year3 = 2023;
// const km3 = 0;
// const zeroKM3 = km3 == 0;
// const color3 = "black";

// const brand4 = "Porshe";
// const model4 = "911";
// const year4 = 2019;
// const km4 = 42.454;
// const zeroKM4 = km3 == 0;
// const color4 = "black";

//constantes criadas nas primeiras semanas, não usadas durante o restante do projeto

let cars = [
  {
    img: "./images/bmw-X6-2021.png",
    brand: `BMW`,
    model: `X6`,
    price: "$67.990",
    zeroKm: false,
    year: 2021,
    km: 87421,
    newCar: "Used",
    color: "silver",
    tramission: "Automatic Transmission",
    link: "https://www.bmw.de/de/neufahrzeuge/x/x6/2021/bmw-x6-ueberblick.html?&tl=sea-gl-DE_BMW_NEWCARS_X6_GER_BND-mix-miy-G06-sech-G06_BG_X6_PERF-.-e-bmw%20x6-.-.&clc=sea-gl-DE_BMW_NEWCARS_X6_GER_BND-mix-bg06&gaw=sea:11853514842_kwd-1518776526&gclid=Cj0KCQiA-oqdBhDfARIsAO0TrGHfVsB2_qUQT8OxSbT1as7fZguudoWlDJ4OcT2hgFf_U2p8GJ6NWZ8aApquEALw_wcB&gclsrc=aw.ds",
  },
  {
    img: "./images/Mercedes-EQS-2022.png",
    brand: `Mercedes`,
    model: `EQS`,
    price: "$92.480",
    zeroKm: false,
    year: 2022,
    km: 22421,
    newCar: "Used",
    color: "Gray",
    tramission: "Automatic Transmission",
    link: "https://www.mercedes-benz.de/passengercars/mercedes-benz-cars/models/eqs/saloon-v297/explore.html",
  },
  {
    img: "./images/Audi-Q8-2018.png",
    brand: `Audi`,
    model: `Q8`,
    price: "$92.480",
    zeroKm: true,
    year: 2023,
    km: 0,
    newCar: "New",
    color: "Black",
    tramission: "Automatic Transmission",
    link: "https://www.audi.de/de/brand/de/neuwagen/q8/q8.html",
  },
  {
    img: "./images/Porshe-911-2019.png",
    brand: `Porsche`,
    model: `911`,
    price: "$102.990",
    zeroKm: false,
    year: 2019,
    km: 42452,
    newCar: "Used",
    color: "Black",
    tramission: "Automatic Transmission",
    link: "https://www.porsche.com/international/models/911/",
  },
  {
    img: "./images/golf-2019.png",
    brand: `Volkswagen`,
    model: `Golf`,
    price: "$17.599",
    zeroKm: false,
    year: 2019,
    km: 42452,
    newCar: "Used",
    color: "Black",
    tramission: "Automatic Transmission",
    link: "https://www.volkswagen-newsroom.com/de/golf-5440",
  },
  {
    img: "./images/corrola-2022.png",
    brand: `Toyota`,
    model: `Corolla`,
    price: "$27.990",
    zeroKm: false,
    year: 2022,
    km: 3000,
    newCar: "Used",
    color: "Black",
    tramission: "Automatic Transmission",
    link: "https://www.toyota.de/neuwagen/corolla?gclid=CjwKCAiA5Y6eBhAbEiwA_2ZWIcCl_XQFEirIHNGhacc2UlItBQmibMJ3x02qpw1cYmRfWCUDdbTXuxoCp8MQAvD_BwE&gclsrc=aw.ds",
  },
  {
    img: "./images/corsa-2015.png",
    brand: `Opel`,
    model: `Corsa`,
    price: "$11.950",
    zeroKm: false,
    year: 2015,
    km: 43401,
    newCar: "Used",
    color: "Gray",
    tramission: "Automatic Transmission",
    link: "https://www.opel.de/fahrzeuge/corsa-modelle/corsa/uebersicht.html",
  },
  {
    img: "./images/audi-Q3.png",
    brand: `Audi`,
    model: `Q3`,
    price: "$49.950",
    zeroKm: false,
    year: 2022,
    km: 11850,
    newCar: "Used",
    color: "White",
    tramission: "Automatic Transmission",
    link: "https://www.audi.de/de/brand/de/neuwagen/q3/q3.html?csref=sea:cdi:23252601983_kwd-296254339083&gclid=CjwKCAiA5Y6eBhAbEiwA_2ZWIfcICcy_IgnESGBpjrGce62SwpeC9fpoUs0AHN7QqsFxacKUkOSvWRoCLcoQAvD_BwE&gclsrc=aw.ds",
  },
  {
    img: "./images/volwswagen-sharan.png",
    brand: `Volkswagen`,
    model: `Sharan`,
    price: "$12.999",
    zeroKm: false,
    year: 2016,
    km: 233000,
    newCar: "Used",
    color: "Black",
    tramission: "Automatic Transmission",
    link: "https://www.volkswagen-albertsmeyer-nordhausen.de/de/modelle/sharan.html?adchan=sem&campaign={Brand_Modelle_Sharan_BMM}&adgroup={Sharan_Modell_BMM}&adlid={77054}&publisher=google&adpl=google&country=DE&format=p&language=DE&adplt=g&adcr=sharan%20volkswagen&adap=tp|PIA#item=1&gallery=150392783269679652",
  },
  {
    img: "./images/peugeot-508.png",
    brand: `Peugeot`,
    model: `508`,
    price: "$28.489",
    zeroKm: false,
    year: 2020,
    km: 79824,
    newCar: "Used",
    color: "Black",
    tramission: "Automatic Transmission",
    link: "https://www.peugeot.de/modelle/limousine-508.html",
  },
];
//array de todos os carros e suas caracteristica

let soma = 0;
for (let i = 0; i < cars.length; i++) {
  soma += cars[i].km;
}
console.log(`A média de kilometros entre os carros é ${soma / cars.length}
---------------`);
//Média numérica(kilometros) calculada e impressa no console

function testBoleano(carros) {
  for (let i in carros) {
    if (carros[i].zeroKm === true) {
      console.log(`${carros[i].brand} ${carros[i].model} é Zero Kilometros`);
      console.log("");
    } else {
      console.log(
        `${carros[i].brand} ${carros[i].model} não é zero Kilometros`
      );
      console.log("");
    }
  }
  return;
}
//funçao verificação de valores booleanos true impressa no console, verifica se o carro é zero km ou não

testBoleano(cars);
//chamada da funçao todos os carros
console.log("-----------------------");

console.log(
  `Relatório impresso de todos os carros.
  `
);

function allCars(carros) {
  for (let car of carros) {
    for (property in car) {
      console.log(`${property}: ${car[property]}`);
    }

    console.log("----------------------");
  }
  return;
}
allCars(cars);
//funcão de relatório impresso no console com as informações de cada carro
console.log("Funçao procura marca de carros.");
function carsSearch(object, carName) {
  let carroEncontrado = "";

  for (let i in object) {
    if (object[i].brand.toLowerCase().includes(carName.toLowerCase())) {
      carroEncontrado = object[i].brand;
      console.log(object[i]);
    } else if (carroEncontrado === "") {
      console.log(
        "Nenhum carro dessa marca encontrado, por favor tente outra marca."
      );
    }
  }
}
carsSearch(cars, "bmw");
//função porcurar marcas de carros

console.log("------------------");

const btnMobile = document.getElementById("btn-mobile");

const toggleMenu = () => {
  const nav = document.getElementById("nav");
  nav.classList.toggle("active");
};
//menu hamgurger, adiciona nova classe para ativar e desativar

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
      <li id="model"><a id="link-cars" href="${card.link}" target=_blank">${card.model}</a>
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
//input de busca
