// variables

//Variables dentro del documento 
var a; //Declarando
var b = 'b'; // declaramos / asignamos 
b = 'bb';  //Reasignando
var a = 'aa'; // redeclaracion 



var fruit = 'Apple';//Variable global 

//Scope global
console.log(fruit);

function bestFruit () {
    console.log(fruit);
};

bestFruit(); 

function countries () {            
    country = 'colombia'; // Asignamos a country dentro de la funcion y se hace global 
    console.log(country);
}
 
countries();
console.log(country);
