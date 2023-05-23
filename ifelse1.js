console.log("Assuming Percentage To Be 61% : ");
let percentage = 61;

if(percentage > 70 && percentage <= 100)
{
    console.log("Congratulations ! You're Passed With Distinction.");
}
else if(percentage > 60 && percentage < 70){
    console.log("Congratulations ! You're Passed With First Class.");
}
else if(percentage > 35 && percentage < 60){
    console.log("Congratulations ! You're Passed With Second Class.");
}
else{
    console.log("Better Luck Next Time ! ");
}