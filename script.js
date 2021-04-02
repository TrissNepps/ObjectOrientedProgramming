'use strict';
//New Lesson - What is Object-Oriented Programming
//What is it? How does it work? The 4 principles?

//What is OOP? A programming paradigm(style) based on objects. We use objects to model/describe real-world or abstract features. Objects can contain data(properties) and code(methods). By using objects we pack all the data and behavior into one block. This makes it easy to act directly on the data.

//In OOP objects are self contained blocks of code - we use the objects as building blocks of our applications and then we make them interact with one another. These interactions happen through a public interface (API) which is a collection of methods that the code outside the object can access and that we use to communicate with the object.

//Why does OOP exist? The paradigm developed to organize code for flexability. Before OOP our code is scattered across multiple functions/global scope without any structure. This type of style is called SPAGETTI CODE which makes it hard to maintain large bases and add new functionality. So OOP created as a solution and now OOP is most popular and used programming paradigm in large scale software engineering but it is not the only way of doing this.

//Another way is functional programming which allows same goal of avoiding spagetti code. For now focus OOP.

//Till now we only use objects as loose collections of data without interactions - like single cell amoeba - now its time to staart putting cells togther to make organelles and shit!

//Also did not have a way to produce objects programatically - in OOP we need way to generate new objects from our code. To do this we use classes.

//A class is a blueprint which can be used to make new objects based on the rules described in the class (DNA) -

//Objects created by a class are known as instances of that class. An instance is a real object we can use in our code created by a class - a class is not an object

//The instance is like the protein created from the mRNA whcih is the blue print. Can make many proteins from the same blueprint. Can use the blueprint to make as many proteins as we need. All of these objects can have different data in them but they all have the same functionality!

//How do we actually design classes? How do we model real-world data into classes? (how to make the blueprint)

//There are 4 principles that we can use to create and implement good classes - 1) Abstraction   2) Encapsulation    3) Inheritance    4) Polymorphism --- all of these can be used outside of OOP as well

//Abstraction - ignoring or hiding details that dont matter. This allows us to get an overview perspective of what we are implementing without messing with details that do not really matter to our implementation -EX: Implementing a phone for a user to use. Without abstraction we could design our class to include everything there is about the phone including all the internal stuff like veryifying temp, voltage, speaker, ect. However as a user interacting do you really need so much detail? Not really. In reality all of the non pertinent details have been abstracted away and all that is left is the simple phone which only has the necessary detais included for operation. Internally the phone still needs to vibrate, measure voltage or turn on a speaker but we can hide these details from the user - this is abstraction

//abstractions used all the time - ex addeventlistener. Do we know how it works behind scenes? No. Do we care? Not really. We dont need to. The low level details of how it works has been abstracted away from us, the user. So we can use the function without having to totally understand it.

//Next - Encapsulation - to keep some properties and methods private inside the class so they are not accessible outside the class. However some methods can be exposed as a public interface, which is aka API. Interactions between objects happen bt an API. Private properties may look like a password or pin which outside code cant access. Inside the class they are accessible ad they can be used inside the encapsulated object. This prevents external code from manipulating the internal data(state). Allowing external code to manipulate internal state is hacking/bugs galore. The public interface is all the methods that are NOT private (not encapsulated). MAking methods private makes it easier for us to change our code without breaking code from the outside which may rely on some of the methods.

//Should alsways have goal to nicely encapsulate most data and methods - only leave essential methods public.

// Inheritance - in OOP when we have two closely related clases, like user and admin, we can have 1 class inherit from the other (1 parent and 1 child) - the child class extends the parent class

//A child class inherits all the properties and methods of its parent class. All the properties and methods available to the child - ex: both user and admin have to log in - instead of writing both logic twice - inherit the login method from the more global class (user) to the more specific class, the child class (Admin)

//child class can have its own methods and properties as well. The admin can have its own functionality

//Polymorphism - Means a child class can overwrite a method inherited from a parent class.

//New Lesson - OOP in Javascript
//How is OOP different in JS and different ways to implement in JS

//classical model uses class to build instances which can be used in code. The process of creating an instance is aka instantiation

