const num = 10;
const num2 = 30;

console.log(num+num2);
console.log(num-num2);
console.log(num*num2);
console.log(num%num2);
console.log(num/num2);

let a = 4;
a++;
console.log(a);
a--;
console.log(a);
let x = 5
x+=1;
console.log(x);
console.log(num>=num2);
let age = 10;
let age2 = "10";

console.log("looselyequal",age == age2);
console.log("looselynotequal",age != age2);

console.log("strictlyequal",age === age2);
console.log("strictly not equal",age !== age2);
if(age == age2 && num>= num2){
    console.log("and",true);
}
else{
    console.log("and false",false);
}
