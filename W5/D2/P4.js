//writting custom callback functions

function processStudent(name,score,callback,monkey){
    console.log("student name",name);
    console.log("student score",score);
    callback(name,score);
    monkey(name,score);

}
function showResult(name,score){
    if(score >= 70){
        console.log(name+"has passed");
    }
    else{
        console.log(name+"has failed");
    }
}
function showGrade(name,score){
    if(score >= 85){
        console.log("A+");
    }
    else if(score >= 75){
        console.log("A");
    }
    else if(score >= 70){
        console.log("Grade:B");
    }
    else{
        console.log("Grade:failed");
    }
}
processStudent("nithya",89,showResult,showGrade);
//processStudent("nithya",89,showGrade);