const myname = 'Siva';
const hasHobbies = true;
let age = Math.floor(Math.random() * 100) + 1;

// console.log(myname)
// Function Definition
function summarizeUser_old(userName, userAge, userHasHobby) {
    return ( 'Name is ' + userName + ', age is ' + userAge +
    ' , user has hobbies:' + userHasHobby
    )
}

console.log(summarizeUser_old(myname, age, hasHobbies))

//Arrow Functions

const summarizeUser = (userName, userAge, userHasHobby) => {
    return ( 'Name is ' + userName + ', age is ' + userAge +
    ' , user has hobbies:' + userHasHobby
    )
}

console.log(summarizeUser(myname, age, hasHobbies))

const add = (a,b) => a  + b

const addOne = a => a + 1

const addRandom = () => 1 + 2

console.log(add(1,2))

console.log(addOne(5))

console.log(addRandom())