//How does OOP work in JS? JS has prototypes. All objects in JS are linked to a cetain prototype object. So each object has a prototype and each prototype object contains methods nad properties that all the objects linked to that prototype can access and use - this behavior is aka prototypal inheritcance. - this means all bjects that are linked to a certain prototype object, can use the methods and properties defined on that prototoype. So objects inherit methods and propreties from the prototype. This inheritcance is dff from last lecture where one class inherited from another class but in this case it is an instance inheriting from a class

//Objects delegate behavior (methods) to the linked prototype object. Besides prototypal inheritcan we also call the mechanism delegation. Objects delegate their methods (behavior) to the rototype while in classical OO the bahvior (methods) are copied from the class to the objects

//Array.protoype is the prototype object of all the arrays we create in JS. The prototype object contains all the aarray methods, including .map().

//So if we linke num.map() together then it means num is linked to that prototype so has all methods defined in that prototype object.

//How do we create prototypes? How do we linkk objects to prototypes? How can we create new objects without having classes? In JS there are 3 different ways of doing all this
//1) constructor functions    2) ES6 classes     3) Object.create()

//constructor functios are a way of creating objects programitcally using a function. This also sets the new objects prototype. This is how built in objects like arrays, maps and sets are implemented

//ES6 released introduced classes to JS which is more moderen way of doing OOP in JS. These are not the kind of classes from the last lecture - they are a layer of abstraction over constructor functions (easier syntax)

//Object.create() is easiest way of linking an object to a prototype object. Not as used as other two methods.

//Abstraction, encapsulation, inherticance and polymorphism are still valid and important with protoypal inheritcance.

//New Lesson - Constructor Functions and the new Operator
//
//We can use constructor functions to build objects using functions. Constructor functions are normal functions - we just call them with the new operator
//EX: Creating a contstuctor function for a person *constructor functions start with a capital letter. Arrow functions DONT work bc lack a this keyword - only function expressions/declarations
const Person = function (firstName, birthYear) {
  this.firstName = firstName;
  this.birthYear = firstName;

  this.calcAge = function () {
    console.log(2037 - birthYear); //THIS IS BAD PRACTICE
  };
};

const jonas = new Person('Jonas', 1991);
//What happens when we call a function with the new operator? 4 steps
// 1) A new empty object is created {}
//2) The function is called and the this keyword is set to the newly created object
//3) The newly created object is linked to a protoype
//4) The object created in the beginning is automatically returned from the constructor function - it returns the empty object from the beginning (Step 1) ; The object no longer needs to be empty tho. Whatever we add to it will be returned by the function.
console.log(jonas); //this gives us a new object containing the firstname and birthyear

//recap - we called constructor function with new operator which creates a new empty object. Then the function is called and inside the this keywrod is = the empty object. Inside the function we start to set properties to that object based on the parameters (firstName and birthYear). Finally the object created gets returned from the function, which is the object containing the two new properties.

const matilda = new Person('Matilda', 2017);
const jack = new Person('Jack', 1975);

console.log(matilda, jack); //two new objects created programatically =) We created objects from constructor functions which simulate classes so we can call them instances. Jonas, matila and jack are all instances of person.

const jay = 'jay';
//There is an operator we can use to test for that
console.log(jonas instanceof Person);
console.log(jay instanceof Person); //not an object

//What if we want to add methods to our objects? same! Check above in Const Person to see. However it is bad practice - you should never create a method inside of a constructor function. Imagine we create thousands of person objects using this constructor fuction - then each object carries that function - too many copies, bad for performance!  To solve the problem use prototypes and prototypal inheritcance. SO YOU DONT KNOW HOW TO ADD METHODS YET. You only know how to add properties.

//New Lesson - Prototypes
//First, each and every function in JS has a property called prototype including constructor functions. Every object created by a certain constructor function will get access to all the methods and properties we defined in the constructors prototype property which in our example is Person.protoype, aka the prototype property of the constructor function

//all objects created by that cnstrcutor function will get access to all the methods and properties efined on the Person.prototype property

//LEts add a method to this property
Person.prototype.calcAge = function () {
  console.log(2037 - this.birthYear);
};

console.log(Person.prototype); //now we can see the calcage function had been added to the PErson object

//now children of that constructor function have access to calcAge!
jonas.calcAge(); //gives 46! So we can use the method on the jonas object even tho its not really on jonas object itself but Jonas is a decendent of PErson and PErson has the calcage method so Jonas does as well

