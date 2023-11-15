///OPERATORS//

// There are 4 types of operators

//{{1.ASSIGNMENT OPERATOR:--}} 

let num1=20;
// (= is assignment operator assign value to num1)
{
let num2=30;

num2+=1;
console.log("num2=30 num+2=1 or num2=",num2,"+",1,"is:",num2);
// num2++= num2=num2+1(increment operator)
// num2=30+1 
// 32 is printed on the console screen.


// here num2 value becomes 31
num2-=1;
console.log("num2=31 num-2=1 or num2=",num2,"-",1,"is:",num2);
// num2--= num2=num2-1(decrement operator)
// num2=31-1 
// 30 is printed on the console screen.


// here num2 value becomes 30
num2*=1;
console.log("num2=30 num2*=1 or num2=",num2,"*",1,"is:",num2);
// num2=num2*1 
// 30 is printed on the console screen.


// here num2 value becomes 30
num2/=10;
console.log("num2=30 num2/=1 or num2=",num2,"/",10,"is:",num2);
// num2=num2/10 
// 3 is printed on the console screen.


let num3=30
num3%=10;
console.log("num3=30 num3%=10 or num3=",num3,"/",10,"is:",num3);
// num2=num2%10 
// 0 is printed on the console screen.


// It is called exponentiation assignment..
let num4=3
num4**=3;
console.log("num4=3 num4**=3 or num4=",num4,"**",3,"is:",num4);
// num4=num4**3 
// num4*num4*num4
// cube 0f 3  is printed on the console screen that is 27.


console.log("Assignment operators ENDS HERE..................");
console.log("\n");

}



//{{2.Arithmetic operators:--}}
{

let n=10;
let n1=25;

// addition operation
console.log("The sum of ",n,"+",n1,"is:",n+n1);


//subtraction operation
console.log("The subtraction of ",n,"-",n1,"is:",n-n1);

//multiplication operation
console.log("The multiplication of ",n,"*",n1,"is:",n*n1);

//division operation
console.log("The division of ",n,"/",n1,"is:",n/n1);

//modulo operation 
console.log("The remainder of ",n1,"%",n,"is:",n1%n);

//exponentiation power
let num=4
let num1=2
console.log("The exponent answer of ",num,"**",num1,"is:",num**num1);

console.log("Arithmetic Operator ENDS HERE.........");
console.log("\n");
}


//{{3.Comparison Operators:---}}
{
    let x=50;
    // (== compares the values are equal or not)
    if(x==50)
    {
        console.log("X is equal to 50");
    }
    else
    {
        console.log("X is not equal to 50");
    }

    // if(x===abhishhek)
    // //(=== compares and also checks the data type ) 

    // while(x!=0)
    // {
    //     //(!= shows that the values are not equal)
    // }

    // if(x>15)
    // {
    // //(> shows that the x values is greater than 15)
    // }

    // if(x<60)
    // {
    //     //(< shows that the x value is less than 15)
    // }

    // if(x>=50)
    // {
    //     //(>= shows that the x value is greater than or equal to 50)
    // }

    // if(x<=50)
    // {
    //     (<= shows that the x value is less than or equal to 50)
    // }

    console.log("Comparison operator ENDS HERE");
    console.log("\n");
}


//{{4.Logical Operators}}
{
    let y=20,s=30;
    if(y==20&&s==20)
    {
        console.log("X & Y are equal");
    }
    else
    {
        console.log("They are not equal");
    }


let p=30;
let q=20;
if(p==30||q==30)
{
    console.log("May be one is correct");
} 
else
{
    console.log("both are wrong");
}

console.log("Logical operators ENDS HERE.....")
console.log("\n");
}


//To take input from the user we use parse in javascript//

    function addition(a,b)
    {
      console.log("The sum of a+b using function is:",a+b);
    }

{
    let a,b;
    addition(10,20);  
}

{
let f;
let g;
 f=parseInt(prompt("Enter the first number:",f));
 g=parseInt(prompt("Enter the second number",g));
console.log("The answer is a*b is:",f*g);
}




