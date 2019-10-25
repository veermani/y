var async=require("async");
async.auto({

a:function(callback){
console.log("this is a function");
callback(null,'a_function')


},
b:['a','c',function(result,callback){
console.log('this is b function');
callback(null,'a_function','b_function','c_function');


}],
c:['a',function(result,callback){
console.log("this is c function");
callback(null,'c_function')


}]



},(error,result)=>{
console.log(result);


})