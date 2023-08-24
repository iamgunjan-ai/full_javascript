// object using constructor

//const tinderuser=new object()
const tinderuser={}
tinderuser.id="166"
tinderuser.name = "gunjan"
tinderuser.islogin=false

console.log(tinderuser);
console.log(Object.keys(tinderuser));
console.log(Object.values(tinderuser));

const regularuser ={
    email: "gunjankusha@gmail.com",
    fullname:{
        firstname:"gunjan",
        lastname:"kumar"
    }
}
console.log(regularuser.fullname.lastname);

const obj1 ={
    1:"a",
}
const obj2={
    2:"b"
}
const obj3 = {obj1,obj2}

console.log(obj3);
//const obj3 = {...obj1, ...obj2}


