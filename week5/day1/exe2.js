const delayedSuccess = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("success");
  }, 4000); // 4000 milliseconds = 4 seconds
});

// Test the promise
delayedSuccess
  .then(result => console.log(result))
  .catch(error => console.log(error));