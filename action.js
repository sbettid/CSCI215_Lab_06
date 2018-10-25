/*
    Student: Davide Sbetti
    Lab 06
 */

//Fields to check
var nameField = document.getElementById("name");
var ageField = document.getElementById("age");
var emailField = document.getElementById("email");
var subscribeButton = document.getElementById("subscribe");

//Fields only for clearing
var commentsField = document.getElementById("comments");
var referField = document.getElementById("refer");
var skillsField = document.getElementsByName("skill"); //Array of radio button elements

function checkEmail(email) {
    var regExp = new RegExp('[a-z0-9!#$%&\'*+/=?^_`{|}~-]+(?:\\.[a-z0-9!#$%&\'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?');
    return regExp.test(email);

}




function checkAge() {

    var regEx = new RegExp('^(([0-9][1-9])|([1-9][0-9])|[1-9])$');
    
    if(!regEx.test(ageField.value)) {
        ageField.style.backgroundColor = "red";
    } else {
        ageField.style.backgroundColor = "";
    }
}

ageField.addEventListener("keyup", checkAge);

function checkName(){
    var regEx = /</g;

    if(regEx.test(nameField.value)){
        nameField.style.backgroundColor = "red";
    } else {
        nameField.style.backgroundColor = "";
    }
}

nameField.addEventListener("keyup", checkName);

function validate(){

    if(checkEmail(emailField.value)){
        myAjaxFunction();
    } else{
        alert("User subscription could not be processed. Please check the inserted information");
    }
}

subscribeButton.addEventListener("click", validate);

function myAjaxFunction(){
    //Confirmation alert
    alert("AJAX has been made!");

    //Clearing fields
    nameField.value = "";
    emailField.value = "";
    ageField.value = "";
    commentsField.value = "";

    //Clear dropdown selected the default option
    referField.selectedIndex = 0;

    //Clear radio button unselecting all of them
    for(var i in skillsField){
        skillsField[i].checked = "false";
    }
}