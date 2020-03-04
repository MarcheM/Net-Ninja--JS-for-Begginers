function getAverage (a,b){
    
    var average = (a + b)/2; //local variable
    return average;
}
var myResult = getAverage(8,5); //global variable
//console.log("the average is " + myResult);

function logResult(){

    console.log("the average is " + myResult + " inside the function");
}

logResult();