// MILESTONE 1

for (let i = 1; i <= 70; i++) {
    /* crea un ciclo for che parte da 1 
    fino ad arrivare a 70 compreso
    e che incrementa di 1 ogni volta */

    // se hai multipli SIA di 3 CHE di 5 esegui comando (nel console.log) => FizzBuzz
    if (i % 3 === 0 && i % 5 === 0 ) {
        console.log('FizzBuzz');
    }
    // se hai multipli solo di 5 esegui comando (nel console.log) => Buzz
    else if (i % 5 === 0) {
        console.log('Buzz');
    }
    // se hai multipli solo di 3 esegui comando (nel console.log) => Fizz
    else if (i % 3 === 0) {
        console.log('Fizz');
    }
    // in tutti gli altri casi esegui comando (nel console.log) => i
    else {
        console.log(i)
    }
}


// MILESTONE 2

// agganciati alla classe HTML milestone-two
const milestoneTwo = document.querySelector('.milestone-two');

for (let i = 1; i <= 70; i++) {
    if (i % 3 === 0 && i % 5 === 0 ) {
        /* a condizione verificata, esegui comando => FizzBuzz
        dove? nel container HTML identificato in precedenza => .container-boxes */
        milestoneTwo.innerHTML += `<span>${'FizzBuzz'} ${'-'}</span> `;
    }
    else if (i % 5 === 0 ) {
        milestoneTwo.innerHTML += `<span>${'Buzz'} ${'-'}</span> `;
    }
    else if (i % 3 === 0 ) {
        milestoneTwo.innerHTML += `<span>${'Fizz'} ${'-'}</span> `;
    }
    else {
        milestoneTwo.innerHTML += `<span>${i} ${'-'}</span> `
    }
}


// MILESTONE 3

const containerBoxes = document.querySelector('.container-boxes');

for (let i = 1; i <= 70; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
        // a condizione verificata, esegui comando => aggiungi tag con relative
        // classi e concatena stringa all'interno di ${}
        containerBoxes.innerHTML += `<div class="box box-red">${'FizzBuzz'}</div>`;
    }
    else if (i % 5 === 0) {
        containerBoxes.innerHTML += `<div class="box box-yellow">${'Buzz'}</div>`;
    }
    else if (i % 3 === 0) {
        containerBoxes.innerHTML += `<div class="box box-green">${'Fizz'}</div>`;
    }
    else {
        containerBoxes.innerHTML += `<div class="box box-blue">${i}</div>`;
    }
}










