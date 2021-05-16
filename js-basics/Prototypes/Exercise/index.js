/////////////// Prototypes: Exercise ///////////////
// N.B.: Premature optimization is the root of all evils

// Constructor Function
function Stopwatch(){
    // Private properties
    let startTime, endTime, running, duration = 0;
    
    this.duration = function(){
        duration = stop - start;
        console.log(duration);
        return duration;
    };
    
    // Read-only properties
    Object.defineProperty(this, 'duration', {
        get: function(){ return duration; },
        set: function(value){ duration = value }
    });
    
    Object.defineProperty(this, 'running', {
        get: function(){ return running; }
    });
    
    Object.defineProperty(this, 'startTime', {
        get: function(){ return startTime; }
    });
    
    Object.defineProperty(this, 'endTime', {
        get: function(){ return endTime; }
    });
    
}

Stopwatch.prototype.start = function(){
    if(this.running)
    throw new Error('Stopwatch has already started.');
    
    this.running = true;
    
    this.startTime = new Date();
};

Stopwatch.prototype.stop = function(){
    if(!this.running)
    throw new Error('Stopwatch is not started.');
    
    this.running = false;
    
    this.endTime = new Date();
    
    // milliseconds / 1000 = seconds
    const seconds = (this.endTime.getTime() - this.startTime.getTime()) / 1000;
    this.duration =+ seconds;
};

Stopwatch.prototype.reset = function(){
    this.startTime = null;
    this.endTime = null;
    this.running = false;
    this.duration = 0;
};

