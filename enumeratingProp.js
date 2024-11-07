function Circle(radius){
    this.radius = radius;
    this.draw = function(){
        console.log('draw');
    }
}
const circle = new Circle(10);

// We use the for in loop to display properties and the bracket notation with circle word to access the values 
//We can also filter which type of values we want to see using typeof function ( we can separate properties and methods)
for(let key in circle){
    if(typeof circle[key] !== 'function')
    console.log(key , circle[key])
}
// Another approach to get all the keys in an object but u cant separate the props and methods
const keys = Object.keys(circle);
console.log(keys);



