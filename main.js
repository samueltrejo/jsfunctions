//Zoe Ames
//Britney SPears

// const firstName = 'Zoe';
// const lastName = 'Ames';
// console.log(firstName + ' ' + lastName)
// console.log(`${firstName} ${lastName}`);

//const firstName = 'Britney';

const namePrinter = (firstName, lastName) => {
    console.log(`${firstName} ${lastName}`);
};

namePrinter('Zoe', 'Ames');
namePrinter('John', 'Doe');

namePrinter(1, 2);

const nuggetizer = (animal) => {
    return `processed ${animal}`;
};

console.log(nuggetizer('pig'));
console.log(nuggetizer('fish'));
console.log(nuggetizer('chicken'));
console.log(nuggetizer('students'));


//dogbreed function name | 1 input | string | output should be my favorite dog breed
const dogBreed = (favDogBreed) => {
    return `My favorite dog breed is ${favDogBreed}`
};

console.log(dogBreed('Syberian Husky'));
console.log(dogBreed('Shibe'));
console.log(dogBreed('German Shepard'));
console.log(dogBreed('Golden Retriever'));


// const dogBreedDiv = document.getElementById('dog-breeds');
// console.log('dogBreedDiv', dogBreedDiv);

// dogBreedDiv.innerHTML = dogBreed('Syberian Husky');

// const nuggetizerDiv = document.getElementById('nuggetizer');
// nuggetizerDiv.innerHTML = nuggetizer('lion');
// nuggetizerDiv.innerHTML += nuggetizer('cheetah');

const printToDom = (divId, textToPrint) => {
    const selectedDiv = document.getElementById(divId);
    selectedDiv.innerHTML += textToPrint;
};

printToDom('dog-breeds', dogBreed('Syberian Husky'));
printToDom('nuggetizer', nuggetizer('lion'));
printToDom('nuggetizer', nuggetizer('cheetah'));
printToDom('nuggetizer', 'mmmmmmmmmmmmmmmmmmmm');


let bandNum = 1;
const addBand = (divId, bandName) => {
    //do stuff
    //printToDom('band-list', ???)

    printToDom(divId, `<p>${bandNum}. ${bandName}</p>`);
    bandNum++
}

addBand('band-list', 'Muse');
addBand('band-list', 'Lyrd Skynrd');
addBand('band-list', 'Metallica');