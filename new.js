

//This is a comment
// /* thi is a multiple line 
/*Comment 
*can go many many lines
*/
// /* can also be a multiple single line comment */
// //console.log(3>2);
// //console.log(3>4);
// //console.log(10 != 1)
// var score = "8";
// //console.log("Mid-Level skills:",score<0 && score>10); //"and" Task
// var timeremaining = "0";
// var energy = "10";
// //console.log("GamerOver:" , timeremaining ==0 || energy == 0); // "Or" Task
// var num1 = "2";
// var num2 = "5";
// var test1 = num1 % 2; //test to if 2 is equally divided by 2 
// var test2 = num2 % 2;
// var result1 = test1 ==0 ;
// var result2 = test2 ==0 ;
// //console.log("Is", num1, "an even number?", result1);
// //console.log("Is", num2, "an even number?", result2);
// var counter = 0; 
// counter += 5; //first to assign variable then to accumulate numbers by += 
// counter +=3
// //console.log(counter);
// var age = 20;
// if ( age>65 ){
//     console.log("You get your income from your pension.")
// }else if ( age<65 && age >= 18 ){
//     console.log("Each month you get a salary")
// }else if ( age<18 ){
//     console.log("You get an allowance.")
// }else{
//     console.log("The value of the age is not numerical.")
// } //IF-Else statment

// var day = "Friday";
// switch(day){
//     case "Monday":
//         console.log("Go to work");
//         break;
//     case "Tuesday":
//         console.log("Go to work");
//         break;
//     case "Wednesday":
//         console.log("Go to work");
//         break;
//     case "Thursday":
//         console.log("Go to work, almost there");
//         break
//     case "Friday":
//         console.log("It's friday, lets go for a drink after work");
//         break;
//     case "Saturday":
//         console.log("It's holiday");
//         break;
//     case "Sunday":
//         console.log("Holiday, but tomorrow have to go to work again");
//         break;
//     default:
//         console.log("There is no such day");
// } //Switch statment

// for ( var i = 3; i >= 0 ; i-- ) {
//     console.log(i);
// } 
// console.log("successful") //For loop station

// var counter = 1;
// while (counter <10 ){
//     console.log(counter);
//     counter = counter+1;
// }
// console.log("successful");
// //While loop

// for (var i=1995; i<=2023; i++){
//     for ( var u=1; u<=12; u++){
//         console.log(i+","+u);
//     }
// } //nested loop 

// for (var i=0;i<=10;i++){
//     for(var o=0;o<=10;o++){
//         console.log(i*o);
//     }
// } 

// var metal= "12345678910";
// for (var i=1; i<=10; i++){
//     if(i==1){
//         console.log("Gold medal");
//     }else if(i==2){
//         console.log("Silver medal");
//     }else if(i==3){
//         console.log("Bronze medal");
//     }else{
//         console.log(i);
//     }
// } //if else statment inside a for loop

// for (var i=1; i<=10; i++){
//     switch(i){
//         case 1:
//             console.log("Gold metal");
//             break;
//         case 2:
//             console.log("Silver metal");
//             break;
//         case 3:
//             console.log("Brozen metal");
//             break;
//         default:
//             console.log(i);
//             break;
//     }
// } //switch statement inside a for loop

// var i=1;
// if (i<5){
//     console.log("hello")
// }else {
//     console.log("bye")
// }
// if(i==0 && i==1){
//     console.log("hello");
// } else{
//     console.log("bye");
// }
// for(var i=0;i<2;i++){
//     for(var j=0; j<3; j++){
//         console.log(i+j);
//     }
// }
// for(var i=0;i<2;i++){
//     console.log(i)
// }
// var i=7
// if (i<=5){
//     console.log("hello");
// }else if(i<=10){
//     console.log("night")
// }else{
//     console.log("bye")
// }

// var i=3;
// var j=4;
// if(i==3 && j<5){
//     console.log("hello")
// }else{
//     console.log("byr")
// }

// var score= [85,42,70,91,55,63,77,60,59,88];
// let passScore =60;

// for (var i=0; i<score.length ;i++){
//     if(score[i] >=60){
//         console.log("Pass")
//     }else{
//         console.log("failed")
//     }
// }

