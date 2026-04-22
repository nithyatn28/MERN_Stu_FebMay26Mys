// Role middleware: RBAC 

exports.authorize = (...role) => {
    return(req,res,next)=>{
        if(!req.user || !role.includes(req.user.role)){
            return res.status(403).json({
                success:false,
                message:"Access denied insufficient permission",
            });
        }
        next();
    };
};