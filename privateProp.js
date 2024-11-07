function Circle(radius){
    this.radius = radius;

    let defaultLocation  ={x:0 , y:0};

    let computeOptimumLocation =function(){
        //..
    }
    this.draw = function(){
    computeOptimumLocation();
    // defaultLocation()
    // this.radius (we need to this. for accessing members of circle Object )
        console.log('draw');
    }
}

// Basically we dont want some of our prop and methods to be accessible from everywhere we only want to make the essenteial prop display not more. 
//Here we learn how to do that 
// Basically above instead of defining a prop using this. we define a local variable

const circle = new Circle(10);
 
