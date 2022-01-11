(function(info){
  console.log(info);

  function Clock({ template }) {
    let timer;

    function render() {
      let date = new Date();

      let hours = date.getHours();
      if (hours < 10) hours = '0' + hours;

      let mins = date.getMinutes();
      if (mins < 10) mins = '0' + mins;

      let secs = date.getSeconds();
      if (secs < 10) secs = '0' + secs;

      let output = template
        .replace('h', hours)
        .replace('m', mins)
        .replace('s', secs);

      console.log('function Clock');
      console.log(output);
    }

    this.stop = function() {
      console.log('function Clock');
      clearInterval(timer);
    };

    this.start = function() {
      console.log('function Clock');
      render();
      timer = setInterval(render, 1000);
    };

  }

  let clock = new Clock({template: 'h:m:s'});
  console.log('function Clock');
  clock.start();
  setTimeout(clock.stop, 5000);
})('Class Clock | The functional way');

(function(info){
  console.log(info);

  class Clock {
    timer;

    constructor({template}) {
      this.template = template;
    }

    render () {
      let date = new Date();

      let hours = date.getHours();
      if (hours < 10) hours = '0' + hours;

      let mins = date.getMinutes();
      if (mins < 10) mins = '0' + mins;

      let secs = date.getSeconds();
      if (secs < 10) secs = '0' + secs;

      let output = this.template
        .replace('h', hours)
        .replace('m', mins)
        .replace('s', secs);

      console.log('class Clock');
      console.log(output);
    }

    start () {
      console.log('class Clock');
      this.render();
      this.timer = setInterval(() => this.render(), 1000);
    }

    stop () {
      console.log('class Clock');
      clearInterval(this.timer);
    }
  }

  let clock = new Clock({template: 'h:m:s'});
  clock.start();
  setTimeout(() => clock.stop(), 5000);
})('Class Clock | The class...ical way');