//Much better than using this method bc it would have created copies for each object - but now there is only one master copy with the PErson constructor function and the other objects created from that constructor function can use it without having to keep it in their objects

//jonas and matilda and jack are this related to Person - but how and why does it work? Any object has methods and properties from ITS prototype and the prototype of Jonas, Matilda and Jack is PErson.prototype

//Each object has a special property called __proto__ which we can see
console.log(jonas.__proto__); //this gives us the prototype of jonas whch shows the calcage function is why jonas can use it. The prototype of the jonas object is essentially the prototype property of the construct function
console.log(jonas.__proto__ === Person.prototype); //PErson.prototype is the prototype that will be used by all the objects created with the PErson constructor function

console.log(Person.prototype.isPrototypeOf(jonas)); //gives true which confirms that Person.prototype is the prototype of jonas. Same of matilda and JAck. But Person.prototype is NOT the prototype of Person
console.log(Person.prototype.isPrototypeOf(Person)); //gives false

//step #3 creates the __proto__ property and sets the value to the prototype value of the function being called which is what line 123 shows and gives true for as proof. This is how JS knows internally that the jonas object is connected to Person.prototype

//we can also set properties on the prototype
Person.prototype.species = 'Homo Sapiens';
console.log(jonas, matilda); //They show up in the prototype!~
console.log(jonas.species, matilda.species); //now both objects inherit from the prototype!

//The poperty is not directly in the object - only properties declared directly on the object itself are own properties. Not including inherited properties - there s a way of checking
console.log(jonas.hasOwnProperty('firstName')); //gives true bc the object does have a property with that name but if we try species we get false bc that property is not really inside the jonas object =- it simply has access to it bc of the prototype.
console.log(jonas.hasOwnProperty('species'));

//New LEsson - Prototypal Inherticance and the Prototype Chain
////prototype chain is the series of links between objects that are linked through prototypes and it works similar to the scope chain

//New Lesson - Prototypal Inheritcance on Built-In Objects
console.log(jonas.__proto__);
console.log(jonas.__proto__.__proto__); //this is why we can call hasOwnProperty on jonas! This is the top of the protoype chain --- tons of methods and properties!
console.log(jonas.__proto__.__proto__.__proto__); //gives null! We already were at the top of the scope chain now we went off the ledgeeeeeeeeeeee

console.log(Person.prototype.constructor); //shows the function!
console.dir(Person.prototype.constructor);

//lets look at prototypes of arrays
const arr = [3, 7, 4, 9, 5, 3, 5, 5, 7];
console.log(arr.__proto__); //shows all the methods we love and know! this is why all the arrays get access to all of these methods - each does not contain them but each inherits them from prototypical inheritcane
console.log(arr.__proto__ === Array.prototype);
console.log(arr.__proto__.__proto__); //top of the chain!

//How can we add new methods to the protoype? ex - create a method that returns all the unique elements of an array
Array.prototype.unique = function () {
  return [...new Set(this)];
};
console.log(arr.unique()); //So we added a new method called unique and now ALL of the arrays made in the future will have access to this through the prototypical inheritance chain so we can call it on any array we want

//however extending the prototype of a built in object is generally not a good idea unless in a solo project - next version of js may add method with the same name but different functionality so your code will use the new mthod which works different thus breaking your code.. Second for a team if multiple developers implement the same method with a diff name it puts in tons of bugs - - so really dont add them dude!

//Some more built in objects in the console

const h1 = document.querySelector('h1');
console.dir(h1); //gives us the h1 object that contains the __prototype__ -- can go wayyyy down the rabbit hold 6 or 7 levels until you reach the Object (the root protoype)
console.dir(x => X + 1); //functions are objects so they have protoypes that contain all teh methods we have used previously on functions.. ths is why we can call methods on functions - functions are objects and objects have prototypes.

//CHALLENGE
const Car = function (make, speed) {
  this.make = make;
  this.speed = speed;
};

Car.prototype.accelerate = function () {
  this.speed += 10;
  console.log(`${this.make} is going at ${this.speed} km/h`);
};

Car.prototype.brake = function () {
  this.speed -= 5;
  console.log(`${this.make} is going at ${this.speed} km/h`);
};

