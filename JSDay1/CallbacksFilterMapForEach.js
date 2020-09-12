console.log("Assigment 1");
let names= ["Lars", "Jan", "Peter", "Bo", "Frederik" ];
let filterThese = function filterNames(arr, query) { //Array the array that needs to be filtered, query WHAT are we filtering for
    return arr.filter(function (namesToFilter){
        return namesToFilter.length <= 3;
      });
};

console.log('Original names:'+names);
console.log(filterThese(names));
console.log('Iterating through original names');
let iterateNames = names.forEach(function (name) {
    console.log(name);
  });
  console.log('Iterating through Filtered Names');
  let iterateFilteredNames = filterThese(names).forEach(function (name) {
    console.log(name);
  });

  console.log('Assignment 2');
  let makeUpperCase = (function (name){
    return name.toUpperCase();
});
  console.log(names.map(makeUpperCase));
  console.log('Assignment 3');
  let formatName = names.map(function(name){
   return "<li>" + name + "</li>"
  });
formatName.unshift("<ul>");
formatName.push("</ul>");
console.log(formatName.join("\n")); //readability version
console.log(formatName.join("")); //wanted version

console.log('Assignment 4');

var cars = [
    { id: 1, year: 1997, make: 'Ford', model: 'E350', price: 3000 },
    { id: 2, year: 1999, make: 'Chevy', model: 'Venture', price: 4900 },
    { id: 3, year: 2000, make: 'Chevy', model: 'Venture', price: 5000 },
    { id: 4, year: 1996, make: 'Jeep', model: 'Grand Cherokee', price: 4799 },
    { id: 5, year: 2005, make: 'Volvo', model: 'V70', price: 44799 }
  ];
  function filterByYear(year) {
    return cars.filter(function (car) {
      return car.year > year;
    });
  }
console.log('Cars filtered by newer than 1999');
  console.log(filterByYear(1999));

  function filterByMake(make) {
    return cars.filter(function (car) {
      return car.make === make;
    });
  }
  console.log('Cars filtered - only Volvos ');
  console.log(filterByMake('Volvo'));

  function lessThanPrice(price) {
    return cars.filter(function (car) {
      return car.price < price;
    });
  }
  console.log('Cars filtered - price less than 5000');

  console.log(lessThanPrice(5000));

  console.log('Assignment 4a');
  let SQLQuery = cars.map(function(car){
     return"INSERT INTO cars (id,year,make,model,price) VALUES(" 
     +car.id +","+ car.year +"," + car.make  +","+ car.model +"," + car.price +");"
   });

console.log(SQLQuery);
let makeTable = cars.map(function(car){
  return "<tr><td>"
  +car.id +"</td><td>"+ car.year +"</td><td>" + car.make  +"</td><td>"+ car.model +"</td><td>" + car.price +"</td>"
});
console.log(makeTable.join(" "));