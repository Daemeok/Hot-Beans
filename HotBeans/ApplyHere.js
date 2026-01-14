//function used on the button "Apply Now" click event of the form
//runs a validation check against all relevant fields

function ValidateVacancyForm() {
    var returnValue;
    var flag1, flag2, flag3, flag4;
    var fNameEl = document.getElementById("fNameError");
    var sNameEl = document.getElementById("sNameError");
    var ukResEl = document.getElementById("ukResidentError");
    var telEl = document.getElementById("telNoError");

    //check the first name
    //if it's empty
    if (document.forms["VacancyApplicationForm"]["fname"].value == "") {
        //set the error text
        fNameEl.innerHTML = "Please Enter your First Name";
        fNameEl.style.color = "red";
        flag1 = false;
    }
    else {//clear the error text
        fNameEl.innerHTML = "";
        fNameEl.style.color = "";
        flag1 = true;//this is OK
    }

    //check the last name if its empty
    if (document.forms["VacancyApplicationForm"]["sname"].value == "") {
        sNameEl.innerHTML = "Please Enter your Last Name";
        sNameEl.style.color = "red";
        flag2 = false;
    }
    else {//clear the error
        sNameEl.innerHTML = "";
        sNameEl.style.color = "";
        flag2 = true;
    }

    //make sure that at least one of the radio buttons are checked
    if (document.getElementById("ukResidentYes").checked == false && document.getElementById("ukResidentNo").checked == false) {
        ukResEl.innerHTML = "Please say if you are a UK Resident";
        ukResEl.style.color = "red";
        flag3 = false;
    }
    else {
        ukResEl.innerHTML = "";
        ukResEl.style.color = "";
        flag3 = true;
    }

    //first check the phone number has been entered
    if (document.forms["VacancyApplicationForm"]["telNo"].value == "") {
        telEl.innerHTML = "Please Enter Your Contact Details";
        telEl.style.color = "red";
        flag4 = false;
    }
    else {//something has been entered so now we check this
        var telNo = document.forms["VacancyApplicationForm"]["telNo"].value;

        if (isNaN(telNo)) {//if its not a number..
            telEl.innerHTML = "Please Make Sure Your Contact Details Are A Number";
            telEl.style.color = "red";
            flag4 = false;
        }
        else if (telNo.length < 10 || telNo.length > 12) {//check the length. Must be 11 numbers to be a mobile
            telEl.innerHTML = "Please Enter A Valid Phone Number";
            telEl.style.color = "red";
            flag4 = false;
        }
        else {//the number is good, clear the error field
            telEl.innerHTML = "";
            telEl.style.color = "";
            flag4 = true;
        }
    }


    //if all these have passed
    if (flag1 == true && flag2 == true && flag3 == true && flag4 == true) {
        returnValue = true;
        //send the user to the thank you page
        window.location.href("ThankYou.html");
    }
    else
    {
        //this is false so keep the user at this page.
        returnValue = false;
    }

    return returnValue;
}
