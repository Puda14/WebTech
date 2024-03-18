var user = {};

function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

function isValidPhoneNumber(phoneNumber) {
    const phoneRegex = /^\d{10,11}$/;
    return phoneRegex.test(phoneNumber);
}

function checkFirstName() {
    var firstNameInput = document.getElementById("firstName");
    var errorIcon = document.querySelector(".firstName-error-icon");

    if (!firstNameInput || !errorIcon) {
        return false;
    }

    if (firstNameInput.value === "") {
        firstNameInput.style.borderColor = "red";
        errorIcon.style.visibility = "visible";
        return false;
    } else {
        firstNameInput.style.borderColor = "#cccccc";
        errorIcon.style.visibility = "hidden";
        user.firstName = firstNameInput.value;
        return true;
    }
}

function checkSurname() {
    var surname = document.getElementById("surname");
    var errorIcon = document.querySelector(".surname-error-icon");
    if (!surname || !errorIcon) {
        return false;
    }

    if (surname.value === "") {
        surname.style.borderColor = "red";
        errorIcon.style.visibility = "visible";
        return false;
    } else {
        errorIcon.style.visibility = "hidden";
        surname.style.borderColor = "#cccccc";
        user.surname = surname.value;
        return true;
    }
}

function checkAccount() {
    var account = document.getElementById("account");
    var checkEmail = isValidEmail(account.value);
    var checkPhone = isValidPhoneNumber(account.value);
    var errorIcon = document.querySelector(".account-error-icon");

    if (checkEmail || checkPhone) {
        account.style.borderColor = "#cccccc";
        errorIcon.style.visibility = "hidden";
        var email = document.getElementById("re-email");

        if (checkEmail) {
            email.style.display = "block";

            if (email.value == account.value) {
                email.style.borderColor = "#cccccc";
                document.querySelector(".re-email-error-icon").style.visibility = "hidden";
            } else {
                email.style.borderColor = "red";
                document.querySelector(".re-email-error-icon").style.visibility = "visible";
                return false;
            }
        } else {
            email.style.display = "none";
        }
        return true;
    } else {
        errorIcon.style.visibility = "visible";
        account.style.borderColor = "red";
        document.querySelector(".re-email-error-icon").style.visibility = "hidden";
        document.getElementById("re-email").style.display = "none";
        return false;
    }
}

function checkPassword() {
    var password = document.getElementById("password");
    var errorIcon = document.querySelector(".password-error-icon");
    if (password.value.length < 8) {
        password.style.borderColor = "red";
        errorIcon.style.visibility = "visible";
        return false;
    }
    else {
        password.style.borderColor = "#cccccc";
        errorIcon.style.visibility = "hidden";
        return true;
    }
}

function checkAge() {
    var date = document.getElementById("day");
    var month = document.getElementById("month");
    var year = document.getElementById("year");
    var errorIcon = document.querySelector(".birthday-inputs-error-icon");

    var d = date.value;
    var m = month.value;
    var y = year.value;

    var today = new Date();
    var birthDate = new Date(y, m - 1, d);
    var age = today.getFullYear() - birthDate.getFullYear();
    var tmp = today.getMonth() - birthDate.getMonth();
    if (tmp < 0 || (tmp === 0 && today.getDate() < birthDate.getDate())) {
        age--;
    }
    if (age < 18) {
        date.style.borderColor = "red";
        month.style.borderColor = "red";
        year.style.borderColor = "red";
        errorIcon.style.visibility = "visible";
        return false;
    }
    else {
        date.style.borderColor = "#cccccc";
        month.style.borderColor = "#cccccc";
        year.style.borderColor = "#cccccc";
        errorIcon.style.visibility = "hidden";
        return true;
    }
}

function checkPronoun() {
    var selectedPronoun = document.getElementById("pronoun");
    if (selectedPronoun.value == 0) {
        selectedPronoun.style.borderColor = "red";
        document.querySelector(".pronoun-error-icon").style.visibility = "visible";
        return false;
    }
    else {
        selectedPronoun.style.borderColor = "#cccccc";
        document.querySelector(".pronoun-error-icon").style.visibility = "hidden";
        return true;
    }
}

function checkGender() {
    var selectedGender = document.querySelector('input[name="gender"]:checked');
    var female = document.getElementById("span-female");
    var male = document.getElementById("span-male");
    var custom = document.getElementById("span-custom");
    var errorIcon = document.querySelector(".gender-inputs-error-icon");

    if (selectedGender) {
        female.style.borderColor = "#cccccc";
        male.style.borderColor = "#cccccc";
        custom.style.borderColor = "#cccccc";
        errorIcon.style.visibility = "hidden";

        if (selectedGender.value == 3) {
            var pronounContainer = document.getElementById("pronoun-container");
            pronounContainer.style.visibility = "visible";
            pronounContainer.style.height = "120px";
            return checkPronoun();
        } else {
            var pronounContainer = document.getElementById("pronoun-container");
            pronounContainer.style.visibility = "hidden";
            pronounContainer.style.height = "0";
            document.querySelector(".pronoun-error-icon i").style.visibility = "hidden";
        }
        return true;
    } else {
        errorIcon.style.visibility = "visible";
        female.style.borderColor = "red";
        male.style.borderColor = "red";
        custom.style.borderColor = "red";
        return false;
    }
}



function validateForm() {

    var isValid = false;

    case1 = checkFirstName();
    case2 = checkSurname();
    case3 = checkAccount();
    case4 = checkPassword();
    case5 = checkAge();
    case6 = checkGender();
    // console.log(case1);
    // console.log(case2);
    // console.log(case3);
    // console.log(case4);
    // console.log(case5);
    // console.log(case6);
    if (case1 && case2 && case3 && case4 && case5 && case6)
        isValid = true;
    if (isValid) {
        document.write("Hello " + user.firstName + " " + user.surname);
        console.log(user);
    }
    // console.log("isvalid = " + isValid);
    return isValid;
}

