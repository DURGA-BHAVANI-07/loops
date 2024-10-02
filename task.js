// 1.write a program to print 10 numbers using for loop and write same program suing while and do-while loop?

// for loop
for(var a=1;a<=10;a++){
    console.log(a)
}

// while loop
var a=1;
while (a<=10){
    console.log(a);
    a++;
}

// do while
var a=1;
do{
    console.log(a);
    a++;
}while(a<=10);

// 2.write a program to print even numbers using for loop and write same program suing while and do-while loop?
// for loop
 for(var a=2; a<=20;a+=2){
        console.log(a);
    
 }

//  while loop
 var a=2;
 while (a<=20){

    console.log(a);
    a+=2;
 }

 //do while
 var a=2;
 do{
    console.log(a);
    a+=2;
 }while(a<=20);

//  3.write a program to print odd numbers using for loop and write same program suing while and do-while loop?


let a = 1;

while (a <= 20) {
    console.log(a);
    a += 2;
}

//  while loop
var a=1;
while (a<=20){

   console.log(a);
   a+=2;
}


//do while
var a=1;
do{
   console.log(a);
   a+=2;
}while(a<=20);


// 4.write a program to console the marks grade D using conditional statements and the marks for D grade is b/w the 35 and 45 ?

let marks = 40; 

if (marks >= 35 && marks <= 45) {
    console.log("Grade: D");
} else {
    console.log("Grade: Not D");
}
