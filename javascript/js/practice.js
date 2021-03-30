document.getElementById("write-demo").innerHTML = 5 + 6;
document.write(5 + 5);

function demo() {
  alert('hii')
}

var test;
console.log(typeof test); //undefined
 //demo();
// var TestVar;
var testVar = null;
// alert(TestVar);
// alert(typeof TestVar);
var j = 5;
if (j > 5) {
  console.log(5)
} else if (j > 0) {
  console.log(j);
} else {
  console.log('none');
}

var tex;
switch (new Date().getDay()) {
  case 6:
  tex = "Today is Saturday";
  break;
  case 0:
  tex = "Today is Sunday";
  break;
  default:
  tex = "Looking forward to the Weekend";
}

document.getElementById("switch").innerHTML = tex;
var num = ["one", "two", "three", "four"];
var i = 0;
var text = "";

while (num[i]) {
  text += num[i] + "<br>";
  i++;
}

document.getElementById("loop").innerHTML = text;
var arr = ["one", "two", "three", "four"];
var i = 0;
var texts = "";

for (;arr[i];) {
  texts += arr[i] + "<br>";
  i++;
}

document.getElementById("for").innerHTML = texts;
var x = add(4, 5) * 2;
document.getElementById("fun").innerHTML = x;

function add(a, b) {
  return a + b;
} 

for(i = 0; i < 10; i++){
  if (i === 3) {
    continue;
  }
  if (i === 8) {
    break;
  }
  console.log(i);
}

var multiply = function (a, b) {return a * b};
console.log(multiply(78, 6));

(function() {
  console.log('self invoked')
})();

console.log(add.toString())

const xy = (x1, y1) => { return x1 * y1 };
console.log(xy(2,2))

function square(x) {
  x = x * x;
  return x;
}

var y = 10;
var result = square(y);
console.log(y);
console.log(result);

function turnOn(machine) {
  machine = {
    isOn: true
  };
}

var computer = {
  isOn: false
};
turnOn(computer);
console.log(computer.isOn);

function myFunction(arg1, arg2) {
  this.firstName = arg1;
  this.lastName  = arg2;
}

var x2 = new myFunction("John", "Doe");
var x3 = new myFunction("Hii", "Hello");
console.log(x2.firstName);
console.log(x3.firstName);
 
var person = {
  firstName: "John",
  lastName: "Doe",
}

person.fullName = function() {
  return this.firstName + " " + this.lastName;
};
person.firstName = 'Hemlata';
person.lastName = 'Patidar';
console.log(person.fullName())

var person = {
  fullName: function(city, country) {
    return this.firstName + " " + this.lastName + "," + city + "," + country;
  }
}
var person1 = {
  firstName:"John",
  lastName: "Doe"
}
var person2 = {
  firstName:"Mary",
  lastName: "Doe"
}
console.log(person.fullName.call(person2, 'indore', 'India')); 
console.log(person.fullName.apply(person1, ['indore', 'India'])); 
var person = new Object();
person.firstName = "John";
person.lastName = "Doe";
person.age = 50;
person.eyeColor = "blue";
console.log(person.age)
var person = {firstName: "John", lastName: "Doe", age: 50, eyeColor: "blue"};
delete person.age; 
console.log(person)
var person = {name: "John", age: 50, city: "New York"};
var myArray = Object.values(person);
console.log(myArray);
var person = {name: "John", age: 30, city: "New York"};
var myString = JSON.stringify(person);
console.log(myString);
var person = {
  firstName: "John",
  lastName : "Doe",
  language : "en",
  get lang() {
    return this.language;
  }
};
console.log(person.lang)

var person = {
  firstName: "John",
  lastName : "Doe",
  language : "",
  set lang(lang) {
    this.language = lang;
  }
};

person.lang = "en";
console.log(person.language);
var x = 10;
var y = 20;
var z = "30";
var result = x + y + z;
console.log(result)
var y2 = 10;
var z2 = 20;
var x2 = "30";
var result2 = x2 + y2 + z2;
console.log(result2)
console.log(100 / "Apple")
var x = 100 / "Apple";  
console.log(isNaN(x))
var myNumber = 32;
myNumber.toString(10);  // returns 32
myNumber.toString(32);  // returns 10
myNumber.toString(16);  // returns 20
myNumber.toString(8);   // returns 40
myNumber.toString(2); 
var x3 = 500;             
var y3 = new Number(500);
console.log(x3 == y3)
console.log(x3 === y3)
var x = 9.656;
x.toFixed(0);           // returns 10
x.toFixed(2);           // returns 9.66
x.toFixed(4);           // returns 9.6560
x.toFixed(6);           // returns 9.656000