// var cityName = ["New York", "Los Angeles", "Chicago", "Houston", "Phoenix"];
// var population= [8336817, 3977683, 2716, 2368, 1682];

// for (var i=0 ; i<population.length; i++){
//     if(population[i] >1000000){
//         console.log(cityName[i])
//     }else{
//         console.log("thank you")
//     }
// }

// var weeklyTemperatures = [28, 31, 33, 29, 30, 32, 28];
// var day= ["monday", "tuesday", "wednesday", "thursday", "friday", "saturday", "sunday"];

// for (var i=0; i<weeklyTemperatures.length; i++){
//     if (weeklyTemperatures[i]>30){
//         console.log(day[i]+ "Warning")
//     }else{
//         console.log(day[i] + "Its a nice day")
//     }
// }

// function myfunction(a,b){
//     var c = a+b;
//     console.log(c);
// }

// myfunction(2,2);
// myfunction(4,4);

// var myArray= ["Andrew", "Array", "practice", "salt", "sushi"]; //build array

// console.log(myArray[3]);

// var Myarray= ["andrew", "Andrewa","salt", "laptop", "mobile", "headphone", "coffee", "topper"];

// function myListArray(array){
//     for (var i=0; i<array.length; i++){
//         console.log(array[i])
//         }
//     }


// myListArray(Myarray);

// function letterFinder(word,match){
//     for (var i=0; i<word.length; i++){
//         if (word[i] == match){
//             console.log('Found the', match, 'at',i)
//         }else {
//             console.log('-----No match found at', i)
//         }
//     }
// }

// letterFinder("test","t");

// var assistantManager = {
//     rangeTilesPerTurn: 3,
//     SocialSkills:20,
//     StreetSmart:20,
//     Health:30,
//     SpecialAbility:"Give me my holiday back",
//     greeting: "How are you doing"
// };

// var table ={
//     legs:3,
//     color:"brown",
//     price:100,
// };

// var house ={
//     rooms:3,
//     color:"blue",
//     price:1200000,
//     location:"Central"
// };

// house.Window = 5;

// var house2 = {};
// house2.rooms=4;
// house2.window=5;
// house2.color="red";
// house2.price=30000;
// house2.location="south side";

// var house3 = {};
// house3["rooms"]= 3;
// house3["level"]=3;
// house3["price"]=30000;
// house3["window"]=4;
// house3["color"]="white";
// house3["number of people can stay"]= 10;


// var arrofSpeed = ["speed", "color", "brand"];
// var drone={
//     speed:100,
//     color:"blue",
//     brand:"toyota",
//     one: "Speed 1",
//     two: "Speed 2",
//     three:"Speed 3"
// }
// arrofSpeed.push("one");
// arrofSpeed.push("two");
// arrofSpeed.push("three");
// console.log(arrofSpeed);

// for (var i=0; i<arrofSpeed.length; i++){
//     console.log(drone[arrofSpeed[i]])
// }

// function arryBuilder(one,two,three,four){
//     var arr= [];
//     arr.push(one);
//     arr.push(two);
//     arr.push(three);
//     arr.push(four);
//     return arr;
// }

// var Simplearr= arryBuilder('apple', 'banana', 'pear', 'delicous');

// console.log(Simplearr)

// Math.random();
// var decimal = Math.random();
// console.log(decimal);
// console.log(decimal *10);

// Math.ceil();
// var rounded= Math.ceil(decimal);
// console.log(rounded);

// var decimal= Math.random()*10;
// var rounded= Math.ceil(decimal);
// console.log(rounded);

// var greet = "Hello, ";
// var place = "Bangkok"

// greet.length;
// greet.charAt(0);
// "Bang".concat("k").concat("ok");
// console.log("ho-ho-ho".indexOf('h'));
// console.log("ho-ho-ho".split('-'))

var clothes =[];
clothes.push("one");
clothes.push("two");
clothes.push("three");
clothes.push("four");
clothes.push("five");
clothes.pop();
clothes.push("Sixth");
console.log(clothes)

