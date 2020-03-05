 var myString = 'I\'m a "fun" ninja String';

 console.log(myString.length);
 console.log(myString.toUpperCase());
 console.log(myString.toLowerCase());
 console.log(myString.indexOf("fun"));
 console.log(myString.indexOf("ninja"));
    if (myString.indexOf("ninja") === -1){
        console.log("the word ninja is not in the string");
    }else{
        console.log("The word ninja starts at position " + myString.indexOf("ninja"))
    }
 var string1 = "abc";
 var string2 = "bcd";
 console.log(string1 === string2);

 console.log(string1 < string2);

 