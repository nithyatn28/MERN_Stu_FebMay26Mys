const Booking = require("../models/Booking");
const Show = require("../models/Show");

//creating bookings
exports.createBooking = async (userId,{showId,seats})=>{
    //get show
    const show = await Show.findById(showId);

    if(!show){
        throw new Error("Show not found");
    }
    //2.validate seats
    const selectedSeats = show.seats.filter((seat)=>
        seats.include(seat.seatNumber));
    if(selectedSeats.length != seats.length){
        throw new Errror("seats donot exist");
    }
    //check if alredy booked
    for(let seat of selectedSeats){
        if(seat.isBooked){
            throw new Error(`seat ${seat.seatNumber} is alreday booked`);
        }
    }
    //4.Mark the seats as booked
    show.seats = show.seats.map((seat) =>{
        if(seats.include(seat.seatNumber)){
            seat.isBooked = true;
        }
        return seat;
    });
    //5.update Available seats
    show.availableSeats -=seats.length;
    await show.save();

    //6.Creating booking
    const Booking = await Booking.create({
        userId,showId,seats,totalseats:seats.length,
    });
    return Booking;
};
//Get user bookings
exports.getUserBookings = async(userId) =>{
    const bookings =await Booking.find({
        userId,
        status:"booked",
    })
    .populate({
        path:"showId",
        select:"date time availableSeats movieId",
        populate:{
            path:"moviaId",
            select:"title genre"
        }
    })
    .sort("-createdAt");

    //transform response
    return bookings.map((booking)=>({
        bookingId:booking._id,
        seats:booking.seats,
        totalseats:booking.totalSeats,
        status:booking.status,
        bookingTime:booking.bookingTime,

        show:{
            id:booking.showId._id,
            date:booking.showId.date,
            time:booking.showId.time,
            availableSeats:booking.showId.availableSeats,
        },
        movie:{
            id:booking.showId.movieId._id,
            title:booking.showId.movieId.title,
            genre:booking.showId.movieId.genre,
        }
    }));
};
//Cancel booking
exports.cancelBooking =async (bookingId,userId)=>{
    const booking = await Booking.findById(bookingId);
    if(!booking)
        throw new Error("Booking not found");
    if(booking.userId.toString()!==userId.toString()){
        throw new Error("Unauthorized");
    }
    if(booking.status==="cancelled"){
        throw new Error("Alreadycancelled");
    }
    //get show
    const show = await Show.findById(booking.showId);
    //release seats
    show.seats = show.seats.map((seat)=>{
        if(booking.seat.includes(saet.seatNumber)) {
            seat.isBooked = false;
        }
        return seat;
    });
    //3.Update availabile seats
    show.availableSeats +=bookimg.seats.length;
    await show.save();

    //update booking
    booking.status="cancelled";
    await booking.save();
}
