/**function moneyBox (coins){
    let saveCoins = 0;
    saveCoins += coins;
    console.log(`MoneyBox: $${saveCoins}`);
}

moneyBox(5);
moneyBox(5);
CAJA DE AHORRO CON CLOSURES 
CREAR FUNCIONES DENTRO DE OTRAS FUNCIONES PARA VOLVERLO UNA CLOSURE ACCEDER A LOS ELEMENTOS DE AS VARIABLS EN E LCONTEXTO DE AMBITO LEXICO Y CON ELLO RECORDAD ESE CONTESXTO PARA PODER UTILIZAR Y 
LO QUE NOSOTROS NECESITEMOS DE ESA LOGICA QUE VAMOS A UTLIZAR
*/

function moneyBox(){
    let saveCoins=0;
    function countCoins (coins) {
        saveCoins += coins;
        console.log(`MoneyBox: $${saveCoins}`);
    }
    return countCoins;
}

const myMoneyBox = moneyBox(0);
myMoneyBox(5);
myMoneyBox(5);
myMoneyBox(15);

const moneyBoxAna = moneyBox();
moneyBoxAna(10);
moneyBoxAna(20);
moneyBoxAna(5);

//EJEMPLO MEJORADOS DE LA CLASE 8
function moneyBox2 (){
    let saveCoins = 0;

    return{
        countCoins: function(coins){
            saveCoins += coins;
            console.log(`MoneyBox: $${saveCoins}`);
        },
        restCount: function(coins){
            saveCoins -= coins;
            console.log(`MoneyBox: $${saveCoins}`);
        },
    }
}

const chrisBox = moneyBox2();
chrisBox.countCoins(20);
chrisBox.countCoins(20);
chrisBox.restCount(12);

function crearImpresoraDeMensajes(tipo, estilos){
    const defaultColors = 'color: white;';
    return function mensaje(mensaje) {
        console.log(`%c ${tipo}: ${mensaje}`, defaultColors + estilos);
    }
    
}

 const error = crearImpresoraDeMensajes('Error', 'background: red;');
 const warning = crearImpresoraDeMensajes('Warning', 'background: orange;');
 const exito = crearImpresoraDeMensajes('Éxito', 'background: green;');
 const info = crearImpresoraDeMensajes('Info', 'background: blue;')


info('De esta manera imprimimos información color azul');
exito('El mensaje de exito es valioso para validar que ls cosas se cumplieron');
warning('En caso de algun error logico que podramos resolver');
error('La logica no es correcta');