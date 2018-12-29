const keyframes = [{
  'wrapper' : '.title-image-text',
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
}];

export default keyframes;
