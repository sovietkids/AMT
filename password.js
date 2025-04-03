let passwordunlocked = localStorage.getItem("passwordunlocked")

if (passwordunlocked = "true"){
    location.href="main.html"
} else {
    passwordunlocked = false
}

function passwordconfirmation() {

    let = inputpassword = passwordconfirmation.value
    
    console.log(inputpassword)

    if (inputpassword = "manmaru3219"){
        console.log("true")
        localStorage.setItem("passwordunlocked", "true");
        location.href="main.html"
    }
}