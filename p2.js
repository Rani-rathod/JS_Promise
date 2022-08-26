
a = new Promise( (resolve, reject) => {
    b=require("readline-sync");
    c=b.questionInt("enter the number:-");
    if (c%2==0){
        resolve('Yes')
    }else{
        reject('No');
    }
})
.then((err)=>{
    console.log(err)
})
.catch((R)=>{
    console.log(R)
});



