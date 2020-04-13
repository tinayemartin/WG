var today = new Date();
var hour = today.getHours();
var greeting;

if(hour>18){
    greeting="Manheru akanaka!";
} else if(hour>12){
    greeting="Maswera sei!";
} else if(hour>0){
    greeting="Mangwanani!";
} else {
    greeting="Hello";
}

document.write(greeting);