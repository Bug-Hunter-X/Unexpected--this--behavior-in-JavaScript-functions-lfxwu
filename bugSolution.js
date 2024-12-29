function myFunc() {
  console.log(this);
}

// Solution 1: Binding 'this'
const boundMyFunc = myFunc.bind({ value: 'Bound context' });
boundMyFunc(); // Output: { value: 'Bound context' }

// Solution 2: Using an arrow function
const arrowMyFunc = () => {
  console.log(this); 
};
arrowMyFunc(); // Output: Window object or undefined (depends on context) 

const obj = { myFunc: () => { console.log(this) } };
obj.myFunc();