var userOne = { // object literal 
    email: 'harrypotter@gmail.com',
    name: 'Harry',
    login(){
        console.log(this.email, ' has logged in.')
    },
    logout(){
        console.log(this.email, ' has logged out.')
    }
}; 

// notes on this: 
// inside the above object, it refers to the object 
// outside of that object, it refers to the window. 

// think of the above as a capsule 
// and the things inside are the properties of that capsule 
// ENCAPSULATION 

console.log(userOne.name);