const bmw = new Car('BMW', 120);
const Mercedes = new Car('Mercedes', 95);

bmw.accelerate();
bmw.accelerate();
bmw.accelerate();

Mercedes.brake();
Mercedes.brake();
Mercedes.brake();
Mercedes.accelerate();
Mercedes.accelerate();
Mercedes.accelerate();
Mercedes.accelerate();
Mercedes.accelerate();

//New Lesson - ES6 Classes
//We saw how to implement prototypal inherictance with constructor methods and then manually setting methods on the constructor functions prototype property --- but now lets look at ES6 classes which let us do the same thing but in a nicer more modern syntax

//lets implement Person using a class - classes are functions

class PersonCl {
  //this is a class declaration
  constructor(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
  }

  calcAge() {
    console.log(2037 - this.birthYear);
  }

  get age() {
    return 2037 - this.birthYear;
  }
}

const jessica = new PersonCl('Jessica', 1986);
//this is a class expression
const PersonCll = class {};

console.log(jessica); //calcage is included in the __proto__ so it wont fudge up performance like the last method would if we put our methods direcly ito the objects!
jessica.calcAge();
console.log(jessica.age); //gives same value
console.log(jessica.__proto__ === PersonCl.prototype);

//So we can write the methods inside the class but OUTSIDE the constructor and then they will automatically be added to the prototype property of the class

//we can add a method manually to the prototpype as well
PersonCl.prototype.greet = function () {
  console.log(`Hey ${this.firstName}`);
};
jessica.greet(); //this proves the objects get access to the protoypal inheritance

//Classes are not hoisted - function declarations are so we can use them before they are declared but not with classes
//Classes are first-class citizens so they can be passed into functions and we can return them from functions - bc classes are really just a special type of funfction
//The body of a class is always exectued in strictmode - it all gets executed in strict mode no matter what

//Should we use constructor functions ro classes? Constructor functions are not old or deprecated - fine to use - this i spersonal preference.

//New LEsson - Setters and Getters
//common to all objects in JS can have setter and getter properties. These are known as assessor properties while more normal properties aka data properties.

//setters and getters are functions that get and set a value - they still look like regular properties
//ex: look at them both in an object literal using bank accont example
const account = {
  owner: 'jonas',
  movements: [122, 454, 233, 655],
  //To add a getter we start with writing a normal method - like a method to get the latest movement. Then to transfrom it to a getter prepend the word get
  get latest() {
    return this.movements.slice(-1).pop();
  },
  set latest(mov) {
    //any setter method needs one parameter
    this.movements.push(mov);
  },
};
console.log(account.latest); //we write it is a property. This can be useful when we want to read something like a property but still want to make alculations before. is not mandatory to have a setter and getter on same property - usually one is good enough

account.latest = 50;
console.log(account.movements); //this is how getters and setters work for any regular object

//classes also have setters and getters that work in the same way. We will try the out in our person class.

//setters and getters veru useful for data validation - such as with names

//New Lesson - Static Methods
//Ex to understand what static method is is the Array.from() method which converts any array like strcuture into a real array.
//the from method is not a function bc the from method is really attached to the arra constructor, not the prototype property- so all the arrays do not inherit this method bc it isnt on their prototype it really is actually on the constructur

//array.from() is attached to the array. the from method is in the array namespace

//static methods are used as helpers that should be related to a certain constrcutor - so lets implement static methods ourselves for a construction function and for a class

//to add a static method
Person.hey = function () {
  console.log('Hey 🐱‍🚀');
  console.log(this);
};

Person.hey(); //this works but it is not inherited
// jonas.hey(); //this doesnt work bc it isnt in the honas prototype

//create a static method in a class

// static hey(){
//     console.log('Hey there');
// } this has to be put inside a class {}

//New Lesson - Object.create
//We learned about constructor functions and ES6 clsses but there is a 3rd way of implementing it - using object.create() which works differently than construction functions or classes

//There is still prototypal inherticance as an idea but no prototype properties involved or construction functions and no new operator. So we use object.create() to manually set the prototype of an obect to any other object that we want

