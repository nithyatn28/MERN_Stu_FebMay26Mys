//nested object and methods
const student = {
    firstname: "santhu",
    lastname: "surabi",
    score:{math:50,science:70},
    hobbies:["reading","singing"],
    fullname:function(){
        return this.firstname +""+this.lastname;
    },
    greet(){
        console.log("hi,",this.fullname());
    }
};
console.log(student.fullname());
student.greet();