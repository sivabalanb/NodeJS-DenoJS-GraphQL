// Object
const person = {
    name: 'Siva',
    age: Math.floor(Math.random() * 100) + 1,
    greet() {
        console.log('Hi, I am ' + this.name)
    }
};

person.greet();

const copiedPerson = { ...person }
console.log(copiedPerson)
// Arrays

const hobbies = ['Sports', 'Reading', 'Movies'];

for (let hobby in hobbies) {
    console.log(hobby)
}

console.log(hobbies.map(hobby => 'Hobby: ' + hobby));

hobbies.push('Cooking')
console.log(hobbies)

// Slice Operator
const copiedArray = hobbies.slice()
console.log(copiedArray)

// Spread Operator
const copiedArray_spread = [...hobbies];
console.log(copiedArray_spread)

const toArray = (...args) => {
    return args;
};

console.log(toArray(1, 2, 3, 4))

// Destructuring
const printName = ({ name }) => {
    console.log(name);
}

printName(person)

const {name, age} = person;
console.log(name, age)