const getTime = document.querySelector(' .get-date-btn');

getTime.addEventListener('click', function() {
    const date = new Date();
console.log(date);   
alert(date) ;
});

const setDate = document.querySelector( '.set-date-btn');

setDate.addEventListener('click', function() {
    const concertDate = new Date("2024-06-06");
console.log(concertDate);
alert(concertDate);
});