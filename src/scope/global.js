//variables

var a; // declarando
var b = "b"; // declaramos / asignamos
b = "bb"; // reasignando el valor
var a = "aa"; //redeclaracion

//Global Scope
let fruit = "Aplee"; // global

function besFruit() {
  console.log(fruit);
}

besFruit();

function countries() {
  country = "Mexico";
  console.log(country);
}
countries();
console.log(country);
