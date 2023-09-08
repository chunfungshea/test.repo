// class Train{
//     constructor(light, airCon){
//         this.light= light;
//         this.airCon= airCon;
//     }
//     toggleLight(){
//         this.light = !this.light;
//     }
//     lightsStatus(){
//         console.log("Light is on?", this.light);
//     }
//     getSelf(){
//         console.log(this);
//     }
//     getPrototype(){
//         var proto = Object.getPrototypeOf(this);
//         console.log(proto);
//     }
// }
// var Train1 = new Train(false,true);
// Train1.toggleLight();
// Train1.lightsStatus();
// Train1.getSelf();
// Train1.getPrototype();

// class HighSpeedTrain extends Train{
//     constructor(passengers, highSpeedOn, airCon, light){
//         super(light ,airCon);
//         this.passengers = passengers;
//         this.highspeedOn= highSpeedOn;
//     }
//     toggleHighSpeed(){
//         this.HighSpeedOn= !this.HighSpeedOn;
//         console.log("High Speed Status:", this.HighSpeedOn);
//     }
//     toggleLights(){
//         super.toggleLight();
//         super.lightsStatus();
//         console.log("Light is working normally");
//     }
//     getself(){
//         console.log(this);
//     }
//     getPrototype(){
//         var proto= Object.getPrototypeOf(this);
//         console.log(proto);
//     }
// }
// var Train5 = new Train(false, false);
// var highspeed1 = new HighSpeedTrain (200 , false, false, false);

// Train5.toggleLight();
// Train5.lightsStatus();
// highspeed1.toggleLights()
// highspeed1.getPrototype();

// class Train{
//     constructor(color, lightsOn){
//         this.color = color;
//         this.lightsOn= lightsOn;
//     }
//     toggleLights(){
//         this.lightsOn = !this.lightsOn;
//     }
//     lightsStatus(){
//         console.log("Lights are on?", this.lightsOn);
//     }
//     getSelf(){
//         console.log(this);
//     }
//     getPrototype(){
//         var proto = Object.getPrototypeOf(this);
//         console.log(proto)
//     }
// }
// var myFirstTrain = new Train("blue and white", false);
// // var train2 = new Train ("blue", false)
// // var train3 = new Train ("White", true)
// myFirstTrain.toggleLights();
// myFirstTrain.lightsStatus();
// myFirstTrain.getSelf();
// myFirstTrain.getPrototype();

// class HighSpeedTrain extends Train{
//     constructor(passenger, highSpeedOn, color, lightsOn){
//         super(color,lightsOn);
//         this.passenger = passenger;
//         this.highSpeedOn= highSpeedOn;
//     }
//     toggleHighSpeed(){
//         this.highSpeedOn = !this.highSpeedOn;
//         console.log("This train is already On HighSpeed?", this.highSpeedOn)
//     }
//     toggleLights(){
//         super.toggleLights();
//         super.lightsStatus();
//         console.log("Lights are current On")
//     }
// }
// var train5 = new Train("white",false);
// var highSpeed1 = new HighSpeedTrain (20000, false, "white", false)
// highSpeed1.getSelf()
// highSpeed1.getPrototype()
// highSpeed1.toggleHighSpeed()
// highSpeed1.toggleLights()

class Animal{
    constructor(color = "yellow", energy = 100){
        this.color = color;
        this.energy = energy;
    }
    isActive(){
        if(this.energy >0){
            this.energy -=20;
            console.log("Energy is decrease, Energy is currently at :", this.energy)
        }else if(this.energy == 0){
            this.sleep();
        }
    }
    sleep(){
        this.sleep +=20;
        console.log("Energy is currently increasing at :", this.energy)
    }
    getColor(){
        console.log(this.color);
    }
}

class Cat extends Animal{
    constructor(sound= "purr", canJumpHigh = true, canClimbTree = true, color, energy){
        super(color,energy);
        this.sound = sound;
        this.canJumpHigh = canJumpHigh;
        this.canClimbTree = canClimbTree;
    }
    makeSound(){
        console.log(this.sound);
    }
}
class Bird extends Animal{
    constructor(sound = 'chirp', canFly = true, color, energy){
        super(color,energy);
        this.sound = sound;
        this.canFly = canFly;
    } 
    makeSound(){
        console.log(this.sound);
    }
}
class HouseCat extends Cat{
    constructor(houseCatSound = "meow", sound, canJumpHigh, canClimbTree, color,energy){
        super(color,energy,sound,canJumpHigh,canClimbTree);
        this.houseCatSound = houseCatSound;
    }
    MakeSound(option){
        if (option){
            super.makeSound();
        }else{
            console.log(this.houseCatSound);
        }
    }
}
class Tiger extends Cat{
    constructor(tigerSound = "roar!!", sound, canJumpHigh, canClimbTree, color,energy){
        super(color,energy,sound,canJumpHigh,canClimbTree);
        this.tigerSound = tigerSound;
    }
    MakeSound(option){
        if (option){
            super.makeSound();
        }else{
            console.log(this.tigerSound);
        }
    }
}
class Parrot extends Bird {
    constructor(canTalk = false, sound,canFly, color,energy) {
        super(sound,canFly, color,energy);
        this.canTalk = canTalk;
    }
    makeSound(option) {
        if (option) {
            super.makeSound();
        }
        if (this.canTalk) {
            console.log("I'm a talking parrot!");
        }
    }
}
var polly = new Parrot(true); // we're passing `true` to the constructor so that polly can talk
var fiji = new Parrot(false); // we're passing `false` to the constructor so that fiji can't talk

polly.makeSound(); // 'chirp', 'I'm a talking parrot!'
fiji.makeSound(); // 'chirp'

polly.color; // yellow
polly.energy; // 100

polly.isActive(); // Energy is decreasing, currently at: 80

var penguin = new Bird("shriek", false, "black and white", 200); // setting all the custom properties
penguin; // Bird {color: 'black and white', energy: 200, sound: 'shriek', canFly: false }

penguin.sound; // 'shriek'
penguin.canFly; // false
penguin.color; // 'black and white'
penguin.energy; // 200
penguin.isActive(); // Energy is decreasing, currently at: 180