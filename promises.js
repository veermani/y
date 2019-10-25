var a=()=>{

    return new Promise(function(resolve,reject){
       
        resolve("the value of a")
       
    })
}
var b=()=>{
    return new Promise(function(resolve,reject){
       
resolve( "  the value of b")

    })
}
var c=()=>{
    return new Promise(function(resolve,reject){

resolve("the value of c")

    })
}
//simple promises
a().then(function(value){
console.log(value);
b().then(function(value){
    console.log(value);
    
c().then(function(value){
console.log(value);


}).catch(function(error){
    console.log(error);
    
})

}).catch(function(error){
    console.log(error);
    
})


}).catch(function(error){
    console.log(error);
    
})



//promise race
Promise.race([a(),b(),c()]).then(function(msg){
    console.log(msg);
    
}).catch(function(error){
    console.log(error);
    
})
 //promise all   
Promise.all([a(),b(),c()]).then(function(msg){
    console.log(msg);
    
}).catch(function(msg){
    console.log(msg);
    
})