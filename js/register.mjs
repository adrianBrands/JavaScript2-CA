//register user
import { registerUrl } from "./API_URLs_export.mjs";
import {
  validateEmail,
  username,
  email,
  password,
  displayErrorMessage,
  removeForm,
  displaySignInButton,
  submit,
  avatar,
} from "./register_signin_export.mjs";

function valueInput(event) {
  event.preventDefault();

  const userInputRegister = {
    name: username.value,
    email: email.value,
    password: password.value,
    avatar: avatar.value,
  };

  validateEmail();

  async function registerUser(url, userData) {
    try {
      const postData = {
        method: "POST",
        headers: {
          "content-type": "application/json; charset=UTF-8",
        },
        body: JSON.stringify(userData),
      };
      const response = await fetch(url, postData);

      const json = await response.json();
      console.log(json);

      if (!validateEmail(email.value)) {
        console.log("wrong email");
        displayErrorMessage.innerHTML = `email has to contain @noroff.no or @stud.noroff.no`;
      } else if (json.message === "Profile already exists") {
        displayErrorMessage.innerHTML = json.message;
        displayErrorMessage.style.color = "red";
      } else if (json.name === username.value) {
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

  registerUser(registerUrl, userInputRegister);
}

submit.addEventListener("click", valueInput);
