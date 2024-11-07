function StopWatch(){
    //private variables
    let duration =0  , startTime , endTime , running ;

    //Three methods
    this.start = function(){
        if(running){
            throw new Error("Stopwatch is already running");
        }
        running = true;

        startTime = new Date();

    }

    this.stop = function(){
        if(!running){
            throw new Error("Stopwatch is not running");
        }
        running  = false;
        endTime = new Date();

        const seconds = (endTime.getTime() - startTime.getTime()) /1000;
        duration += seconds;

    }
    this.reset = function(){
        startTime = null;
        endTime = null;
        duration = null;
        running = false;
        
    }

    Object.defineProperty(this , 'duration', {
        get: function(){
            return duration;
        }
    });
}

const sw = new StopWatch();