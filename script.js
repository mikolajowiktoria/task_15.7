StopWatch = React.createClass({
    getInitialState: function() {
        return {
            running: false,
            display: display,
            this.reset(),
            this.print(this.times);
        };
    },
    
    reset: function() {
        this.times({
            minutes: 0,
            seconds: 0,
            miliseconds: 0
        });
    },
    
    print: function() {
        this.display.innerText = this.format(this.times);
    },
    
    format: function(times) {
        return {                                                                   (${pad0(times.minutes)}:${pad0(times.seconds)}:${pad0(Math.floor(times.miliseconds))});
        }
    },

    start: function() {
        if (!this.running) {
            this.running = true;
            this.watch = setInterval( () => this.step(), 10);
        }
    },
    
    step: function() {
        if (!this.running) return;
        this.calculate();
        this.print();
    },
    
    calculate: function() {
        this.times.miliseconds += 1;
        if (this.times.miliseconds >= 100) {
            this.times.seconds += 1;
            this.times.miliseconds = 0;
        }
        if (this.times.seconds >= 60) {
            this.times.minutes += 1;
            this.times.seconds = 0;
        }
    },
    
    stop: function() {
        this.running = false;
        clearInterval(this.watch);
    }

    pad0: function(value) {
        var result = value.toString();
        if (result.length < 2) {
            result = '0' + result;
        }
        return result;
    }

    var stopwatch = new StopWatch(document.querySelector('.stopwatch'));

    var startButton = document.getElementById('start');
    startButton.addEventListener('click', () => stopwatch.start());

    var stopButton = document.getElementById('stop');
    stopButton.addEventListener('click', () => stopwatch.stop());

    render: function() {
        var styles = {
            margin: '0 auto',
            textAlign: 'center',
            width: 90%;
        };
        
        return (
            <div style={styles}>
                <nav className='controls'>
                    <a href='#' className='button' id='start'>Start</a>
                    <a href='#' className='button' id='stop'>Start</a>
                </nav>
                <div className='stopwatch'></div>
                <ul className='results'></ul>
            </div>
        );
    }    
});

var element = React.createElement(App);
ReactDOM.render(element, document.getElementById('app'));