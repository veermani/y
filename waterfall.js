var async=require("async");
async.waterfall([
function(callback){

setTimeout(()=>{

console.log("waterfalll1");
callback(null,"first")


},1000)

},
function(arg1,callback){

  setTimeout(()=>{

    console.log("waterfalll2");
    callback(null,arg1,"second")
    
    
    },1000)

},
function(arg2,arg3,callback){

  setTimeout(()=>{

    console.log("waterfalll3");
    callback(null,arg2+arg3+"third")
    
    
    },1000)

}

],(error,result)=>{
if(error){
  console.log("you might have somthing wrong");
  
}
else{
  console.log(result);
  
}

})