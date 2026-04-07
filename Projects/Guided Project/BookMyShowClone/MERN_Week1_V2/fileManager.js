//reading and writing bookings and its logs
const fs = require("fs");
const path = require("path");
const { buffer } = require("stream/consumers");
const dataDir = path.join(__dirname,"data");
const logsDir = path.join(dataDir,"logs");
const bookingFile = path.join(dataDir,"bookings.join");
const logFile = path.join(logsDir,"booking.log");
const archivedLogFile = path.join(logsDir,"booking-archived.log");

function ensureDirectories(){
    if(!fs.existsSync(dataDir)){
        fs.mkdirSync(dataDir);
    }
    if(!fs.existsSync(logsDir)){
        fs.mkdirSync(logsDir);
    }
}

function listDataFilesSync(){
    ensureDirectories();
    return fs.readdirSync(dataDir);
}
function removeLogsDirectorySync(){
    if(fs.existsSync(logsDir)){
        fs.rmdirSync(logsDir,{recursive:true});
    }
}

//reading and writing of the bookings
function initializeBookingFileSync(){
    ensureDirectories();
    if(!fs.existsSync(bookingFile)){
        fs.writeFileSync(bookingFile,JSON.stringify([],null,2),"utf-8");

    }
}
function readBookingsSync(){
    initializeBookingFileSync();

    const bufferData = fs.readFileSync(bookingFile);
    const content = bufferData.toString("utf-8");

    return JSON.parse(content || "[]");
}

function readBookingsAsync(){
    initializeBookingFileSync();

    return new Promise((resolve, reject) => {
        fs.readFile(bookingFile,(err,bufferData)=>{
            if(err){
                return reject(err);
            }
            try{
                const content = bufferData.toString("utf-8");
                const parsed = JSON.parse(content || "[]");
                resolve(parsed);
            }
            catch(parseError){
                reject(parseError);
            }
        });
    });
}

function writeBookingsAsync(bookings){
    initializeBookingFileSync();
    return new Promise((resolve, reject) => {
        const jsonSting =JSON.stringify(bookings,null,2);
        const buffer = Buffer.alloc(Buffer.byteLength(jsonSting));
        buffer.write(jsonSting);

        fs.writeFile(bookingFile,buffer,(err) =>{
            if(err){
                return reject(err);
            }resolve("booking file written successfully");
        });
    });
}
async function appendBookingAsync(booking) {
    const bookings = await readBookingsAsync();
    bookings.push(bookings);
    await writeBookingsAsync(bookings);
    return booking; 
}

function appendLogAsync(message){
    ensureDirectories();

    return new Promise((resolve, reject) => {
        const timeStamp = new Date().toISOString();
        const finalMessage = `[${timeStamp}]${message}\n`;

        fs.appendFile(logFile,finalMessage,"utf8",(err)=>{
            if(err){
                return reject(err);
            }
            resolve("Log appendded successfully")
        });
    });
}

function renameLogFileSync(){
    ensureDirectories();

    if(fs.existsSync(logFile)){
        fs.renameSync(logFile,archivedLogFile);
        return true
    }
    return false;

}
function deleteArchiveLogFileSync(){

    if(fs.existsSync(archivedLogFile)){
        fs.renameSync(archivedLogFile);
        return true
    }
    return false;

}
module.exports = {
    dataDir,
    logsDir,
    bookingFile,
    logFile,
    archivedLogFile,
    ensureDirectories,
    listDataFilesSync,
    removeLogsDirectorySync,
    initializeBookingFileSync,
    readBookingsAsync,
    readBookingsSync,
    writeBookingsAsync,
    writeFileSync,
    deleteArchiveLogFileSync,
    renameLogFileSync,
    appendBookingAsync,
    appendLogAsync

}
