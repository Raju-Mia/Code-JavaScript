// if statement



var a = 16;
var b = 209;
var c = 201;


if (a <= b && b >= c){
    if(a == b || b == c)
        if (a == b && b == c){
            console.log( "value equal")
        }
        else{
            console.log("one is equal with b")
        }

    else{
        console.log( " b is biger")
    }

}

else if (b <= c && c >= a){
    console.log( " c is biger")

}

else if (c <= a && a >= b){
    console.log( " a is biger")

}
else{
    console.log( " sytext error")
}