//console.log("running");//

let loginForm = document.getElementById("loginForm");

loginForm.addEventListener("submit" , (e) =>{
    e.preventDefault();
    

    let username = document.getElementById("username");
    let email = document.getElementById("email");

    if (username.value == "" || email.value == "") {
        alert('Ensure you input a value in both fields')
    }else{
        alert("This form has been successfully submitted")
        console.log(`This form has a username od ${username.value} and email of ${emial.value}`);

        username.value =""
        email.value = ""
    }
});

