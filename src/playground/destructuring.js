// const person = {
//   name: 'Andrew',
//   age: 7,
//   location: {
//     city: 'Philadelphia',
//     temp: 9
//   }
// };

// // const name = person.name;
// // const age = person.age;

// const { name: firstName = 'Anonymous', age } = person;
// console.log(`${firstName} is ${age}.`);

// const { city, temp: temperature } = person.location;
// if (city && temperature) {
//   console.log(`It's ${temperature} in ${city}.`);
// } 

// const book = {
//   title: 'Crushing it',
//   author: 'Gary Vee',
//   publisher: {
//     name: 'Panda'
//   }
// };

// const { name: publisherName = 'Self-Published' } = book.publisher;

// console.log(publisherName);

const address = ['1229 S Juniper Street', 'Pontian', 'Johor', '82000'];
const [, city, state = 'New York'] = address;
console.log(`You are in ${city} ${state}.`);

const item = ['Coffee (iced)', '2.00', '$3.50', '$2.75'];
const [itemName, , mediumPrice] = item;
console.log(`A medium ${itemName} cost ${mediumPrice}`);

