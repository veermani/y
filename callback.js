//simple callback function
function a(name){

console.log("this is a function of"+name);

}

function b(callback){

console.log("this is b function");
callback("nitesh arya")

}
b(a)
//callback in hell

var fs=require("fs");
fs.readFile("dummy.txt",function(error,result){
if(error){
    console.log(error);
    
}
else{
    fs.readFile("dummy.txt",function(error,result){
        if(error){
            console.log(error);
            
        }
        else{
            fs.readFile("dummy.txt",function(error,result){
                if(error){
                    console.log(error);
                    
                }
                else{
                    fs.readFile("dummy.txt",function(error,result){
                        if(error){
                            console.log(error);
                            
                        }
                        else{
                            console.log(result.toString());
                            
                        }
                        
                        })  
                }
                
                })
        }
        
        })
}

})