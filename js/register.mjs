//register user
  import { registerUrl} from "./API_URLs_export.mjs"; 
  import { validateEmail, username, email, password, displayErrorMessage, removeForm, displaySignInButton,
    submit} from "./register_signin_export.mjs";


function valueInput(event){
    event.preventDefault();
    
    const userInputRegister = {
        name: username.value,
        email: email.value,
        password: password.value,
    };

    validateEmail();

    async function registerUser(url, userData){
        //console.log(url, userData);
        try{
            const postData = {
                method: "POST",
                headers: {
                    "content-type": "application/json; charset=UTF-8",
                },
                body: JSON.stringify(userData),
            };
            const response = await fetch(url, postData);
            //console.log(response);
            const json = await response.json();
            console.log(json);

            if(!validateEmail(email.value)){
                console.log("wrong email");

            }
            
            if(json.message === "Profile already exists"){
              displayErrorMessage.innerHTML = json.message;
              displayErrorMessage.style.color = "red";
              
          } if (json.name === username.value){
              
              console.log("success");
              removeForm.forEach((e) => {
                  e.style.display = "none";
              });
              submit.style.display = "none";
              displayErrorMessage.innerHTML = `Success, you can go and sign in with your new account`;
              displaySignInButton.style.display = "block";
          }
            
    
        } catch (error) {
           console.log(error);
        }
    }
 
  
  registerUser(registerUrl, userInputRegister) 
}

submit.addEventListener("click", valueInput);
//adrian_b
//AdrBra10066@stud.noroff.no
//ReinungaMaxHufsi1894

//testAbra
//testAbra12@noroff.no
//12345678






