const bookingService = require("..services/booking.service");
//creating booking
exports.createBooking = async (req,resizeBy,next) =>{
    try{
        const booking = await bookingService.createBooking(
            req.user._id,
            req.body
        );
        res.status(201).json({
            success:true,
            message:"booking confirmed",
            data:booking
        });
    }
    catch(error){
        next(err);
    }
};
//get bookings
exports.getMyBookings = async(req,res,next)=>{
    try{
        const bookings = await bookingService.getMyBookings(req.user._id);
        res.status(201).json({
            success:true,
            message:"bookings fetched",
            data:bookings,
        });
    }
    catch(error){
        next(error);

    }
}
//cancel bookings
exports.cancelBookings = async(req,res,next)=>{
    try{
        const bookings = await bookingService.cancelBookings(req.params.id,req.user._id);
        res.status(201).json({
            success:true,
            message:"bookings cancled",
            data:bookings,
        });
    }
    catch(error){
        next(error);

    }
}