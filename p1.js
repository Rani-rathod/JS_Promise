var count = true
var show= new Promise(function(resolve,reject){
    if(count){
        setTimeout(()=>resolve("good"),3000)
    }else{
        reject("bad")
    }
})
show.then(function(value){
    console.log(value);
})
.catch(function(value){
    console.log(value);
})
