// singleton

// object literals
//Object.create
const jsUser = {
    name: "gunjan",
    age: 22,
    location: "jaipur",
    email: "gunjankusha@gmail.com",
    islogin : false,
    lastloginday: ["monday", "saturday"]
}
// object value acces by dot 

console.log(jsUser.name);
console.log(jsUser.email);
console.log(typeof(islogin));
console.log(jsUser.lastloginday);
//update eamil
jsUser.email = "gunjanvatsh@gmail.com"
console.log(jsUser.email);

//function

jsUser.greatting=function(){
    console.log("hello js user");
}
console.log(jsUser.greatting());
