// create an algorithm that will find
// the highest common divisor between two numbers
// also know as Euclid's Algorithm
function divisor(x,y) {
  let m = x;
  let n = y;
  swapNumbers(m,n);

}

divisor(3,6);
divisor(10, 9);

//function to swap the position if the second number given is bigger than the first
function swapNumbers(m,n) {
  if (n > m) {
    let r = n;
    n = m;
    m = r;
    console.log("this is the updated n value " + n)
    console.log("this is the updated m value " + m)

  }
  else {
    console.log("X was lower than Y");
  }
}
