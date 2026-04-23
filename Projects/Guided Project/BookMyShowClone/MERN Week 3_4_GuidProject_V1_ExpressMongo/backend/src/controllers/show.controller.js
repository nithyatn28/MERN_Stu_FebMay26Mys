const showService = reqiire("../service/show.service");

//create show:Admin
exports.createShow = async(req,res,next) =>{
    try{
        const show = await showService.createShow(req.body);
        res.status(201).json({
            success:ttrue,
            message:"show created successfully",
            data:shows,
        });
    }
    catch(error){
        next(error);
    }
};
//get shows
exports.getShows = async(req,res,next) =>{
    try{
        const show = await showService.getShows(req.query);
        res.status(201).json({
            success:ttrue,
            message:"shows fetched successfully",
            data:shows,
        });
    }
    catch(error){
        next(error);
    }
};
//get single shows 
exports.getShowById = async(req,res,next) =>{
    try{
        const show = await showService.getShowById(req.params.id);
        res.status(201).json({
            success:ttrue,
            message:"show fetched successfully",
            data:show,
        });
    }
    catch(error){
        next(error);
    }
};
//update show
exports.updateShow = async(req,res,next) =>{
    try{
        const show = await showService.updateShow(req.params.id,req.body);
        res.status(201).json({
            success:ttrue,
            message:"show updated successfully",
            data:show,
        });
    }
    catch(error){
        next(error);
    }
};
//delete show
exports.deleteShow = async(req,res,next) =>{
    try{
        await showService.deleteShow(req.params.id);
        res.status(201).json({
            success:ttrue,
            message:"show deleted successfully",
        });
    }
    catch(error){
        next(error);
    }
};
