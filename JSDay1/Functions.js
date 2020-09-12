//console.log("Assigment 1");
function add(n1, n2) {
    return n1 + n2;
  }
  //Function Expression
  let sub = function (n1, n2) {
    return n1 - n2;
  };
  //Callback Function
  let cb = function (n1, n2, callback) {
    if (
      (typeof n1 === "number"|| //Will fail if n1 is undefined, or is not a number
      typeof n2 === "number"|| //Will fail if n2 is undefined, or is not a number
      typeof callback === "function") //Will fail if callback is undefined or is not a function
    ) {
      try {
        return ("Result from the two numbers: "+ n1 +" + " +n2 +" = " + callback(n1, n2)); 
      } catch (e) {
        console.error(
          e.name + ": " + e.message + ". Please check your inputs again :)"
        )
      }
    }
  };
  
  console.log("Assigment 2");
  console.log(add(1, 2));
  /* What will this print? 
  3
  */
  
  console.log(add);
  /* What will it print and what does add represent?
  (It prints the location in the memory that’s allocated shown as "return n1+n2 or "Function: add()"
  */
  console.log(add(1, 2, 3));
  /* What will it print?
  (3. 
  it takes the first two parameters and doesn’t use the third, since it only asks for 2)
  */
  console.log(add(1));
  /* What will it print 	
  It prints NaN (Not a number)
  */
  console.log(cb(3, 3, add));
  /* What will it print
  (Result using the numbers: 3 and 3 = 6)
  */
  console.log(cb(4, 3, sub));
  /* What will it print
  (Result using the numbers: 4 and 3 = 1)
  */
  console.log("CB FAIL");
  console.log(cb(3, 3, add()));
  /*What will it print (and what was the problem)
  VM369:12 Uncaught TypeError: callback is not a function
  at cb (<anonymous>:12:56) at <anonymous>:1:13
  The problem is that it tries to call the add() function. With no parameters. As a parameter for cb.
  */
  console.log(cb(3, "hh", add));
  /* What will it print
  Result from the two numbers: 3+hh=3hh   It turned the it into ONE string.
  */
  
  console.log("Assigment 4");
  function mul(n1, n2) {
    return n1 * n2;
  };
  
  console.log("Assigment 5");
  let div = function (n1, n2) {
    return n1 / n2;
  };
  console.log(cb(3, 3, mul));
  console.log(cb(3, 3, div));
  