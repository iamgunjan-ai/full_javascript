function saymyname(){
    console.log("G");
    console.log("k");
}  
saymyname()
function addtonumber(num1, num2){
  console.log(  num1+num2);
}
addtonumber(3,4);
addtonumber(3,"4");
addtonumber(3,'a'); 

function addtonumber(num1, num2){
  let result = num1+num2
  return result
}
const result= addtonumber(3,8);
console.log("result:", result);

// function loiginuser(username){
//     return 
// }