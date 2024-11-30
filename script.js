
function lovefunc(a,b){
 
  if( a + b === 0) {
    return false;
  }else if ( (a+b) % 2 === 0) {
    return false;
  } else {
    return true;
  }
 }

 console.log(lovefunc(3,0))