const mySymb = Symbol ("key1");

const JsUser = {
    name: "ZohaibALi",
    email: "zohaib_ali@yahoo.com",
    moble: "0340-6133150",
    dob: "15-04-1998",
    [mySymb]: "key1"
}
console.log(JsUser[mySymb]);