console.log(Number(true));          // returns 1
console.log(parseInt("12.11"));     // returns first number
console.log(parseFloat("12.11"));   // returns first number
console.log( Number.MAX_VALUE )
console.log(Number.MIN_VALUE)

console.log(Math.PI)
console.log(Math.round(4.9))
console.log(Math.round(4.4))
console.log(Math.ceil(4.9))
console.log(Math.ceil(4.4))
console.log(Math.floor(4.9))
console.log(Math.trunc(4.4))   // returns the integer part of x
console.log(Math.sign(-4));    // returns -1
console.log(Math.sign(0));     // returns 0
console.log(Math.pow(2,3))     // returns the value of x to the power of y:
console.log(Math.sqrt(9))
console.log(Math.abs(-2.5))    //returns positive value

var cars = ["Saab", "Volvo", "BMW"];
console.log(cars[0])
console.log(cars[cars.length-1])
console.log(cars.length)
var person = {firstName:"John", lastName:"Doe", age:46};
console.log(person.firstName)
var fruits, text;
fruits = ["Banana", "Orange", "Apple", "Mango"];
console.log(fruits[4]);    //
text = "<ul>";
fruits.forEach(myFunction);
text += "</ul>";
document.getElementById("fun-list").innerHTML = text;

function myFunction(value) {
  text += "<li>" + value + "</li>";
} 

fruits.push('kiwi');
console.log(fruits)
console.log(typeof fruits);    // returns object
console.log(Array.isArray(fruits));   // returns true
console.log(fruits.toString())        // convert array to string
console.log(fruits.join(" + "))
fruits.pop()
console.log(fruits)
fruits.shift();
console.log(fruits)
fruits.unshift("Lemon");
console.log(fruits.unshift("Lemon"))
//delete fruits[0];  
console.log(fruits)
fruits.splice(2, 2, "grape", "watermelon");
console.log(fruits)
fruits.splice(4, 1);
console.log(fruits)
cars.concat(fruits);
console.log(cars.concat(fruits))
var citrus = fruits.slice(1);
console.log(fruits)
console.log(citrus)
fruits.sort();        // First sort the elements of fruits
fruits.reverse(); 

var txt = "";
var numbers = [45, 4, 9, 16, 25];
numbers.forEach(myFunction);

function myFunction(value, index, array) {
  txt = txt + value + "<br>";
}
console.log(txt)
var numbers2 = numbers.map(myFunction);

function myFunction(value) {
  return value * 2;
}

var over18 = numbers.filter(myFunc);

function myFunc(value, index, array) {
  return value > 18;
}

console.log(numbers2)
console.log(fruits.indexOf("grape"))

// var d = new Date(2021, 01, 1);
var d = new Date();
console.log(d)
console.log(d.toDateString())
console.log(d.toUTCString())
console.log(d.toISOString())
console.log(d.getFullYear())
console.log(d.getDate())
console.log(d.getDay())
d.setFullYear(2021);
console.log(d)
var today = new Date();
someday = new Date();
someday.setFullYear(2021, 0, 14);
if (someday > today) {
  text = "Today is before January 14, 2100.";
} else {
  text = "Today is after January 14, 2100.";
}
console.log(text);
var x = 1;
console.log(Boolean(x)); 
// Constructor function for Person objects
function Person(first, last, age, eye) {
  this.firstName = first;
  this.lastName = last;
  this.age = age;
  this.eyeColor = eye;
  //this.nationality = "English";
}

// Create 2 Person objects
var myFather = new Person("John", "Doe", 50, "blue");
var myMother = new Person("Sally", "Rally", 48, "green");
//Person.prototype.nationality = "English";

Person.prototype.name = function() {
  return this.firstName + " " + this.lastName;
};
//it is just an object which is attached to each n every method of object or an aaray or an function
console.log(myFather.name())  
var myObject = {
  firstName:"John",
  lastName: "Doe",
  fullName: function () {
    return this;
  }
}
myObject.fullName(); 
console.log(myObject.fullName())

