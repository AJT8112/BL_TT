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

    //VALIDATE email contains an @ symbol.
    //if TRUE execute showing details in  thankyou for your submission.
    if(email.includes('@')){
        //Set thankyou message for if there is an @ in the email address.
        alert("Thank you very much " + firstN + " " + secondN + " " + relation + " of " + fatherN + ", your participation in this tech test is greatly appreciated. I hope you have enjoyed the result and I would appreciate any feedback you have to offer =)");
    }
    //ELSE if FALSE then return an error sign to fill in valid email.
    else {
        alert("Please Enter a Valid Email Address");
    };

    /*
    console.log(firstN);
    console.log(secondN);
    console.log(fatherN);
    console.log(relation);
    console.log(email);
    */

    //Update the inner HTML of the document to bring up the thankyou message and include names.

    

};



