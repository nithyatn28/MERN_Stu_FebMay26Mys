// applied filters to the query using comparision operator
const mongoose = require("mongoose");
async function runFilterDemo() {
    try {
        await mongoose.connect("mongodb://localhost:27017/merntraining");
        console.log("MongoDB connected successfully");

        const productSchema = new mongoose.Schema({
            name: String,
            price: Number,
            category: String,
            status: String
        });
        const Product = mongoose.models.Product || mongoose.model("Product", productSchema);
        await Product.create([{
            name: "pen",
            price: 50,
            category: "Stationary",
            status: "active"
        },
        {
            name: "paper",
            price: 20,
            category: "Stationary",
            status: "inactive"
        },
        {
            name: "mobile",
            price: 50000,
            category: "electronics",
            status: "active"
        },
        {
            name: "bottel",
            price: 500,
            category: "Stationary",
            status: "inactive"
        }

        ]);
        const equalQuery = await Product.find({status:{$eq:"active"}});
        console.log("Products which are active",equalQuery);
        const notequalQuery = await Product.find({name:{$ne:"mobile"}});
        console.log("Products which are active",notequalQuery);
         await mongoose.connection.close();
           console.log("connection closed");

    }
    catch(error){
        console.log("Filter demo error:",error.message);
    }
}
runFilterDemo();