
console.log('hola')
//Method #1
// var classiCars = ['Saab', 'Volvo', 'BMW', 'Nissan', 'Porche']
//Lenght
// console.log( classiCars.length )
//add new element to array
// classiCars.push( 'Audi' )
// //delete the last element
// classiCars.pop()
// // console.log( classiCars )

// //add begin item
// classiCars.unshift( 'Lexus' )
// // console.log( classiCars )
// //delete the first item
// classiCars.shift();
// console.log(classiCars)
//create an individual variable
// let optionA = classiCars[0]
// console.log( optionA )
//changing a specific value
// classiCars[0] = 'Lambo'
// console.log(classiCars)


// //Method #2
var newCars = new Array( 'Saab', 'Volvo', 'BMW' )
//console.log(newCars)

// //Method #3
var cars = [];
cars[0]= "Saab";
cars[1]= "Volvo";
cars[2] = "BMW";

//console.log( cars )

//Split
var banner = "this is a banner, for the JS class, this is a practice with the Arrays methods"
var singleBanner = banner.split( " ", 3 )
console.log( singleBanner );

//Slice
var classiCars = ['Saab', 'Volvo', 'BMW', 'Nissan', 'Porche']
var filterCars = classiCars.slice(2,4)
console.log( filterCars )

//Splice
var secondCars = ['Saab', 'Volvo', 'BMW', 'Nissan', 'Porche', 'Lexus', 'Lamborghini']
console.log( secondCars.reverse() )
//delete and add
secondCars.splice( 1, 2, 'Toyota','Audi','Chevrolet' );
console.log( secondCars );
//just delete
secondCars.splice( 2, 3 )
console.log( secondCars )
//Concat
var secondCars = ['Saab', 'Volvo', 'BMW', 'Nissan', 'Porche', 'Lexus', 'Lamborghini']
var years = [1992, 1994, 2000, 2001, 2003]
var yearsTwo = [2010, 2011, 2000, 2001, 2003]

var twistArr = secondCars.concat( years,yearsTwo )
console.log(twistArr)