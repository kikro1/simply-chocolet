const startTime = Date.now();

// --------------------------------------

const getTime = document.querySelector(' .get-date-btn');

getTime.addEventListener('click', function() {
    const date = new Date();
console.log(date);   
alert(date) ;
});

// --------------------------------------

const setDate = document.querySelector( '.set-date-btn');

setDate.addEventListener('click', function() {
    const concertDate = new Date("2024-06-06T14:25:00");
console.log(concertDate);
alert(concertDate);
});

// --------------------------------------

const miliDate = document.querySelector( '.mili-date-btn');

miliDate.addEventListener('click', function() {
    const time = Date.now(); 
    console.log(time);
    alert(time);
});

// --------------------------------------

const endTime = Date.now();
const elapsedTime = endTime - startTime;

console.log(`Elapsed time: ${elapsedTime} ms`);


// --------------------------------------


const isSuccess = true;

// Create promise
const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    if (getTime) {
      resolve("Success! Value passed to resolve function");
    } else {
      reject("Error! Error passed to reject function");
    }
  }, 2000);
});

// Registering promise callbacks
promise
  .then(value => console.log(value)) // "Success! Value passed to resolve function"
  .catch(error => console.log(error)) // "Error! Error passed to reject function"
  .finally(() => console.log("Promise settled")); // "Promise settled"


// --------------------------------------