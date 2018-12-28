export function convertPercentToPx(value, axis, windowHeight) {
  
  if( typeof value === "string" && value.match(/%/g)) {
    
    if ( axis === 'y' ) return (parseFloat(value) / 100) * windowHeight;
    if ( axis === 'x' ) return (parseFloat(value) / 100) * windowWidth;
  }

  return value;
}