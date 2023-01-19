const logOut = document.querySelector(".logout");

/**
 * this function logs out the user and removes all the saved items in local storage,
 * and redirects the user to the sign in page
 * @param {Event} event from the addevEntListener
 *
 */
function checkLocalStorage(event) {
  event.preventDefault();
  const getLocal = localStorage.getItem("accsessToken");
  const getUserName = localStorage.getItem("userName");

  if (getLocal !== null && getUserName !== null) {
    window.localStorage.clear();
    window.open("signin.html", "_self");
  }
}

logOut.addEventListener("click", checkLocalStorage);
