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
    console.log(`My favorite dog breed is ${favDogBreed}`);
};

dogBreed('Syberian Husky');
dogBreed('Shibe');
dogBreed('German Shepard');
dogBreed('Golden Retriever');
