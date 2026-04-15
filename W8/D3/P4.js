//Basics of embedding and referencing
const mongoose = require("mongoose");
const { name } = require("../../TeamProject/LMS/MERN_Week1_V1/user");

async function main() {
    try{
        await mongoose.connect("mongodb://127.0.0.1:27017/embrel");
        console.log("Connected to MongoDB");

        const orderSchema = new mongoose.Schema({
            product:String,
            price:Number
        });
        const userSchema = new mongoose.Schema({
            name:String,
            orders:[orderSchema] //embbedded docment
        });
        const User = mongoose.model('User',userSchema);
        const embeddedUser = await User.create({
            name:"nithya",
            orders:[
                {product:"laptop",price:50000},
                {product:"mouse",price:1000},
                {product:"printer",price:10000}
            ]
        });
       // console.log("users are",embeddedUser);//this is going to fetch the one user related data
        const users = await User.find().lean();
        console.log(JSON.stringify(users,null,2));//this going to fetch all the user data

        //referencing 
        const userRefSchema = new mongoose.Schema({
            name:String
        });
        const orderRefSchema = new mongoose.Schema({
            product:String,
            price:Number,
            user:{
                type:mongoose.Schema.Types.ObjectId,
                ref:'UserRef'
            }
        });
        const UserRef = mongoose.model('UserRef',userRefSchema);
        const OrderRef = mongoose.model('OrderRef',orderRefSchema);
        const refUser = await UserRef.create({
            name:"Nithya T N"
        });
        await OrderRef.create([
                {product:"laptop1",price:50000,user:refUser._id},
                {product:"mouse1",price:1000,user:refUser._id},
                {product:"printer1",price:10000,user:refUser._id}
            ]
        );
        //console.log("refrenced orders");
        //console.log("orders are",await OrderRef.find().populate('user'));

    }
    catch(error){
      console.error("Error:",error.message);
    }
    finally{
        await mongoose.disconnect();
        console.log("Disconnected from DB");
    }
}
main();