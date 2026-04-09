//Handling request related to bookings
const express = require("express");
const { authMiddleware } = require("../middleware/authMiddleware");
const{
    bookingValidationHandler,
    creatBooking,
    getAllBookings,
    getMyBookings,
} = require("..//controllers/bookingController");
const roleMiddleware = require("../middleware/roleMiddleware");
const router = express.Router();
//creadting a booking /t0 book tickets
router.post("/bookings",authMiddleware,bookingValidationHandler,creatBooking);
router.get("/bookings/me",authMiddleware,getMyBookings);
router.get("./bookings",authMiddleware,roleMiddleware("admin"),getAllBookings);
module.exports = router;