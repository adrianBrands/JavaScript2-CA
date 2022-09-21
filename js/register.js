//register user
  
const baseUrl_API = "https://nf-api.onrender.com";
const registerUrl = `${baseUrl_API}/api/v1/social/auth/register`;


const username = document.querySelector("#username");
const email = document.querySelector("#floatingInput");
const password = document.querySelector("#floatingPassword");
const displayErrorMessage = document.querySelector(".h1");
const removeForm = document.querySelectorAll(".form-floating");
const displaySignInButton = document.querySelector(".send_to_signin")

const submit = document.querySelector("#submit");
submit.addEventListener("click", valueInput);




function valueInput(event){
  const userInput = {
      name: username.value,
      email: email.value,
      password: password.value,
  };

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
          if(json.message === "Profile already exists"){
            displayErrorMessage.innerHTML = json.message;
            displayErrorMessage.style.color = "red";
            
        } if (json.name === username.value){
            
            console.log("statsu 11111223");
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
  
  registerUser(registerUrl, userInput)
   event.preventDefault();
   
}

//adrian_b
//AdrBra10066@stud.noroff.no
//ReinungaMaxHufsi1894

//testAbra
//testAbra12@noroff.no
//12345678






