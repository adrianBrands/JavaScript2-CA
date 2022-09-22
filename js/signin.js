//Signin
const baseUrl_API = "https://nf-api.onrender.com";
const registerUrl = `${baseUrl_API}/api/v1/social/auth/login`;


const username = document.querySelector("#username");
const email = document.querySelector("#floatingInput");
const password = document.querySelector("#floatingPassword");

const removeForm = document.querySelectorAll(".form-floating");


const submit = document.querySelector("#submit");
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
            localStorage.setItem("accsessToken", accessToken);
            if(json.email === email.value){
                //window.open("profile.html", "_self");
                
              
              
            }
            
    
        } catch (error) {
           console.log(error);
        }
    }
 
  event.preventDefault();
  registerUser(registerUrl, userInput) 
}    
    
    

/*function rederect () {
    location.href("profile.html");
}    
 

rederect();*/




 