function birthdayHelp() {
    var birthday = document.getElementById("more-infor-birthday");
    var isBlockDisplayed = true;
    birthday.style.display = "block";

    function clickHandler(event) {
        // console.log("Click event fired");
        if (!birthday.contains(event.target)) {
            birthday.style.display = "none";
            window.removeEventListener("click", clickHandler);
        }
    }

    function firstClickHandler(event) {
        window.removeEventListener("click", firstClickHandler);
        // console.log("First click event ignored");
        window.addEventListener("click", clickHandler);
        isBlockDisplayed = true;
    }

    window.addEventListener("click", firstClickHandler);
}



function genderHelp() {
    var gender = document.getElementById("more-infor-gender");
    var isBlockDisplayed = true;
    gender.style.display = "block";

    function clickHandler(event) {
        // console.log("Click event fired");
        if (!gender.contains(event.target)) {
            gender.style.display = "none";
            window.removeEventListener("click", clickHandler);
        }
    }

    function firstClickHandler(event) {
        window.removeEventListener("click", firstClickHandler);
        // console.log("First click event ignored");
        window.addEventListener("click", clickHandler);
        isBlockDisplayed = true;
    }

    window.addEventListener("click", firstClickHandler);
}

function nameErrorMess() {

    var mess = document.getElementById("mess-name-error");
    var isBlockDisplayed = true;
    mess.style.display = "block";

    function clickHandler(event) {
        // console.log("Click event fired");
        if (!mess.contains(event.target)) {
            mess.style.display = "none";
            window.removeEventListener("click", clickHandler);
        }
    }

    function firstClickHandler(event) {
        window.removeEventListener("click", firstClickHandler);
        // console.log("First click event ignored");
        window.addEventListener("click", clickHandler);
        isBlockDisplayed = true;
    }

    window.addEventListener("click", firstClickHandler);
}

function accountErrorMess() {

    var account = document.getElementById("mess-account-error");
    var isBlockDisplayed = true;
    account.style.display = "block";

    function clickHandler(event) {
        // console.log("Click event fired");
        if (!account.contains(event.target)) {
            account.style.display = "none";
            window.removeEventListener("click", clickHandler);
        }
    }

    function firstClickHandler(event) {
        window.removeEventListener("click", firstClickHandler);
        // console.log("First click event ignored");
        window.addEventListener("click", clickHandler);
        isBlockDisplayed = true;
    }

    window.addEventListener("click", firstClickHandler);
}

function passwordErrorMess() {
    var password = document.getElementById("mess-password-error");
    var isBlockDisplayed = true;
    password.style.display = "block";

    function clickHandler(event) {
        // console.log("Click event fired");
        if (!password.contains(event.target)) {
            password.style.display = "none";
            window.removeEventListener("click", clickHandler);
        }
    }

    function firstClickHandler(event) {
        window.removeEventListener("click", firstClickHandler);
        // console.log("First click event ignored");
        window.addEventListener("click", clickHandler);
        isBlockDisplayed = true;
    }

    window.addEventListener("click", firstClickHandler);
}

function ageErrorMess() {
    var age = document.getElementById("mess-age-error");
    var isBlockDisplayed = true;
    age.style.display = "block";
    function clickHandler(event) {
        // console.log("Click event fired");
        if (!age.contains(event.target)) {
            age.style.display = "none";
            window.removeEventListener("click", clickHandler);
        }
    }

    function firstClickHandler(event) {
        window.removeEventListener("click", firstClickHandler);
        // console.log("First click event ignored");
        window.addEventListener("click", clickHandler);
        isBlockDisplayed = true;
    }

    window.addEventListener("click", firstClickHandler);
}

function genderErrorMess() {
    var gender = document.getElementById("mess-gender-error");
    var isBlockDisplayed = true;
    gender.style.display = "block";
    function clickHandler(event) {
        // console.log("Click event fired");
        if (!gender.contains(event.target)) {
            gender.style.display = "none";
            window.removeEventListener("click", clickHandler);
        }
    }

    function firstClickHandler(event) {
        window.removeEventListener("click", firstClickHandler);
        // console.log("First click event ignored");
        window.addEventListener("click", clickHandler);
        isBlockDisplayed = true;
    }

    window.addEventListener("click", firstClickHandler);
}

function pronounErrorMess() {
    var pronoun = document.getElementById("mess-pronoun-error");
    var isBlockDisplayed = true;
    pronoun.style.display = "block";
    function clickHandler(event) {
        // console.log("Click event fired");
        if (!pronoun.contains(event.target)) {
            pronoun.style.display = "none";
            window.removeEventListener("click", clickHandler);
        }
    }

    function firstClickHandler(event) {
        window.removeEventListener("click", firstClickHandler);
        // console.log("First click event ignored");
        window.addEventListener("click", clickHandler);
        isBlockDisplayed = true;
    }

    window.addEventListener("click", firstClickHandler);
}

function reEmailErrorMess() {
    var reEmail = document.getElementById("mess-re-email-error");
    var isBlockDisplayed = true;
    reEmail.style.display = "block";
    function clickHandler(event) {
        // console.log("Click event fired");
        if (!reEmail.contains(event.target)) {
            reEmail.style.display = "none";
            window.removeEventListener("click", clickHandler);
        }
    }

    function firstClickHandler(event) {
        window.removeEventListener("click", firstClickHandler);
        // console.log("First click event ignored");
        window.addEventListener("click", clickHandler);
        isBlockDisplayed = true;
    }

    window.addEventListener("click", firstClickHandler);
}