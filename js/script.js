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


// MILESTONE 2

// mi aggancio alla classe HTML container-boxes
const containerBoxes = document.querySelector('.container-boxes');

for (let i = 1; i <= 50; i++) {
    if (i % 3 === 0 && i % 5 === 0 ) {
        // a condizione verificata, eseguo comando => FizzBuzz
        // nel container HTML identificato in precedenza => .container-boxes
        containerBoxes.innerHTML += `<span>${'FizzBuzz'} ${'-'}</span> `;
    }
    else if (i % 5 === 0 ) {
        containerBoxes.innerHTML += `<span>${'Buzz'} ${'-'}</span> `;
    }
    else if (i % 3 === 0 ) {
        containerBoxes.innerHTML += `<span>${'Fizz'} ${'-'}</span> `;
    }
    else {
        containerBoxes.innerHTML += `<span>${i} ${'-'}</span> `
    }
}



