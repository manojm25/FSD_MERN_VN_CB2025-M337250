// Write a program that takes a number and prints whether it is even/odd, 
// positive/negative/zero, and whether it is divisible by both 3 and 5.

let number = 20;

//checking even or odd
if(number%2==0)
{
    console.log("The Number is Even");
}else {
    console.log("The Number is ODD");
}

//checking number is postive/negative/zero
if(number>0)
{
    console.log("The Number is Positive");
}else if(number<0)
{
    console.log("The Number is Negative");
}else if(number==0)
{
    console.log("The Number is equal to zero");
}

//check the number whether it is divisible
if(number%3==0 && number%5==0)
{
  console.log("The number is divisble by both three and five");
}else if(number%3==0 && number%5!=0){
  console.log("The number is divisible by three by not by 5")
}else if(number%5==0 && number%3!=0)
{
    console.log("The number is divisible by 5 but not 3")
}