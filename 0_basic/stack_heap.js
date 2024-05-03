// Stack and Heap Undertanding ot practise

//Stack Exapmle

let myNickName = "Ali"
let  myOrignalName = myNickName
//console.log(myOrignalName)
//myOrignalName = "Zohaib ALi"
//console.log(myOrignalName)
//console.log(myNickName)

//Heap Example is here


let userOne = {
    name: "zohaib",
    age: 26,
    gender: "male"
}

let userTwo = userOne

userTwo.name = "Ali"

console.log(userOne.name)
console.log(userTwo.name)