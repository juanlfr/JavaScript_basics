//Catch only the vowels and double the e's and u's to put on a new array
let input = 'juan vu dans ca depuis longtemps';
const vowels = ['a', 'e', 'i', 'o', 'u'];

let resultArray = [];

for (let i = 0; i < input.length; i++) {
  for (let j = 0; j < vowels.length; j++) {
    if (input[i] === vowels[j]) {
      resultArray.push(input[i]);
    }
  };    
  if (input[i] === "e" || input[i] === "u") {
      resultArray.push(input[i]);
    }
};
console.log(resultArray.join('').toUpperCase());
//output: UUAUUAAEEUUIOEE
