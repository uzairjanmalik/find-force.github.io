// f= ma;
// m= f/a;
// a= f/m;
const user= prompt(`what you want to find? 1 force 2 mass`);
alert(`WE KNOW THAT ACCELERATION IS CONSTANT! (10 meter persecond)`);
let a = 10;
if(user== "1"){
let m=prompt(`enter the value of mass if acceleration is constant 9.8 meter per second`);
alert(`force is about, ${m*a}newton`);
}
else if(user== "2"){
let f= prompt(`enter the value of force if acceleration is constant`);
alert(`the value of mass is ${f/a}kg`);    
}