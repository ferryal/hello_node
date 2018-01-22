let word = "Hello Impact Byte";
let node = "Hello node";
let numb1;
let numb2;


console.log(word);
console.log(`Your word: ${node}`);

function addition(numb1, numb2) {
  let res
  res = numb1 + numb2;
  return `${numb1} + ${numb2} = ${res}`;
}

function substract(numb1, numb2) {
  let res
  res = numb1 - numb2;
  return `${numb1} + ${numb2} = ${res}`;
}
console.log(addition(5, 3));
console.log(addition(1020, 837));
console.log(substract(5, 3));
console.log(substract(1, 3));