export default function test() {

  const elem = document.getElementById('test');

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

  function bounce(timeFraction) {
    for (var a = 0, b = 1, result; 1; a += b, b /= 2) {
      if (timeFraction >= (7 - 4 * a) / 11) {
        return -Math.pow((11 - 6 * a - 11 * timeFraction) / 4, 2) + Math.pow(b, 2)
      }
    }
  }

  animation({
    duration: 1000,
    // timing: bounce,
    timing: function(timeFraction) {
      return Math.pow(timeFraction, 5);
      // return 1 - Math.sin(Math.acos(timeFraction));
      // return bounce(timeFraction);

    },
    draw: function(progress) {
      elem.style.width = progress * 100 + '%'
    }
  })

  // const train = document.getElementById('test');

  // function animate(draw, duration) {
  //  let start = performance.now();

  //  requestAnimationFrame(function animate(time) {
  //    let timePassed = time - start;
  //    if (timePassed > duration) timePassed = duration;
  //    draw(timePassed);
  //    if (timePassed < duration) {
  //      requestAnimationFrame(animate);
  //    }
  //  })
  // }

  // animate(function(timePassed) {
  //  train.style.left = timePassed / 5 + 'px';
  // }, 2000);


}