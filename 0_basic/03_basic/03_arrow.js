const user = {
    userName: "Zohaib Ali",
    price: 999,

    welcomeMessege: function (){
    
        console.log(`${this.userName}, Welcome on this Website `);
    }
}

user.welcomeMessege()

user.userName = "Qamer";

user.welcomeMessege()



