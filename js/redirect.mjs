const retriveUserNameFromLocal = localStorage.getItem("userName");

/**
 * checks if the user is logged in by retriving value from local storage. If user is not-
 * logged in, the user will be sent to /signin.html
 * @returns {false} if the user is logged in
 */
const userProfile = () => {
  if (!retriveUserNameFromLocal) {
    location.href = `/signin.html`;
  } else {
    return false;
  }
};

userProfile();
