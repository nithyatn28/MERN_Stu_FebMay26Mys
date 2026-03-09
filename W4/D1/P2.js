function parseConfig(text){
    try{
        let config =JSON.parse(text);
        console.log(config);
    }
    catch(err){
        console.log("Error parsing config",err.message);
        return null;
    }
    finally{
        console.log("this is finally block executed.");
    }
}
// parseConfig('{"theme":"dark"}');
parseConfig('{"theme"}');