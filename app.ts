export{};
//1. Write a ts program to print all natural numbers from 1 to n. - using while loop
        //lets n = 20
     
    var n1:number = 1;
    while(n1 <= 20 ){
        console.log(n1);
        n1++;
    }
//2. Write a ts program to print all natural numbers in reverse (from n to 1). - using while loop
    while(n1 >= 1){
        console.log(n1);
        n1--;
    }
//3. Write a ts program to print all alphabets from a to z. - using while loop
    var n2:number = 0;
    var alphabet: string ;
    while(n2>=0 && n2<26){
        alphabet = String.fromCharCode(65 + n2)
        console.log(alphabet);
        n2++;
    }
//4. Write a ts program to print all even numbers between 1 to 100. - using while loop
    var n3 :number = 1;
    while(n3 <= 100){
        if(n3%2==0){
            console.log(n3);
        }
        n3++;
    }  
//    5. Write a ts program to print all odd number between 1 to 100. 

var n4 :number = 1;
while(n4 <= 100){
    if(n4%2!=0){
        console.log(n4);
    }
    n4++;
}

//6. Write a ts program to find sum of all natural numbers between 1 to n.
 
  var sum:number = 0;
  for (let index = 0; index < 20 ; index++) {
        
        console.log(sum);
        
        sum = sum + index;
    
  }

 //7. Write a ts program to find sum of all even numbers between 1 to n.  
        //lets n = 50

 var sum:number = 0;
    console.log(sum);
    

 for (let index = 0; index < 50; index++) {
    if(index%2==0){
        sum = sum + index;
        console.log(sum);
    }
 }

//8. Write a ts program to find sum of all odd numbers between 1 to n. 

var sum:number = 1;
console.log(sum);


for (let index = 2; index < 50; index++) {
if(index%2!=0){
    sum = sum + index;
    console.log(sum);
}
}

//9. Write a ts program to print multiplication table of any number.
          var any: string|null = prompt("Enter Your Number");
          var any2:number = Number(any);
              for (let index = 0; index <10 ; index++) {
                  console.log(`${any2} * ${index} =`, any2 * index);
             }


//10. Write a ts program to count number of digits in a number.
 var any: string|null = prompt("Enter Your Number");
         var any2:number = Number(any);

                 for (var index = 0; index < any2 ; index++) {
                     any2/=10
                    
                 }

                 console.log(index);
                

//11. Write a ts program to find first and last digit of a number.
 	function firstDigit(n:number):number
 	{
 		while (n >= 10)
 			n /= 10;	
 		return Math.floor(n);
 	}
 	function lastDigit(n:number):number
 	{
		
 		return Math.floor(n % 10);
 	}

 		let n9:number = 98562;
 		console.log(firstDigit(n9) + " " + lastDigit(n9));

 //12 Write a ts program to find sum of first and last digit of a number.      
 function firstDigit2(n:number):number
 {

     while (n >= 10)
         n /= 10;
    
    
     return Math.floor(n);
 }


 function lastDigit2(n:number):number
 {
    
     return Math.floor(n % 10);
 }



     var n:number = 1234;
     console.log(firstDigit2(n) + lastDigit2(n));

// //13. Write a ts program to swap first and last digits of a number.    

 function firstDigit3(n:number):number
 {

     while (n >= 10)
         n /= 10;
    
    
     return Math.floor(n);
 }


 function lastDigit3(n:number):number
 {
    
     return Math.floor(n % 10);
 }



     var nl:number = 1234;
     console.log(firstDigit3(nl))
     console.log(lastDigit3(nl));
     var swap1:number = lastDigit3(nl);
     lastDigit3(nl) == firstDigit3(nl);
     firstDigit3(nl) == swap1;
 
    
    //14. Write a ts program to calculate sum of digits of a number.
     function getSum(n:number):number
 {
     var sum:number = 0;
     while (n != 0) {
         sum = sum + n % 10;
         n = n / 10;
     }
     return sum;
 }
 

 var n:number = 111;
 console.log(getSum(n));


 //15. Write a ts program to calculate product of digits of a number.

 function getProduct(n:number):number
 {
     var prod:number = 1;
     while (n != 0) {
         prod = prod  * (n % 10);
         n = Math.floor(n / 10);
     }
     return prod;
 }
 

 var n:number = 134;
 console.log(getProduct(n));

 //16. Write a ts program to enter a number and print its reverse.

 var rev:number = 0;
 var num:number = 123456;
 var lastdigit:number;

 while(num != 0){
 	lastdigit = num % 10;
   rev = rev * 10 + lastdigit;
   num = Math.floor(num/10);
 }

 console.log("Reverse number : "+rev);



// //17. Write a ts program to check whether a number is palindrome or not.
 
  var num2:string|null = prompt("Enter your number for palindrome");
  var n:number = Number(num2);
  var rev : number = 0;

 do{
     var digit : number = n % 10;
     var rev : number = (rev * 10) + digit;
     n /= 10;
 }while(n!=0)

 if(n == rev){
     console.log(num2,"Number is palindrom"); 
     }else{
     console.log(num2,"Number is not palindrom");

 }

//18. Write a ts program to find frequency of each digit in a given integer.
function frequency(n7:number, d:number):number{
    var c:number = 0;
    while(n7>0){
    
        if (n7%10 == d){
            c++;
        }
        n7 =n7/10;

    }
    return c;
}

var n7 :number = 12234;
var d :number= 2;
console.log("frequency is", frequency(n7, d));



//20. Write a ts program to Print all ASCII Charachter code.

for (let i = 0; i <=127; i++) {
    console.log(String.fromCharCode(i));
    
}
 
//21. Write a ts program to find power of a number using for loop.
function powerFind(base:number, exponent:number):number{
        for (let index = 1; index < exponent; index++) {
            base = base*exponent
            
        }return base
}


var baseGiven :number = 3;
var exponentGiven :number = 3;
console.log("power is:", powerFind(baseGiven, exponentGiven));

//22. Write a ts program to find all factors of a number.
var findFactor:number= 45 ;
for (let index = 0; index < findFactor ; index++) {
    if(findFactor % index == 0){
            console.log("factor is :", index);
            
    }
}

//23  Write a ts program to calculate factorial of a number.
var findFectorial : number = 4;
var fectorial:number = 1;
for (let index = 1 ; index <= findFectorial   ; ++index) {
     fectorial *= index;
    console.log("fectorial is:", fectorial);
    
}

//26. Write a ts program to check whether a number is Prime number or not.
const number:number = 23;
let isPrime:boolean = true;

if (number === 1) {
    console.log("1 is neither prime nor composite number.");
}
else if (number > 1) {
    for (let i = 2; i < number; i++) {
        if (number % i == 0) {
            isPrime = false;
            break;
        }
    }

    if (isPrime) {
        console.log(`${number} is a prime number`);
    } else {
        console.log(`${number} is a not prime number`);
    }
}
else {
    console.log("The number is not a prime number.");
}



    



















