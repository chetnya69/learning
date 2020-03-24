// function myfunction(){
//     document.getElementById("demo").innerHTML="this is a new paragraph using javascript"
// }
// we can accesss elements by getElementsByClassName, getElementsByTagName

//Javascript Classes

// class Car {
//     constructor(brand) {
//       this.carname = brand;
//     }
//     present() {
//         return "I have a " + this.carname;
//       }
//   }
  
//   mycar = new Car("Ford");      //object created
  
//   document.getElementById("demo2").innerHTML = mycar.present();

// by passing an argument by initializing a variable
//   class Car {
//     constructor(brand) {
//       this.carname = brand;
//     }
//     present(x) {
//       return x + ", I bought a new " + this.carname;
//     }
//   }
  
//   mycar = new Car("Ford");
  
//   document.getElementById("demo2").innerHTML = mycar.present("Hooray!!!...");

// String Methods:
    // var str="hello this is chetnya gupta";
    // document.getElementById("demo").innerHTML=str;
    // var x = str.indexOf(a);                 document.getElementById("demo").innerHTML = x;
    // var x = str.lastIndexOf(z);          document.getElementById("demo").innerHTML = x   
    // var x = str.length();            document.getElementById("demo").innerHTML = x
    // var x = str.search(a);               document.getElementById("demo").innerHTML = x   

    // var str = "Apple, Banana, Kiwi";
    // var x = str.slice(x, q)          document.getElementById("demo").innerHTML = x
    // var x = str.slice(x, q)          document.getElementById("demo").innerHTML = x
    // var x = str.substring(x, q)      document.getElementById("demo").innerHTML = x
    // var x = str.substr(x, q)         document.getElementById("demo").innerHTML = x
    // var x = str.replace();               document.getElementById("demo").innerHTML = x   

    // var x = str.toUpperCase();           document.getElementById("demo").innerHTML = x
    // var x = str.toLowerCase();           document.getElementById("demo").innerHTML = x
    // var x = str.concat();                document.getElementById("demo").innerHTML = x
    // var x = str.charAt(position)         document.getElementById("demo").innerHTML = x
    // var x = str.charCodeAt(position);    document.getElementById("demo").innerHTML = x
    // var x = str.split();             document.getElementById("demo").innerHTML = x

// Arrays:
// var cars = ["Subaru","Volvo","BMW","Mitsubishi"];
// document.getElementById("demo").innerHTML=cars;
// document.getElementById("demo").innerHTML = cars.toString();
// document.getElementById("demo").innerHTML = cars.join(" * ");
// cars.pop();    document.getElementById("demo").innerHTML=cars;
// var x = cars.pop();  document.getElementById("demo").innerHTML=x;   // gives popped item
// cars.push("Audi");   document.getElementById("demo").innerHTML=cars;
// cars.shift(); document.getElementById("demo").innerHTML=cars;
// var x = cars.shift(); document.getElementById("demo").innerHTML=x;   // gives shifted item
// cars.unshift("Mercedes benz");
// cars[0] = "Mercedes benz"; document.getElementById("demo").innerHTML=cars;             // Changes "subaru" to "Mercedes benz"
// delete cars[0]; document.getElementById("demo").innerHTML=cars;
// cars.splice(2, 0, "volkswagon", "chevrolet");   // (2)gives the position where you want to add,   (0) no. of elements to be removed
// cars.splice(0, 1);        // Removes the first element of cars
// var vehicles = cars.slice(1);  document.getElementById("demo").innerHTML=vehicles;
// var vehicles = cars.slice(1, 3);    document.getElementById("demo").innerHTML=vehicles;
// cars.sort();     // sorts alphabetically (according to ascii values)
// cars.reverse();

// var numbers = [40, 100, 1, 5, 25, 10];           // sort
// numbers.sort(function(a, b){return a - b});      // sort in ascending order
// numbers.sort(function(a, b){return a - b});      // sort in descending order


// function myfunction() {
//     var httpRequest = new XMLHttpRequest();
//     httpRequest.onreadystatechange = function() {
//         if (httpRequest.readyState == 4 && httpRequest.status == 200) {
//                 var data = JSON.parse(httpRequest.responseText);
//                 document.getElementById("div").innerHTML=data.name;
//         }
//     };
//     httpRequest.open('GET', test.json, true);
//     httpRequest.send(); 
// }

// this requests the file and executes a callback with the parsed result once
//   it is available
// fetchJSONFile('test.json', function(data){
//     // do something with your data
//     console.log(data);
// });