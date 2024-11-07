//Now what to do if we want to read a private method but not able to modify it 

function Circle(radius){
    this.radius = radius;

    let defaultLocation  ={x:0 , y:0};
    //We can create a method that returns the value of the method or prop like this
    this.getDefaultLocation = function(){
        return defaultLocation;
    }

    this.draw = function(){   
    computeOptimumLocation();

        console.log('draw');
    }
// this tool is used if we dont want to use the getDefaultLocation method
//here get(getter)is used to read a property (right now its read only)
//if we want to set the value of this property from outside ,we use a setter 

    Object.defineProperty(this, 'defaultLocation' , {
        get: function(){
            return defaultLocation;
        },
        set: function(value){
            defaultLocation = value;
        }

    });
}

const circle = new Circle(10);

 
