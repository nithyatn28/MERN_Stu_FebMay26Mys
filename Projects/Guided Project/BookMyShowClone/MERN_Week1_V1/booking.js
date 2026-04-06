// Handels booking related operation
const bookingEmitter = require("./events");

let currentBooking = null;
function getCurrentBooking(){
    return currentBooking;
}
function clearCurrentBooking(){
    currentBooking = null;
}
function checkDuplicateBooking(movie,showtime,seatCount){
    return new Promise((resolve,reject) =>{
        setTimeout(()=>{
            if(
            currentBooking && 
            currentBooking.movieId === movie.id &&
            currentBooking.time === showtime.time &&
            currentBooking.seatCount === seatCount
            ){
            return reject("Duplicate booking detected.ticked already booked");
            }
        resolve("No duplicate booking found");
        },300);
    });
}
function checkSeatAvailability(showtime,seatCount){
    return new Promise((resolve,reject) =>{
        setTimeout(()=>{
            if(showtime.seatsAvailable <seatCount){
                return reject(`Only ${showtime.seatsAvailable} seats(s) are available`)
            }
            resolve("Seates are available");
        },300);
    });
}
function generateBookingDetails(movie,showtime,seatCount){
    return new Promise((resolve) =>{
        setTimeout(() => {
            const booking = {
                bookingId:`book-$(Date.now())`,
                movieId:movie.id,
                time:showtime.time,
                seatCount
            };
            resolve("booking");
        },300);
    });
}
function confirmBooking(booking,showtime){
    return new Promise((resolve) =>{
        setTimeout(() => {
            showtime.seatsAvailable-=booking.seatCount;
            currentBooking = booking;
            bookingEmitter.emit("Booking Confirmed",booking);
            resolve(booking);
        }, 300);
    });
}

//promise chaining
function processBooking(movie,showtime,seatCount){
    bookingEmitter.emit("bookingStarted");

    return checkDuplicateBooking(movie,showtime,seatCount)
    .then(() =>{
        bookingEmitter.emit("bookingValidate");
        return checkSeatAvailability(showtime,seatCount);
    })
    .then(() =>generateBookingDetails(movie,showtime,seatCount))
    .then((booking) =>confirmBooking(booking,showtime))
    .catch((error)=>{
        bookingEmitter.emit("bookingfailed",error);
    });
}
//async/await
async function processBookingAsyc(movie,showtime,seatCount){
    try{
        bookingEmitter.emit("booking started");

        await checkDuplicateBooking(movie,showtime,seatCount)
        bookingEmitter.emit("bookingValidated");
        await checkSeatAvailability(showtime,seatCount);

        const booking = await generateBookingDetails(movie,showtime,seatCount);
        const confirmedBooking = await confirmBooking(booking,showtime);

        return confirmedBooking;
    }
    catch(error){
        bookingEmitter.emit("bookingFailed");
        throw error;
    }
}
module.exports ={
    getCurrentBooking,
    clearCurrentBooking,
    processBooking,
    processBookingAsyc
}