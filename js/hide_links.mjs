const retriveUserNameFromLocal = localStorage.getItem("userName");
const hidelinks = document.querySelectorAll(".hide");

/**
 * cheks if the user is logged in. If not, the navigation links for the web site is hidden.
 * @returns {false} if the user is already logged in
 */
const userProfile = () => {
  if (!retriveUserNameFromLocal) {
    hidelinks.forEach((e) => {
      e.style.display = "none";
      
    });
  } else {
    return false;
  }
};

userProfile();


