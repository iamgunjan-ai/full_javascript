// for
for(let index =0; index <10;index++){
    const element= index;
    console.log(element);
}

for (let i = 0; i <5; i++) {
    for(let j=0;j<=i;j++){
        console.log("*");
    }
    
}
let myarray = [5,6,9,3]
for (let index = 0; index < myarray.length; index++) {
    const element = myarray[index];
    console.log(element);
    
}
// break and continue

for (let i = 0; i < 20; i++) {
    if(i==5){
        console.log('detected 5');
        break
    }
    console.log(`value of is ${i}`);

    
}

for(let i = 0; i < 20; i++) {
    if(i==5){
        console.log('detected 5');
        continue;
    }
    console.log(`value of is ${i}`);

    
}

// While loop
let i=0
while (i<=10) {
console.log(i);
i++
    
}

