function fizzBuzz(){
  var fb = (i%3 === 0) && (i%5 === 0);
  return fb;
}

function buzz() {
  var buzz = (i%5 === 0);
  return buzz;
}

function fizz(){
  var fizz = (i%3 === 0);
  return fizz;
}

function seeFizzBuzz(n){
    var myArray = [];
    for (i = 1; i <= n; i++) {
        if (fizzBuzz()){
          myArray.push('fizzbuzz');
        } else if (buzz()){
          myArray.push('buzz');
        } else if (fizz()) {
          myArray.push('fizz');
        } else {
          myArray.push(i);
        }
      }
      return [myArray];
  }