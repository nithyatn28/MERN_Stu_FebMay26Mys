//cllback based validation functions 
function validateMovieSelection(movies,movieId,callback){
    const selectedMovie =movies.find((movie) =>movie.id === movieId);

    if(!selectedMovie){
        return callback("Invalid movie selection.choose a valid movie Id.",null)
    }
    callback(null,selectedMovie);
}
function validateTimeSelection(movie,selectedTime,callback){
    const selectedShowTime =movie.showtimes.find((show) =>show.time.toLowerCase()===selectedTime.toLowerCase());

    if(!selectedShowTime){
        return callback("Invalid time slot selection.choose a valid time slot.",null)
    }
    callback(null,selectedShowTime);
}
function validateSeatCount(seatCount,callback){
    if(!isNaN(seatCount) || seatCount<=0){
        return callback("Invalid seat count.choose a valid seat count.",null)
    }
    callback(null,seatCount);
} 

module.exports ={
    validateMovieSelection,
    validateTimeSelection,
    validateSeatCount
};