//so lets create an object that we want to be the prorotype of all the Person objects
const PersonProto = {
  //this will be the prorotype of all the person objects
  calcAge() {
    console.log(2037 - this.birthYear);
  }, //this is all the methods we want Person object to inherit so we put in prototype. Now we just need to create a person object with this object as the prototype - so we use object.create

  init(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
  },
};

const steven = Object.create(PersonProto); //this will return a brand new object thart is linked to the prototype that we passed in - so steven is empty and it will get linked to the person proto object which will be its prototype
console.log(steven); //this is an empty object but inside the __proto__ we have calcAge

steven.name = 'Steven';
steven.birthYear = 2002; //this is not good practice but will fix. We want a programatic way of creating new objects instead of manual like this but for now we are only worried about protoypes and protype chains
steven.calcAge(); //this gives an answer of 35 - we implemented prototypal inheritance

//Object.create is least used method of implementing prototypal inheritcance but still need to know how it works

console.log(steven.__proto__); //the same as PersonProto
console.log(steven.__proto__ === PersonProto);

//the following method is how to do it correctly programatically - implent a function to do the work for us a new method with any name (init) -- do it insde the personproto object
const sarah = Object.create(PersonProto);

sarah.init('Sarah', 1979);
sarah.calcAge();

//object.create creates a new object. The prototype of that object will be the object that we passed in. So the big difference is that with constructor functions when you use that syntax: const jonas = new Person('Jonas), 1990) then the new object you create (jonas) will have the prototype from Person.        BUT - If you use Object.create :   const steven = Object.create(PersonProto) then you get to CHOOSE what prototype your new object (steven) is going to get access too

//CHALLENGE
// class CarCl {
//   constructor(make, speed) {
//     this.make = make;
//     this.speed = speed;
//   }

//   accelerate() {
//     this.speed += 10;
//     console.log(`${this.make} is going ${this.speed}km/h`);
//   }
//   brake() {
//     this.speed -= 5;
//     console.log(`${this.make} is going ${this.speed}km/h`);
//   }

//   get speedUS() {
//     return this.speed / 1.6;
//   }

//   set speedUS(speed) {
//     this.speed = speed * 1.6;
//   }
// }

// const ford = new CarCl('Ford', 120);
// console.log(ford.speedUS);
// ford.accelerate();
// ford.speedUS = 50;
// console.log(ford);

//New Lesson - Inherticance Between "Classes": Constructor Functions
//LAst lectures explored how prototypal inheritcan works in JS using constructor functions, ES6 classes and object.create

//all of these methods allow objects to inherit methods from its prototype

//we will create a new student class and make it inherit from the person class we have used so far. Person will be parent class and student will be child class - student is subtype of a person - it is a person but mor specific - so ideal child class. With this inherticance setups we can have speciif methods for the student but still use generic person methods as well

//We will inherit between classes using constrcutor functions - this will show how we setup the prototype chain in order to allow inheritcance between the protoype properties of two different constructor functions - next lecture we will do same thing using ES6 classes which is easier and then finally we will use object.create as well

//Below is the Person and prototype we set up on that person which will use for this example - now we will build a constrcutor function for the student
const PersonX = function (firstName, birthYear) {
  this.firstName = firstName;
  this.birthYear = birthYear;
};

PersonX.prototype.calcAge = function () {
  console.log(2037 - this.birthYear);
};

const Student = function (firstName, birthYear, course) {
  Person.call(this, firstName, birthYear);
  this.course = course;
};

Student.prototype = Object.create(Person.prototype); //Linking prototypes

//the student class has one additional property. Now create new student
const mike = new Student('Mike', 2020, 'Computer Science');
console.log(mike);

//nw lets add a method
Student.prototype.introduce = function () {
  console.log(`My name is ${this.firstName} and I study ${this.course}`);
};

mike.introduce();
mike.calcAge(); //gives 17. How did it work? When we do mike.calcAge we are doing a method look up. Calcage is not in the mike object or in mikes prtototype - in mikes prototype is where we defined the introduce method but not calc age. So it looks further up the chain and finds calcage in Perso.prototype which is where we defined it.. This is why we set up the chain like this so the mike method can inherit from the parent class

//summary: we are able to call a method on the persons prototype property on a student object and it still works due to inheritance

console.log(mike.__proto__);
console.log(mike.__proto__.__proto__);

