/////////////// Objects: Exercise 1 - Address Object ///////////////

/* Instructions */
// sw.duration, reset, start, stop
// initially duration = 0
// sw.start()
// if you call start 2x in a row, get an error that Stopwatch has already started
// sw.stop()
// if you call stop 2x in a row, get an error that Stopwatch has not started
// sw.duration counts between when we called start until when we called stop
// sw.reset takes the Stopwatch to its initial state

// Constructor Function
function Stopwatch(){
    // Private properties
    let startTime, endTime, running, duration = 0;

    this.start = function(){
        if(running)
            throw new Error('Stopwatch has already started.');

        running = true;

        startTime = new Date();
    };

    this.stop = function(){
        if(!running)
            throw new Error('Stopwatch is not started.');
        
        running = false;

        endTime = new Date();

        // milliseconds / 1000 = seconds
        const seconds = (endTime.getTime() - startTime.getTime()) / 1000;
        duration =+ seconds;
    };

    this.duration = function(){
        duration = stop - start;
        console.log(duration);
        return duration;
    };

    this.reset = function(){
        startTime = null;
        endTime = null;
        running = false;
        duration = 0;
    };

    // Read-only property
    Object.defineProperty(this, 'duration', {
        get: function(){ return duration; }
    });

}


