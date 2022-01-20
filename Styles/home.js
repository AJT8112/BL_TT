/* For this tech test I would love the opportunity to discuss how to pull information 
from my HTML input text boxes into my JavaScript, without that information then being tied to 
a specific function due to local scope restrictions! Any pointers are welcome. =) */

//Pull values from HTML input text boxes
function formData() {
    let firstN = document.getElementById("firstName").value;
    let secondN = document.getElementById("secondName").value;
    let fatherN = document.getElementById("fathersName").value;
    let relation = document.getElementById("relation").value;
    let email = document.getElementById("emailAdd").value;


    //VALIDATE email contains an @ and that it is in the middle of the email address.
    //check that IF email begins with @, it is invalid.
    if(email.startsWith("@")){
        alert("Please Enter a Valid Email Address")
    } 
    //IF it doesn't, check that IF email ends with @, it is invalid.
    else if(email.endsWith("@")){
        alert("Please Enter a Valid Email Address")
    }
    //IF email doesn't then check the email contains an @, if it does it is valid, return an alert to input all data entered.
    else if(email.indexOf('@') > -1){
        alert("Thank you very much " + firstN + " " + secondN + " " + relation + " of " + fatherN + ", your participation in this tech test is greatly appreciated. I hope you have enjoyed the result and I would appreciate any feedback you have to offer. =)")
    }
    //IF the email doesn't contain an @, then it is invalid.
    else {
        alert("Please Enter a Valid Email Address")
    };

    /*
    console.log(firstN);
    console.log(secondN);
    console.log(fatherN);
    console.log(relation);
    console.log(email);
    */

};

    