var x = myFunction();            // x will be the window object
function myFunction() {
  return this;
}
console.log(x)

// This is a function constructor:
function myFunction(arg1, arg2) {
  this.firstName = arg1;
  this.lastName  = arg2;
}

// This creates a new object
var x = new myFunction("John", "Doe");
console.log(x.firstName)

var add = (function() {
  var counter = 0;
  return function() {counter += 1; return counter}
})();
console.log(add())

var x = document.getElementById("main");
var y = x.getElementsByTagName("p");
document.getElementById("element-div").innerHTML = y[0].innerHTML;
var z = document.querySelectorAll("p.intro");
document.getElementById("test").innerHTML = z[1].innerHTML;
document.getElementById("test").innerHTML = "Hii, text has been changed";
document.getElementById("image").alt = "landscape.jpg";
document.getElementById("demo").style.color = "blue";

function changeText(id) {
  id.innerHTML = "Ooops!";
}

function checkCookies() {
  var text = "";
  if (navigator.cookieEnabled == true) {
    text = "Cookies are enabled.";
  } else {
    text = "Cookies are not enabled.";
  }
  document.getElementById("cooke").innerHTML = text;
}

function upperCaseFun() {
  var x = document.getElementById("fname");
  x.value = x.value.toUpperCase();
}

function mOver(obj) {
  obj.innerHTML = "Thank You"
}

function mOut(obj) {
  obj.innerHTML = "Mouse Over Me"
}

function mDown(obj) {
  obj.style.backgroundColor = "#1ec5e5";
  obj.innerHTML = "Release Me";
}
  
function mUp(obj) {
  obj.style.backgroundColor="#D94A38";
  obj.innerHTML="Thank You";
}

var A = function() {
  this.x = function() {
    return 10;
  };
};

var a = new A();    // constructor function gets executed
a.x();
console.log(a.x())
var B = function() { };
B.prototype.x = function() {
  return 20;
};

var b = new B();    // constructor function gets executed
b.x();    
console.log(b.x())

var x = document.getElementById("myBtn");
x.addEventListener("mouseover", myFunction);
x.addEventListener("click", mySecondFunction);
x.addEventListener("mouseout", myThirdFunction);

function mySecondFunction() {
  document.getElementById("text").innerHTML += "Clicked!<br>";
}

function myThirdFunction() {
  document.getElementById("text").innerHTML += "Moused out!<br>";
}

window.addEventListener("resize", function(){
  document.getElementById("resize").innerHTML = Math.random();
});

function removeHandler() {
  document.getElementById("text").removeEventListener("mouseout", myThirdFunction);
}

function validateForm() {
  var x = document.forms["myForm"]["fname"].value;
  if (x == "") {
    alert("Name must be filled out");
    return false;
  } else if (isNaN(x) || x < 1 || x > 10) {
    alert("Input not valid");
    return false;
  } else {
    alert("Input OK");
  }
  
}

function myInput() {
  var inpObj = document.getElementById("id1");
  if (!inpObj.checkValidity()) {
    alert(inpObj.validationMessage);
  } else {
    alert("Input OK");
  } 
}

var w = window.innerWidth
|| document.documentElement.clientWidth
|| document.body.clientWidth;

var h = window.innerHeight
|| document.documentElement.clientHeight
|| document.body.clientHeight;
console.log(h)
console.log(screen.width)
console.log(screen.availWidth)
console.log(screen.availHeight)
console.log(screen.colorDepth)
console.log(window.location.href)
console.log(window.location.hostname)
console.log(window.location.pathname)
console.log(window.location.protocol)
console.log(window.location.port)

function deleteFunction() {
  var txt;
  if (confirm("Press a button!")) {
    txt = "DELETED!";
  } else {
    txt = "Cancle!";
  }
  document.getElementById("delete").innerHTML = txt;
}

//setTimeout (
  function promptFunction() {
    var txt;
    var person = prompt("Please enter your name:", "Hemlata Patidar");
    if (person == null || person == "") {
      txt = "User cancelled the prompt.";
    } else {
      txt = "Hello " + person + "! How are you today?";
    }
    document.getElementById("promt").innerHTML = txt;
  }
//, 2000)