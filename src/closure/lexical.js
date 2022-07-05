const myGlobal = 0;

function myFunction ( ) {
    const myNumber = 1;
    console.log(myGlobal);

    function parent( ){ //Función Interna. Se crea un closure
        const inner = 2;
        console.log(myNumber, myGlobal);

        function child ( ){
            console.log(inner, myNumber, myGlobal);
        }
        return child( );
    }
    return parent( );
}

myFunction ( );