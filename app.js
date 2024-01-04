
// QUESTION 01


const products = [
    { id: 1, name: 'iPhone', price: 999 },
    { id: 2, name: 'Samsung Galaxy', price: 899 },
    { id: 3, name: 'Google Pixel', price: 799 }
  ];
  
  const productPriceupdate = products.map(product => {
    return { ...product, price: product.price * 3 };
  });
  
  console.log(productPriceupdate);
  
// QUESTION 02

// const numbers = [1,2,3,4,5,6,7,8,9,10];
// console.log(numbers.filter(item => item % 2 == 1))


// QUESTION 03


// const people = [
//     { name: 'asharif', age: 25 },
//     { name: 'hamza', age: 20 },
//     { name: 'jesse', age: 30 }
//   ];
  

//   people.sort((a, b) => a.age - b.age);
  
//   console.log(people);


// QUESTION 04

// const num = [1, 2, 3, 4, 5];

// const sum = num.reduce((acc, curr) => {
//   return acc + curr;
// }, 0);

// console.log(sum);


// QUESTION 05

// filter method
// const numbers = [1, 2, 3, 4, 5, 6];
// const evenNumbers = numbers.filter(num => num % 2 === 0);
// console.log(evenNumbers);


//find method

// const numbers = [1, 2, 3, 4, 5, 6];
// const firstEvenNumber = numbers.find(num => num % 2 === 0);
// console.log(firstEvenNumber);

// QUESTION 06


// const words = ['apple', 'banana', 'orange'];

// const result = words.filter(word => word.length > 3) 
// .map(word => word.toUpperCase()).join(', '); 

// console.log(result); 

// QUESTION 07

// const numbers = [1, 2, 3, 4, 5];

// const doubledNumbers = numbers.map(function(number) {
//   return number * 2;
// });

// console.log(doubledNumbers);


// QUESTION 08

//reduce method
// const numbers = [1, 2, 3, 'four', 5]; 

// try {
//   const sum = numbers.reduce((accumulator, currentValue) => {
//     if (typeof currentValue !== 'number' || isNaN(currentValue)) {
//       throw new Error('Non-numeric value encountered');
//     }
//     return accumulator + currentValue;
//   }, 0);

//   console.log('Sum:', sum);
// } catch (error) {
//   console.error('Error:', error.message);
// }

//find method
// const numbers = [1, 3, 5, 7, 9];

// try {
//   const result = numbers.find(number => {
//     if (number === 5) {
//       throw new Error('Element not supported');
//     }
//     return number > 5;
//   });

//   console.log('Result:', result);
// } catch (error) {
//   console.error('Error:', error.message);
// }



// QUESTION 09


//map method
// const originalArray = [1, 2, 3, 4, 5];

// const newArray = originalArray.map(item => item * 2);

// console.log('Original Array:', originalArray); 
// console.log('New Array:', newArray); 


// const originalArray = [10, 20, 30, 40, 50];

//filter

// const filteredArray = originalArray.filter(item => item > 20);

// console.log('Original Array:', originalArray); 
// console.log('Filtered Array:', filteredArray); 



// QUESTION 10

// const numbers = [1, 2, 3, 4, 5];
// const result = numbers.map(num => num * num);

// console.log(result); 


// QUESTION 11


// const strings = ['apple', 'orange', 'banana', 'grapes', 'kiwi', 'pear'];

// const filterCapitalized = strings
//   .filter(str => str.length >= 5) 
//   .map(str => str.toUpperCase()); 

// console.log(filterCapitalized);

// QUESTION 12

// const products = [
//     { name: 'Product A', price: 25 },
//     { name: 'Product B', price: 15 },
//     { name: 'Product C', price: 35 },
//     { name: 'Product D', price: 10 }
//   ];
  
//   products.sort((a, b) => b.price - a.price);
  
//   console.log(products);
  

// QUESTION 13

// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// const sumOfEvenNumbers = numbers.reduce((acc, curr) => {
//   if (curr % 2 === 0) {
//     return acc + curr;
//   }
//   return acc;
// }, 0);

// console.log(sumOfEvenNumbers); 

// QUESTION 14

// const objectsArray = [
//     { id: 1, status: 'pending' },
//     { id: 2, status: 'in progress' },
//     { id: 3, status: 'pending' },
//     { id: 4, status: 'not started' }
//   ];
  
//   const specificId = 1;
  
//   const foundObject = objectsArray.find(obj => obj.id === specificId);
  
//   if (foundObject) {
//     foundObject.status = 'completed';
//     console.log(objectsArray);
//   } else {
//     console.log('Object with specified id not found');
//   }
  

// QUESTION 15


const mixedIntegers = [5, -3, 8, -2, 10, -6, 4];

const positiveNumbersAverage = mixedIntegers.filter(num => num > 0) // Filter positive numbers
  .reduce((accumulator, currentValue, index, array) => {
    accumulator += currentValue;
    if (index === array.length - 1) {
      return accumulator / array.length; // Calculate average on the last iteration
    }
    return accumulator;
  }, 0)
  .toFixed(2); // Round to two decimal places

//console.log(positiveNumbersAverage); // Output: "6.17"



// QUESTION 16

// function getAdults(arrayOfObjects) {
//     return arrayOfObjects.filter(person => person.age >= 18);
//   }
  

//   const people = [
//     { name: 'Alice', age: 25 },
//     { name: 'Bob', age: 16 },
//     { name: 'Charlie', age: 30 },
//     { name: 'David', age: 20 }
//   ];
  
//   const adults = getAdults(people);
//   console.log(adults);
  

// QUESTION 17
// const strings = ['apple', 'banana', 'kiwi', 'orange', 'grapes', 'pear', 'melon'];

// strings.sort((a, b) => {
//   if (a.length === b.length) {
//     return 0;
//   }
//   return a.length - b.length;
// });

// console.log(strings);


// QUESTION 18


// const array = [{ id: 1, name: 'Alice' }, { id: 2, name: 'Bob' }, { id: 3, name: 'Charlie' }];

// const desiredId = 3; 

// const result = array.find(item => item.id === desiredId) || { id: -1, name: 'Not Found' };

// console.log(result);

