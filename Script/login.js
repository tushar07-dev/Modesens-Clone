var count = 0;
// document.querySelector("form").addEventListener("submit", login)
var users = JSON.parse(localStorage.getItem("userDataBase"))
// function login(event)
// {
    
//     var flag = false;
//     event.preventDefault();
//      let email = document.querySelector("#email").value;
//     let password = document.querySelector("#password").value;
//     console.log(email,password)
//     for (var i = 0; i < users.length; i++)
//     {
//         if (users[i].emailId == email && users[i].pass == password)
//         {
//             flag = true;
//             var lgUser = users[i].emailId;
//             localStorage.setItem("loggedUser", JSON.stringify(lgUser));
//         }
//     }
//     if (flag == true)
//     {   alert("Login Sucessful")
//         window.location.href = "home.html";
//     } else {
//         if (count == 0) {
//             count++;       
//             var msg = document.createElement("p");
//             msg.textContent = "Invalid Credentials"
//             document.querySelector(".msg").append(msg);
//         }
//     }
// }
var userStack = JSON.parse(localStorage.getItem("sign_User")) || [];

function sign(event){
    event.preventDefault()
    let email = document.getElementById("sign_email").value;
    let passward1 = document.getElementById("sign_pass1").value;
    let passward2 = document.getElementById("sign_pass2").value;
    
    console.log(email,passward1,passward2);

    if(email !== null || passward1 === null || passward2 == null){
        if(passward1 === passward2){
            
            var userData = {
                emailId: email,
                pass: passward1,
            };
    
            console.log(JSON.parse(localStorage.getItem("sign_User")))
            userStack.push(userData);
            localStorage.setItem("sign_User", JSON.stringify(userStack));
            alert("Sign Up Succesfull");
            window.location.href = "login.html";
        
        }
        else{
            alert("Passwards is Not matching eachother")
        }
    }
}


function log(event){
    event.preventDefault()
    userStack = JSON.parse(localStorage.getItem("sign_User")) 
   
    let email = document.getElementById("log_email").value;
    let pass = document.getElementById("log_password").value;

    console.log(email,pass);
    flag = false;
    for (var i = 0; i < userStack.length; i++)
        {
            console.log(userStack[i].emailId ,userStack[i].pass);
            if(userStack[i].emailId == email && userStack[i].pass == pass){
                flag = true;
                break;
            }
        }
        if(flag == false){
            alert("Wrong Id || Passward")
        }
        else{
            alert("Log in Sucessfull");
            window.location.href = "home.html";
            flag = false;
        }
    
}
