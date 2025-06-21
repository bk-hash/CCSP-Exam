const Timer = function(duration, display) {
    this.duration = duration;
    this.display = display;
    this.timerId = null;

    this.start = function() {
        let timeRemaining = this.duration;

        this.timerId = setInterval(() => {
            const minutes = Math.floor(timeRemaining / 60);
            const seconds = timeRemaining % 60;

            this.display.textContent = `${this.formatTime(minutes)}:${this.formatTime(seconds)}`;

            if (--timeRemaining < 0) {
                this.stop();
                alert("Time's up!");
            }
        }, 1000);
    };

    this.stop = function() {
        clearInterval(this.timerId);
    };

    this.reset = function() {
        this.stop();
        this.display.textContent = this.formatTime(Math.floor(this.duration / 60)) + ":00";
    };

    this.formatTime = function(time) {
        return time < 10 ? "0" + time : time;
    };
};

export default Timer;