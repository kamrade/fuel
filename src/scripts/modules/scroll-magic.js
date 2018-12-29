import ScrollMagic from 'scrollmagic/scrollmagic/uncompressed/ScrollMagic';
import 'scrollmagic/scrollmagic/uncompressed/plugins/animation.gsap';
import 'scrollmagic/scrollmagic/uncompressed/plugins/debug.addIndicators';

// import ScrollMagic from 'scrollmagic';


export default function scrollMagic() {

  console.log('::: scroll magic');

  let controller = new ScrollMagic.Controller({addIndicators: true});
  let ourScene   = new ScrollMagic.Scene({
    triggerElement: '#project01'
  })
  .setClassToggle('#project01', 'fade-in')
  .addIndicators()
  .addTo(controller)
  ;

}
