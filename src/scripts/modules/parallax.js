import $ from 'jquery';

export default class Parallax {

  constructor() {
    this.PROPERTIES =               ['translateX', 'translateY', 'opacity', 'rotate', 'scale'];
    this.$window =                  $(window);
    this.$body =                    $('body');
    this.wrappers =                 [];
    this.currentWrapper =           null;
    this.scrollTimeoutID =          0;
    this.bodyHeight =               0;
    this.windowHeight =             0;
    this.windowWidth =              0;
    this.prevKeyframesDurations =   0;
    this.scrollTop =                0;
    this.relativeScrollTop =        0;
    this.currentKeyframe =          0;

    this.keyframes = {
      'wrapper' : '.title-image',
      'duration' : '100%',
      'animations' :  [
        {
          'selector'    : '.name',
          'translateY'  : -140,
          'opacity'     : 0
        } , {
          'selector'    : '.first',
          'translateY'  : -110,
          'opacity'     : 0
        } , {
          'selector'    : '.second',
          'opacity'     : [1, 0]
        }
      ]
    }

    this.scrollIntervalID = setInterval(this.updatePage.bind(this), 10);
    this.setupValues();
  }

  updatePage() {
    let self = this;
    requestAnimationFrame(function animate() {
      self.setScrollTops();
      if(self.scrollTop > 0 && self.scrollTop <= (self.bodyHeight - self.windowHeight)) {
          self.animateElements();
          self.setKeyframe();
        }
    });
  }

  setKeyframe() {

  }

  animateElements() {

  }

  setScrollTops() {
    this.scrollTop = this.$window.scrollTop();
    this.relativeScrollTop = this.scrollTop - this.prevKeyframesDurations;

  }

  setupValues() {

  }
}