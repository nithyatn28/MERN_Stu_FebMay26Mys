//Main Express sever entry point
const app = require("./app");
const PORT = 5000;
app.listen(PORT,()=>{
    console.log(`sever running on http://localhost:${PORT}`);
});
