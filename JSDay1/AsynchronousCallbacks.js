// console.log('I expect the message order to be: aaaa, dddd, ffff, eeee,bbbb');
// var msgPrinter = function(msg,delay){
//     setTimeout(function(){
//       console.log(msg);
//     },delay);
//   };
//   console.log("aaaaaaaaaa"); //1st?
//   msgPrinter ("bbbbbbbbbb",2000); //5th
//   console.log("dddddddddd"); //2nd
//   msgPrinter ("eeeeeeeeee",1000); //4th
//   console.log("ffffffffff"); //3rd
  
// console.log('Assignment 2');
// console.log('Yay I was right. This will even come before the last two messages');

function Person(name){
    this.name = name; //This is bound to person
    console.log("Name: "+ this.name); //= Kurt Wonnegut
    setTimeout(function(){
      console.log("Hi  "+this.name);  //Explain this 
    },2000);
  }
  //call it like this (do it, even if you know it’s silly ;-)
  Person("Kurt Wonnegut");  //This calls the function
  console.log("I'm global: "+ name);  //Explain this
  