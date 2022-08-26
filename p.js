const pobj1 = new Promise( (resolve, reject) => {

    setTimeout( () => {
        let roll_no = [1,2,3,4,5];
        resolve(roll_no)  
        reject('Error while communicating')
    }, 2000);
});

const getBiodata = (indexdata) => {
    return new Promise( (resolve,reject) => {

        setTimeout( (indexdata) => {
            let biodata = {
                name : 'Rani',
                age : 18
            }
            resolve(`My roll no is ${indexdata}. My name is ${biodata.name} and I am ${biodata.age} years old.`)
        },2000,indexdata);
    })
}
pobj1.then((rollno) => {
    console.log(rollno);
    return getBiodata(rollno[1]);
}).then((a) => {
    console.log(a);
})
.catch((erroe) => {
    console.log(error)
});
