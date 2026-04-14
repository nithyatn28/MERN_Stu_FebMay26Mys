//pre remove hook
const mongoose = require("mongoose");

async function runRemoveHookDemo() {
    try{
        await mongoose.connect("mongodb://127.0.0.1:27017/hooks");
        const courseSchema = new mongoose.Schema({
            title:String,
            tag:String
        });
        courseSchema.pre("deleteOne",{
            document:true,query:false,

        },function(){
            console.log("Pre-delete hook,",this.title);
        },);
        const Course = mongoose.models.HookCourse || mongoose.model("HookCourse",courseSchema);

        const course = new Course({
            title:"database design",
            tag:"remove-hook-demo",
        });
          await course.save();
          console.log("document save successfully");

          

           await Course.deleteOne({title:"database design"});
           console.log("document deleted successfully");

        await mongoose.connection.close();
        console.log("connection closed");
    }
    catch(error){
        console.log("remove hook demo error:",error.message);
    }
}
runRemoveHookDemo();