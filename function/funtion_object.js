// function work with object

function aFvalue(a){
    console.log("before changing the property: " + a.one);
    a.one = "two";
    console.log("after changing the proerty: " + a.one);

}

var a = {
    one : 1
}

aFvalue(a)