console.log(mike instanceof Student);
console.log(mike instanceof Person); //both true bc prototypes are linked
console.log(mike instanceof Object);
//
Student.prototype.constructor = Student;

//CHALLENGE
const CarA = function (make, speed) {
  this.make = make;
  this.speed = speed;
};

CarA.prototype.accelerate = function () {
  this.speed += 10;
  console.log(`${this.make} is going ${this.speed}km/h`);
};
CarA.prototype.brake = function () {
  this.speed -= 5;
  console.log(`${this.make} is going ${this.speed}km/h`);
};

// const EV = function (make, speed, charge) {
//   CarA.call(this, make, speed);
//   this.charge = charge;
// };

// //Link the prototypes
// EV.prototype = Object.create(CarA.prototype);

// EV.prototype.chargeBattery = function (chargeTo) {
//   this.charge = chargeTo;
// };

// EV.prototype.accelerate = function () {
//   this.speed += 20;
//   this.charge--;
//   console.log(
//     `${this.make} is going ${this.speed}km/h ith a charge of ${this.charge}`
//   );
// };

// const tesla = new EV('Tesla', 120, 23);
// tesla.chargeBattery(90);
// console.log(tesla);
// tesla.brake();
// tesla.accelerate();
// tesla.accelerate();
// tesla.accelerate();

//New Lesson - Inheritcance Btween Classes: ES6 Classes
class PersonClass {
  constructor(fullName, birthYear) {
    this.fullName = fullName;
    this.birthYear = birthYear;
  }

  calcAge() {
    console.log(2037 - this.birthYear);
  }

  greet() {
    console.log(`Hey ${this.fullName}`);
  }

  get age() {
    return 2037 - this.birthYear;
  }

  set fullName(name) {
    if (name.includes(' ')) this._fullName = name;
    else alert(`${name} is not a full name.`);
  }

  get fullName() {
    return this._fullName;
  }

  static hey() {
    console.log();
    ('Hey there!');
  }
}

class StudentX extends PersonCll {
  //the extends keyword links the protocols behind the scenes
  constructor(fullName, birthYear, course) {
    super(fullName, birthYear); //this is the constructor function of the parent class - we dont need to specify the name of the parent aagain - we just pass in the parameters that we used. super needs to happen first bc the call to the super function is responsible for creating the this keyword
    this.course = course;
  }
  introduce() {
    console.log(`My name is ${this.fullName} and I study ${this.course}`);
  }
}

const martha = new StudentX('Martha Jones', 2012, 'Computer');

martha.introduce();
// martha.calcAge();

//New Lesson - Inheritcance Between "classes": Object.create
//how to use object.create to implement a complex prototye chain like we did with constructor functions and ES6 classes

const raplh = Object.create(PersonProto); //this is our parent class. PersonProto used to be the prototoype of all the new Person objects. now we want to add a new prototype in the middle of the chain between those two - so we will make student inherit directly from person

const StudentProto = Object.create(PersonProto);
Student.init = function (firstName, birthYear, course) {
  PersonProto.init.call(this, firstName.birthYear);
  this.course = course;
};

const jays = Object.create(StudentProto);
//Now the student proto is the protoype of the jay object. Person proto is the prototype of student proto. so it is a parent of student which is a parent of jay

jays.init('Jay', 2010, 'Comps');
StudentProto.introduce = function () {
  console.log(`${this.course}`);
};
jays.introduce();
jays.calcAge();

//ES6 CLASSES IS WHAT WE NEED TO KNOW!!!!!!!!!!!!!!!!!!!!

//New LEsson - Another Class Example

//Example - bank account we implemented before in bankist
class Account {
  constructor(owner, currency, pin) {
    this.owner = owner;
    this.currency = currency;
    this.pin = pin;
    this.movements = [];
    this.locale = navigator.language;

    console.log(`Thanks for opening an account, ${owner}`);
  }

  deposit(val) {
    this.movements.push(val);
  }
  withdrawl(val) {
    this.deposit(-val); //these methods are the interface(API) to our object
  }

  approveLoan(val) {
    return true;
  }
  requestLoan(val) {
    if (this.approveLoan(val)) {
      this.deposit(val);
      console.log(`loan approved`);
    }
  }
}

const acc1 = new Account('Jonas', 'EUR', 1111);
console.log(acc1);

