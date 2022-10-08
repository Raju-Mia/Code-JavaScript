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

// item access
for(item_name in object_Name){
    console.log(item_name)
}

// value access
console.log(object_Name.fullName)



// for(i=object_Name.indexOf; i<object_Name; i++){
//     console.log(object_Name[i])
// }