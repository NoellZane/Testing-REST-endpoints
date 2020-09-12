//Assignment a)
let boys = ["Peter", "lars", "Ole"];
let girls = ["Janne", "hanne", "Sanne"];

console.log("Assignment b)");
let all = [...boys, ...girls]; //New way of doing this with spread. Spread syntax (...) allows an iterable such as an array expression or string to be expanded in places where zero or more arguments (for function calls) or elements (for array literals) are expected, or an object expression to be expanded in places where zero or more key-value pairs (for object literals) are expected.
//let all = boys.concat(girls); //Old way -"The concat() method is used to merge two or more arrays. This method does not change the existing arrays, but instead returns a new array."
console.log(all);

console.log("Assignment c)");

console.log(all.join()); // will make a string and put commas in between and no spaces 
console.log(all.join('')); //There will be no space between each name.  
console.log(all.join(', ')); //There will be a comma and a space between each name.  
console.log(all.join('-'));// There will be - between each name.  
console.log(all.join(' ')); //There will be WITH space between each name. 
console.log(all.join('\n')); //There will be a new line between each name. 
console.log("Assignment d & e");
//Old way of doing this
//all.unshift("Hans", "Kurt"), all.push("Lone", "Gitte"); //The unshift() method adds one or more elements to the beginning of an array and returns the new length of the array. The push() method adds one or more elements to the end of an array and returns the new length of the array.
console.log(all);
console.log("Assignment f");
all.shift(); //The shift() method removes the first element from an array and returns that removed element. This method changes the length of the array.
console.log(all); //["Kurt", "Peter", "lars", "Ole", "Janne", "hanne", "Sanne", "Lone", "Gitte"]
console.log("Assignment g");
all.pop(); //The pop() method removes the last element from an array and returns that element. This method changes the length of the array.
console.log(all); //["Kurt", "Peter", "lars", "Ole", "Janne", "hanne", "Sanne", "Lone"]
console.log("Assignment h");
all.splice(3, 1); //Starts at index 3, removes 1 Ole  - ["Kurt", "Peter", "lars", "Janne", "hanne", "Sanne", "Lone"] The splice() method changes the contents of an array by removing or replacing existing elements and/or adding new elements in place.
all.splice(3, 1); //Starts at index 3, removes 1 Hanne
console.log(all); //["Kurt", "Peter", "lars", "hanne", "Sanne", "Lone"]
console.log("Assignment i");
all.reverse(); //Reverses the order of an array.
console.log(all);// ["Lone", "Sanne", "hanne", "lars", "Peter", "Kurt"]
console.log("Assignment j");
all.sort(); //The sort() method sorts the elements of an array in place and returns the sorted array. The default sort order is ascending, built upon converting the elements into strings, then comparing their sequences of UTF-16 code units values.
console.log(all);//["Kurt", "Lone", "Peter", "Sanne", "hanne", "lars"]
console.log("Assignment k");
console.log(all.sort().toString().toUpperCase());//Now all the names are sorted and in upper case."KURT,LONE,PETER,SANNE,HANNE,LARS"
console.log(all.sort().toString().toLowerCase());//Now all the names are sorted and in lower case. "kurt,lone,peter,sanne,hanne,lars"
console.log("Assignment l");
let upperCaseNames = all.map(makeUpperCase); //The map() method creates a new array populated with the results of calling a provided function on every element in the calling array.

function makeUpperCase(name){
    return name.toUpperCase();
}
console.log(upperCaseNames);

console.log("Assignment m");

let filterArrayOfNames = all.filter(function (namesToFilter){
    
    return namesToFilter.toUpperCase().charAt(0) ==='I'||namesToFilter.toUpperCase().charAt(0)==='L'
});
console.log(all);
console.log(filterArrayOfNames);


/*
 * var names = ["kurt","ole","hans","ib"];
forEach()Executes a provided function once per array element.
names.forEach(function(name){
    console.log(name);
}); 
console.log(names.forEach());
What does this print? 
kurt1
ole
hans
ib
 */