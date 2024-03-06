const fibonacci = function (number) {
  if (number == 0) return 0;
  if (number == 1) return 1;
  if (number < 0) return "OOPS";
  //having Fa = F(n - 1)
  //and    Fb = F(n - 2)
  let Fa = 1;
  let Fb = 0;
  let Fn = 0;
  for (let n = 2; n <= number; n++) {
    Fn = Fa + Fb;
    Fb = Fa;
    Fa = Fn;
  }
  return Fn;
};

// Do not edit below this line
module.exports = fibonacci;
