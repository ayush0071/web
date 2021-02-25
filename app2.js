const person ={
     name:"Ayush",
     city:"kathmandu",
     call:9812285204

}
console.log(person.name)

function add(a,b){
    let sum =a+b
    return sum;
}
console.log(add(23,55))

//no call fumction
(function(){


})();

 function getResult(a,b,callback){
    setTimeout(() =>{

        let result =a+b;
        callback(result)
        },1000)


 }

getResult(23,23,function (result){
    console.log (result)


})
//function with arrow
let add2=()=>{a+b;
let r = add(2,4)








