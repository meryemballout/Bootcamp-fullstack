function resolveAfter2Seconds() {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve('resolved'); // After 2 seconds, the promise resolves with "resolved"
        }, 2000);
    });
}

async function asyncCall() {
    console.log('calling');            // Logs "calling" immediately
    let result = await resolveAfter2Seconds();  // Waits 2 seconds for the promise to resolve
    console.log(result);               // Logs "resolved" after the 2 seconds
}

asyncCall();

//calling
//resolved