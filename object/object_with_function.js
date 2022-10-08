// normal object
var object_Name = {
    fullName : "RAJU MIA",
    age : 22,
    address : "mirpur dhaka",
    job : "backend developer",
    business: function(){ // this is inside funcion pass in object
        console.log("This is funtion text")
    }
    

}

// // a fuction pass in object( for ourside)
// object_Name.business = function(){
//     console.log("hello function");
// }

// call the object for run
console.log(object_Name)

//funcion run
object_Name.business()