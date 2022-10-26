const getObject = () => { return {a: 5, b: 6, c: 7}};

const y = {...getObject()};
console.log(y);

const x = {...getObject(), d: 9};
console.log(x);