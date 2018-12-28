export default function test() {

  const elem = document.getElementById('test');
  elem.addEventListener('click', function() {
    console.log(':: click');
  });

  function animation(options) {

    let start = performance.now();

    requestAnimationFrame(function animate(time) {
      let timeFraction = (time - start) / options.duration;
      if (timeFraction > 1) timeFraction = 1;
      let progress = options.timing(timeFraction);
      options.draw(progress);
      if (timeFraction < 1) {
        requestAnimationFrame(animate);
      }
    });

  }

  animation({
    duration: 1000,
    timing: function(timeFraction) {
      return Math.pow(timeFraction, 5);
    },
    draw: function(progress) {
      elem.style.width = progress * 100 + '%'
    }
  });

}
