const promise1 = Promise.resolve(3);
const promise2 = Promise.reject("Boo!");

promise1.then(value => console.log(value));
promise2.catch(error => console.log(error));
