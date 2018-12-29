import $ from 'jquery';
import ScrollMagic from 'scrollmagic/scrollmagic/uncompressed/ScrollMagic';
import 'scrollmagic/scrollmagic/uncompressed/plugins/animation.gsap';
import 'scrollmagic/scrollmagic/uncompressed/plugins/debug.addIndicators';

export default function scrollMagic() {

  console.log('::: scroll magic');

  let project1 = document.querySelector('#project-01');
  let project2 = document.querySelector('#project-02');
  let project3 = document.querySelector('#project-03');

  if (project1 && project2 && project3) {

    let controller = new ScrollMagic.Controller({addIndicators: true});

    let sceneBox1 = new ScrollMagic.Scene({
      triggerElement: '#box1'
    })
    .setTween('#box1', 0.5, { backgroundColor: "green", scale: 2.5})
    .addIndicators({ name: "1"})
    .addTo(controller);

    let sceneBox2 = new ScrollMagic.Scene({
      triggerElement: '#box2',
      duration: 300
    })
    .setTween('#box2', 0.5, { backgroundColor: "green", scale: 2.5})
    .addIndicators({ name: "2"})
    .addTo(controller);

    let pinIntroScene = new ScrollMagic.Scene({
      triggerElement: '#intro',
      triggerHook: 0,
      duration: '10%'
    })
    .setPin('#intro', { pushFollowers: false })
    .addTo(controller);

    $('.project').each(function() {
      let ourScene1   = new ScrollMagic.Scene({
        triggerElement: this,
        duration: '140%',
        triggerHook: 0.8
      })
      .setClassToggle(this, 'fade-in')
      .addIndicators({
        name: 'fadeScene1',
        colorTrigger: 'black',
        colorStart: 'green',
        colorEnd: 'red'
      })
      .addTo(controller);
    });

  }
}
