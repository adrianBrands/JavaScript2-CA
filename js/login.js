//login user API 
/*fetch('https://nf-api.onrender.com/api/v1/social/auth/login', {
    method:'POST',
    body: JSON.stringify({
       "email": "AdrBra10066@stud.noroff.no",
       "password": "ReinungaMaxHufsi1894"
    }),
    headers: {
        'Content-type': 'application/json; charset=UTf-8',
    },
})
    .then((response) => response.json())
    .then((json) => console.log(json));*/
    
    
    const accsessToken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTcwLCJuYW1lIjoiYWRyaWFuX2IiLCJlbWFpbCI6IkFkckJyYTEwMDY2QHN0dWQubm9yb2ZmLm5vIiwiYXZhdGFyIjpudWxsLCJiYW5uZXIiOm51bGwsImlhdCI6MTY2MzU5NjM2MX0.mTrix3JDspZF6hoPFfMUZHLZN4oZSwRAiInJplQngK8";

    /*fetch('https://nf-api.onrender.com/api/v1/social/posts', {
        method: 'POST', 
        body: JSON.stringify({
            title: "Test1",
            body: "testest" 
        }), 
        headers: {
            'content-type': 'application/json; charset=UTF-8',
            'Authorization': `Bearer ${accsessToken}`
        },
    })

    .then((response) => response.json())
    .then((json) => console.log(json));*/



    /*fetch('https://nf-api.onrender.com/api/v1/social/profiles', {
        headers: {
            'content-type': 'application/json; charset=UTF-8',
            'Authorization': `Bearer ${accsessToken}`
        },

    })
  .then((response) => response.json())
  .then((json) => console.log(json));*/

  //id159

  
//register user
  
const baseUrl_API = "https://nf-api.onrender.com";
const registerUrl = `${baseUrl_API}/api/v1/social/auth/register`;


const username = document.querySelector("#username")
const email = document.querySelector("#floatingInput")
const password = document.querySelector("#floatingPassword")
const displayErrorMessage = document.querySelector(".h1");


const submit = document.querySelector("#submit");
submit.addEventListener("click", valueInput);




function valueInput(event){
  const userInput = {
      name: username.value,
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
  
      } catch (error) {
          
      }
  }
  
  registerUser(registerUrl, userInput)
   event.preventDefault();
   
}






