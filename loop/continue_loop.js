// continue just skipped contitional statemnet.


for(i = 1; i < 20; i++) {
    if (i === 5) {
        console.log("skipped value is ", i)
        continue;
    }
    console.log(i)
}