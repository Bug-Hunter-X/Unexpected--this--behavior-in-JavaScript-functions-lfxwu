function myFunc() {
  console.log(this);
}

myFunc(); // Output: undefined

const obj = { myFunc };
obj.myFunc(); // Output: { myFunc }