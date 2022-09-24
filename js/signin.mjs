
import { signinrUrl } from "./API_URLs.mjs";

const email = document.querySelector("#floatingInput");
const password = document.querySelector("#floatingPassword");
const displayMessage = document.querySelector(".h1");
const removeForm = document.querySelectorAll(".form-floating");
const submit = document.querySelector("#submit");


const getLocal = localStorage.getItem("accsessToken");
if (getLocal !== null){
    removeForm.forEach((e) => {
        e.style.display = "none";
    });
    displayMessage.innerHTML = `You are logged in`;
    submit.style.display = "none";
}


submit.addEventListener("click", valueInput);

function valueInput(event){
    const userInput = {
        email: email.value,
        password: password.value,
    };

    async function registerUser(url, userData){
        console.log(url, userData);
        try{
            const postData = {
                method: "POST",
                headers: {
                    "content-type": "application/json; charset=UTF-8",
                },
                body: JSON.stringify(userData),
            };
            const response = await fetch(url, postData);
            console.log(response);
            const json = await response.json();
            console.log(json);
            const accessToken = json.accessToken;
            
            if(json.email === email.value){
                localStorage.setItem("accsessToken", accessToken);
                window.open("profile.html", "_self");
            } else {
                displayMessage.innerHTML = `wrong email or password, try again`;
            }
            
    
        } catch (error) {
           console.log(error);
        }
    }
 
  event.preventDefault();
  registerUser(signinrUrl, userInput) 
}    
    
    






 