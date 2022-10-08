// funtion to funtion call and return the value-

function welcomeMeg(name){
    console.log("welcome Mr. " + name);
    return function options(menu){
        console.log("do you like " + menu + " mr. " + name);

    }
}
// funtion call
welcomeMeg("Zahid Ahmed") ('coffee');