//We have the 3 values we passed into the constructor now in the object. What about the movements and locale array? We want the arrays to start empty bc the movements and locale we want to get from the navigator.language. how?

//this.movements = [];       this.locale = navigator.language;
//This gives us the empty movements array and the curent locale for the currency depending on user location!(en-US)

//What about deposits and withdrawls(movements)?a
// acc1.movements.push(250);
// acc1.movements.push(-150);
console.log(acc1); //bad practice - instead of interacting with a property like that we should create methods to interact with the properties. This avoids future bugs as application grows so we will create deposit and withdrawl method above
acc1.deposit(250);
acc1.withdrawl(-150);
console.log(acc1);

console.log(acc1.pin); //we can access this from outside but we shouldnt be able to!!!!!!!!!!!!!**************!!!!!!!!!!
//Same true for methods like requestLoan
acc1.requestLoan(1111);
acc1.approveLoan(1000); //should not have access to this iternal property! Security breach! This is why we need data encapsulation and data privacy.

//New Lesson - Encapsulation: Protected Properties and MEthods
//encapsulation means keeping some properties and methods private inside the class so they cant be access from outside the class - the other methods are exposed as public interface API

//prevent code from outside manipulating data inside is a big reason to encapsulate, secondly when we expose only a small API of a few public methods then we can change the other internal methods with more confidence.

//JS classes do not yet support real data privacy and encapsulation - truly private class fields and methods will be here tho

//here we will fake encapsulation by using a convention

//so we want to protect the movements array so noone can manipulate it. For now we will add an _ infront of the property name and change that everywhere. This does not make the value private, it is merely a convention. They are protected properties but we could still get the movements from outside

//New Lesson - Encapsulation: PRivate Class Fields and MEthods
//private class fields and methods are part of big proposal to change JS classes called class fields. The proposal is at stage 3 o not part of language yet but it is likely it will become part

//4 main fields and methods   1) public, 2)private, 3) public methods, 4) private methods

//Think of a field as a property that will be on all instances - a public instance field. The two fields could be movements or locale bc they will be on all objects we create with that class. LEts add them as public fields

class AccountF {
  //public fields
  locale = navigator.language;
  _movements = [];

  //private fields
  //now we can make it so properties are not accessible from the outside
  #movements = []; //# makes it private and if we try to read it we get syntax error: Private Field

  //to make a privat emethod syntax is same as private fields
  //   #approveLoan(val({

  //   }))q
}

//New Lesson - Chaining MEthods
//we have to return the object itself at the end of the method that we want to be chainable - For ex
// acc1.deposit(300).deposit(500).withdrawl(35).requestLoan(20000).withdrawl(4000); //does not work until you return this keyword in the methods you are chaining.

//New LEsson - ES6 Classes Summary
//review terminology - look at the code slide on the video

//CHALLENGE
class CarCl {
  constructor(make, speed) {
    this.make = make;
    this.speed = speed;
  }

  accelerate() {
    this.speed += 10;
    console.log(`going fast`);
  }

  brake() {
    this.speed -= 5;
    console.log(`gling slow`);
    return this;
  }

  get speedUS() {
    return this.speed / 1.6;
  }

  set speedUS(speed) {
    this.speed = speed * 1.6;
  }
}
class EVCl extends CarCl {
  #charge;
  constructor(make, speed, charge) {
    super(make, speed);
    this.#charge = charge;
  }

  chargeBattery(chargeTo) {
    this.#charge = chargeTo;
    return this;
  }

  accelerate() {
    this.speed += 20;
    this.#charge--;
    console.log(`charging fast`);
    return this;
  }
}

const rivian = new EVCl('Rivian', 120, 23);
console.log(rivian);
console.log(rivian);
// console.log(rivian.#charge);//private and encapsulated inside the class. From outside cannot change unless you charge the battery or accelerate - the method is a public API so we can manipulate the charge property from the outside but without being able to directly access it ---SECURE!

rivian
  .accelerate()
  .accelerate()
  .accelerate()
  .brake()
  .chargeBattery(50)
  .accelerate()
  .accelerate();
//so now can chain the methods after adding the return this keyword to all of the methods I wanted to chain.

//rivian also
console.log(rivian.speedUS);
