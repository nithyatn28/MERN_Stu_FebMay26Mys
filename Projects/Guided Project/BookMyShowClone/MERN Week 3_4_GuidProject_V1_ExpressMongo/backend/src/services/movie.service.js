const Movie = require("../models/Movie");
const movie = require("../models/Movie");
//create Movie 
exports.createMovie = async (data) =>{
    return await Movie.create(data);
};
//get movies
exports.getMovies = async(query) =>{
    let {page = 1,limit = 5,gener,rating,search,sort} = query;

    page = Number(page);
    limit = Number(limit);

    const filter = {isActive:true};

    if(gener){
        filter.gener = gener;
    }
    if(rating){
        filter.rating = {$gte:Number(rating)};
    }
    if(search){
        filter.$text = { $search:search};
    }
    let mongoQuery = Movie.find(filter);

    if(sort){
        mongoQuery = mongoQuery.sort(sort);
    }
    else{
        mongoQuery = mongoQuery.sort("-createdAt");
    }
    const skip = (page-1)*limit;
    mongoQuery = mongoQuery.skip(skip).limit(limit);

    const movies = await mongoQuery;
    const total = await Movie.countDocuments(filter);

    return{
        movies,
        pagination:{
            page,
            limit,
            total,
        },
    };
};

//update mmovie
exports.updateMovie = async(id,data) =>{
    const movie = await Movie.findByIdAndUpdate(id,data,{
        new:true,
        runValidatirs:true,
    });
    if(!movie){
        throw new Error("Movie not found");
    }
    return movie;
};
//Delete movie
exports.deleteMovie = async(id) =>{
    //soft delete
    const movie = await Movie.findByIdAndUpdate(id,data,{
        isActive:false,
    });
    if(!movie){
        throw new Error("Movie not found");
    }
}