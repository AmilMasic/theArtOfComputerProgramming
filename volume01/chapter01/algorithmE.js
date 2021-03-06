// create an algorithm that will find
// the highest common divisor between two numbers
// also know as Euclid's Algorithm


//function to swap the position if the second number given is bigger than the first
function algorithmE(m,n) {
  const originalM = m;
  const originalN = n;
  let highestDivisor = m;
  if (n > m) {
    let f = m;
    m = n;
    n = f;
  } else {
    // console.log("Nothing to swap");
  }
  let divide = () => highestDivisor = m % n;
  do {
    m = n;
    n = highestDivisor;
    divide(m, n)
  } while (highestDivisor !== 0)
  console.log("The highest divisor between " + originalM + " and " + originalN + " is " + n);
}

algorithmE(20,10);
algorithmE(20,15);
algorithmE(20,150);
algorithmE(27,13);
algorithmE(20011,152);
algorithmE(6,3);
algorithmE(15,4);
