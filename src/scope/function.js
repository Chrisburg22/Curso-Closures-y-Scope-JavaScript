function greeting() {
    let userName = 'Ana';//declaramos y asignamos una variable en el Function Scope
    console.log(useName)//Mandamos llamar a la variable o la invocamos

    if(userName === 'Ana'){//validacion
        console.log(`Hellow ${userName}!`);
    }
}

greeting();//Mandamos a llamar a nuestra function 

console.log(userName);//No podemos acceder a la variable fuera de la funcion donde se creo