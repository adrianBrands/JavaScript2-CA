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
  displayAvatarInput,
  avatarButton,
} from "./register_signin_export.mjs";

/**
 * this function only runs when a click is detected at submit.addEventListener("click", valueInput);
 * 
 * @param {Event} event from the addeventListener
 */
function valueInput(event) {
  event.preventDefault();

  const userInputRegister = {
    name: username.value,
    email: email.value,
    password: password.value,
    avatar: avatar.value,
  };

  if (userInputRegister.avatar === "") {
    delete userInputRegister.avatar;
  }

  validateEmail();

  /**
   * takes the url and fetch the userdata to run an API request
   * registrates a user by the imported registerUrl and the input values from-
   * the object userInputRegister.
   * checks if all the requirments are met, if not an error message will be displayed
   * @param {string} url {API url}
   * @param {object} userData {method, headers, body}
   * @example
   * registerUser(registerUrl, userInputRegister);
   */
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
        displayErrorMessage.innerHTML = `email has to contain @noroff.no or @stud.noroff.no`;
      } else if (json.message === "Profile already exists") {
        displayErrorMessage.innerHTML = json.message;
        displayErrorMessage.style.color = "red";
      } else if (json.name === username.value) {
        removeForm.forEach((e) => {
          e.style.display = "none";
        });
        submit.style.display = "none";
        avatarButton.style.display = "none";
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

displayAvatarInput();
