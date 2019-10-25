function b(name){
console.log("this is b function");
return new Promise((resolve,reject)=>{

if(name){
resolve("wow this is working")
}
else{
    reject("you have not passed parameter name")
}
})



}
async function name(name){
console.log("async await by "+name);
try{
var a=await b();
console.log(a);

}
catch(error){
    console.log(error);
    
}

}
name("veermani")