

class CountdownTimer {
    constructor({ selector, targetDate }) {
      this.targetDate = targetDate;
      this.days = document.querySelector(`${selector} .value[data-value="days"]`);
      this.hours = document.querySelector(`${selector} .value[data-value="hours"]`);
      this.mins = document.querySelector(`${selector} .value[data-value="mins"]`);
      this.secs = document.querySelector(`${selector} .value[data-value="secs"]`);
      this.getTime()
      this.setTime()
      this.intervalId = 0;
    }
  setTime() {
    setInterval(() => {
      const currentTime = Date.now()
      const time = this.targetDate - currentTime;
      if (time <= 0) {
      clearInterval(intervalId);
      return;
    }
      const days = Math.floor(time / (1000 * 60 * 60 * 24));
      const hours = Math.floor(time % (1000 * 60 * 60 * 24) / (1000 * 60 * 60));
      const mins = Math.floor(time % (1000 * 60 * 60) / (1000 * 60));
      const secs = Math.floor(time % (1000 * 60) / 1000);
      this.getTime(days, hours, mins, secs)
    }, 1000)
  }
  getTime(days, hours, mins, secs) {
      this.days.textContent = ("0"+ days).slice(-2) 
      this.hours.textContent = ("0"+ hours).slice(-2) 
      this.mins.textContent = ("0"+ mins).slice(-2) 
      this.secs.textContent = ("0"+ secs).slice(-2) 
   }
}
const timer = new CountdownTimer({
  selector: '#timer-1',
  targetDate: new Date('Jan 1, 2022'),
})


