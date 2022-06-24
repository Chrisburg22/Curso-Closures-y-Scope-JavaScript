function fruits(){
    if (true) {
        var fruit1 = 'apple'; // Function Scope
        let fruit2 = 'Kiwi'; // Block Scope
        const fruit3 = 'Banana'; // Block Scope    
        console.log(fruit2);
        console.log(fruit3); // Solo dentro del blocke puedo utilizar let y const
    }
    console.log(fruit1); // Se puede utilizar  a lo largo de la función

}

fruits();


