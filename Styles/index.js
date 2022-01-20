//Set values of person OBJECT

let valN = ""
let valS = ""
let valF = ""
let valR = ""
let valE = ""

//create OBJECT to hold person data

let person = {
    firstName: valN,
    surname: valS,
    fatherName: valF,
    relation: valR,
    emailAdd: valE
};

//change VALUE of inputs to equal the text displayed in the text fields.

function getNval(){
    var valN = document.getElementById("N").value;
    console.log(valN);
}
function getSval(){
    var valS = document.getElementById("S").value;
    console.log(valS);
}
function getFval(){
    var valF = document.getElementById("F").value;
    console.log(valF);
}
function getRval(){
    var valR = document.getElementById("R").value;
    console.log(valR);
}
function getEval(){s
    var valE = document.getElementById("E").value;
    console.log(valE);
}


//create person OBJECT to hold data

//Validate that the input is an email address by having @ in the middle.

//IF yes, produce message by pulling the information from the rest of the form.

//IF No, return message, email address not valid.

//Execute function when button is clicked.