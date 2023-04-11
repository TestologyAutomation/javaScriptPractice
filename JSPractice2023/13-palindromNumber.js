let number = 98679; let rev = 0; let rem=0;
temp = number;
while(number>0)
{
		rem = number%10;
		number = parseInt(number/10);
		rev = rev*10+rem;
}
if(rev==temp)
{
		console.log("The inputed number is Palindrome");
}
else
{
    console.log("The inputted number is not palindrome");
}