var favCar ={};
    favCar.color= "red",
    favCar.covertible= true

    console.log(favCar);

var test = typeof(true);
console.log(test)

var car = {};
car.color="red";
car.mileage= 34567;
console.log(car);
car.turnOn = function(){
    console.log("The Engine now is turned on")
}
console.log(car);
car.lightIsOn = function(){
    console.log("The Lights are on");
}
console.log(car);
car.turnOn()
car.lightIsOn()

function addTwoNums(a,b){
    try{
        if(typeof(a) != 'number'){
            throw new ReferenceError('The first argument is not a number')
        } else if (typeof (b) != 'number'){
            throw new ReferenceError('the second argument is not a number')
        }else{
            console.log(a+b)
        }
        
        }catch(err){
        console.log('Error!!!')
        }
}
addTwoNums(5, "5");
console.log('it still works');

function letterFinder(word, match) {
    var conditional = typeof (word) == 'string' && word.length >=2
    var conditional2 = typeof(match) == 'string' && match.length ==1
    if (conditional == true && conditional2 == true){
        for(i = 0; i < word.length; i++) {
            if(word[i] == match) {
                //if the current character at position i in the word is equal to the match
                console.log('Found the', match, 'at', i)
            } else {
                console.log('---No match found at', i)
            }
        }
    }else {
        console.log('Please pass correct argument to the function')
    }
    
}
letterFinder()
letterFinder("cat","c");

var str = ("hello");
str.match("Jello");

try{
    Number(5).toPrecision(300)
}catch(e){
    console.log("error")
}

var val= ('this is a test')
function consoleLog(val){
    console.log(val);
    return val
}

consoleLog('Hello')

//Functional programming
var currencyOne =100;
var currencyTwo =0;
var exchangeRate = 1.2;

function convertCurrency(amount, rate){
    return amount*rate;
}

currencyTwo = convertCurrency(currencyOne, exchangeRate);
console.log(currencyTwo);

consoleLog("hello");

function doubleNum (num){
    return num*2
}
function objectMaker (val){
    return {
        prop: val
    }
}

objectMaker(100000);     

class Animal{
    useLeg(){
        console.log("walking!")
    }
}
class Dog extends Animal{
    useLeg(){
        console.log("make a hole to burry the bone!")
    }
}
class Cat extends Animal{
    useLeg(){
        console.log("scratch my back")
    }
}
var Golden = new Dog();
var Siamese = new Cat();
Siamese.useLeg();
Golden.useLeg();

// console.log(Golden);

var dog ={
    bark: function() {
        return "I Dont Like You, and Go Away Human!!!"
    }
}

var cat= {
    meow: function() {
        return "I like to sleep and i need some sleep Human"
    }
}

function barkAtHuman(thing){
    console.log(thing.bark())
}

function IceCream(flavor){
    this.flavor = flavor;
    this.melt= function(){
        console.log(`This ${this.flavor} ice cream is melting!`)
    }
}
var strawberryIceCream = new IceCream("strawberry");
strawberryIceCream.melt()

class Train{
    constructor(light, airCon){
        this.light= light;
        this.airCon= airCon;
    }
    toggleLight(){
        this.light = !this.light;
    }
    lightStatus(){
        console.log("Light is on?", this.light);
    }
    getSelf(){
        console.log(this);
    }
    getPrototype(){
        var proto = Object.getPrototypeOf(this);
        console.log(proto);
    }
}
var Train1 = new Train(false,true);
Train1.toggleLight();
Train1.lightStatus();
Train1.getSelf();
Train1.getPrototype();
console.log(Train1);

var clothingItem = {
    price : 50,
    color : "White",
    material: "cotton",
    season: "autumn",
}

for (prop of Object.keys( clothingItem)){
    console.log(prop + ":" + clothingItem[prop])
}

function count(...food){
    console.log(food.length);
}
count("burgers", "fries", null)

const a =true;
if(!a){
    console.log("green")
}else{
    console.log("blue")
}

var result = 0;
var i=4;
while(i>0){
    result +=2;
    i--;
}
console.log(result)

var message ="hello";
message += "world"
message = "Bye"
console.log(message)

