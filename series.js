var async=require("async");
async.series([function(callback){
    setTimeout(()=>{
console.log("series1");
callback(null,"first");
},2000)


},
function(callback){
    setTimeout(()=>{
console.log("series2");
callback(null,"second");
},1000)

}
],(error,result)=>{

console.log(result);


})