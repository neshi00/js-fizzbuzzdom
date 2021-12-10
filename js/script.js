// MILESTONE 1

/*
 crea un ciclo for che parte da 1 
 fino ad arrivare a 50
 e che incrementa di 1 ogni volta
 */
for (let i = 1; i <= 50; i++) {
    // se ho multipli SIA di 3 che di 5 esegui => FizzBuzz
    if (i % 3 === 0 && i % 5 === 0 ) {
        console.log('FizzBuzz');
    }
    // se ho multipli solo di 5 esegui => Buzz
    else if (i % 5 === 0) {
        console.log('Buzz');
    }
    // se ho multipli solo di 3 esegui => Fizz
    else if (i % 3 === 0) {
        console.log('Fizz');
    }
    // in tutti gli altri casi esegui => i
    else {
        console.log(i)
    }
}

/* 
MILESTONE 2
Dato un container nel DOM, 
appendi un elemento html con il numero o la stringa corretta.
*/
