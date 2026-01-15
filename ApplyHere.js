
function ValidateVacancyForm() {
    var returnValue;
    var flag1, flag2, flag3, flag4;
    var fNameEl = document.getElementById("fNameError");
    var sNameEl = document.getElementById("sNameError");
    var ukResEl = document.getElementById("ukResidentError");
    var telEl = document.getElementById("telNoError");

 
    if (document.forms["VacancyApplicationForm"]["fname"].value == "") {
        
        fNameEl.innerHTML = "Please Enter your First Name";
        fNameEl.style.color = "red";
        flag1 = false;
    }
    else {
        fNameEl.innerHTML = "";
        fNameEl.style.color = "";
        flag1 = true;
    }

 
    if (document.forms["VacancyApplicationForm"]["sname"].value == "") {
        sNameEl.innerHTML = "Please Enter your Last Name";
        sNameEl.style.color = "red";
        flag2 = false;
    }
    else {
        sNameEl.innerHTML = "";
        sNameEl.style.color = "";
        flag2 = true;
    }

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

    if (document.forms["VacancyApplicationForm"]["telNo"].value == "") {
        telEl.innerHTML = "Please Enter Your Contact Details";
        telEl.style.color = "red";
        flag4 = false;
    }
    else {
        var telNo = document.forms["VacancyApplicationForm"]["telNo"].value;

        if (isNaN(telNo)) {
            telEl.innerHTML = "Please Make Sure Your Contact Details Are A Number";
            telEl.style.color = "red";
            flag4 = false;
        }
        else if (telNo.length < 10 || telNo.length > 12) {
            telEl.innerHTML = "Please Enter A Valid Phone Number";
            telEl.style.color = "red";
            flag4 = false;
        }
        else {
            telEl.innerHTML = "";
            telEl.style.color = "";
            flag4 = true;
        }
    }


    if (flag1 == true && flag2 == true && flag3 == true && flag4 == true) {
        returnValue = true;
     
        window.location.href("ThankYou.html");
    }
    else
    {
     
        returnValue = false;
    }

    return returnValue;
}

