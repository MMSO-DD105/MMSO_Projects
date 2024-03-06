let test = [1, 3, 5, 4];
let somme = test.reduce((total, itemValue) => {
  return total + itemValue;
}, 0);
console.log(somme);
