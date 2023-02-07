let input = 'hello world'
const vowels = ['a', 'e', 'i', 'o','u'];
let resultArray=[];
for (let i = 0 ; i < input.length ; i++){
//Whales double their e‘s and the u‘s in their language.
  if (input[i] === "e") {
    resultArray.push(input[i]);
  }
  if (input[i] === "u") {
    resultArray.push(input[i]);
  }
  //console.log(input[i])
  for(let j = 0; j < vowels.length ; j ++) {
    //console.log('j is '+ j);
  if (input[i] === vowels[j]) {
      resultArray.push(vowels[j]);
    }
    //console.log(resultArray);
  }
}
/*Currently, resultArray outputs an array of characters. To produce proper whale language, we want to capitalize the array elements and put them together as one string.*/
const resultString = resultArray.join("").toUpperCase();
console.log(resultArray);
