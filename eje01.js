// Ejercicio 01
var info = {
  name: "Tony",
  lastname: "Stark",
  nickname: "Iroman",
};

let { name, lastname, nickname } = info;
const imprimirAvanger = ({ name, lastname, nickname }) => {
  console.log(`Mi nombre es ${name}${lastname} y soy ${nickname}`);
};

imprimirAvanger(info);

// Ejercicio 02

// PROMESA xD!!!!

var info = {
  name: "Clark",
  lastname: "Kent",
  nickname: "Superman",
};
var user = {
  name: info.name,
  lastname: info.lastname,
  nickname: info.nickname,
  allPowers: ["Superfuerza", "Volar", "Velocidad", "Telepatia"],
};

// EJERCICIO 3

function constFigura(_base = "", _altura = "") {
  let Figura = {
    base: _base,
    altura: _altura,
    getAreaTriangulo: function () {
      let area = 0;
      area = this.base * this.altura;
      return area;
    },
  };
  return Figura;
}

let objFigura = new constFigura(10, 2);
console.log(`El area es : ${objFigura.getAreaTriangulo()}`);

// EJERCICIO 4

var datos = [
  { name: "Kelvin", age: 29, country: "Perú" },
  { name: "Milagros", age: 26, country: "Colombia" },
  { name: "Luis", age: 28, country: "Colombia" },
  { name: "Ruben", age: 29, country: "Brasil" },
  { name: "Andrea", age: 23, country: "Argentina" },
];

// 4.1

const edad29 = () => {
  const edad = datos.filter((ed) => {
    if (ed.age === 29) {
      return ed;
    }
  });
  return edad;
};

console.log(edad29());

// 4.2
let arrEdad29 = [];
arrEdad29.push(edad29());
console.log(arrEdad29);

// 4.3
let arrEdad = [];
datos.forEach((dato) => {
  let { age } = dato;
  arrEdad.push(age);
});

console.log(arrEdad);

// 4.4
const encontrado = arrEdad.find((edad) => {
  if (edad === 30) {
    return edad;
  }
});

encontrado ? console.log("existe") : console.log("no existe");
