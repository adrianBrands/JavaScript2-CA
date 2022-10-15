const retriveUserNameFromLocal = localStorage.getItem("userName");

const userProfile = () => {
  if (!retriveUserNameFromLocal) {
    location.href = `/signin.html`;
  } else {
    return false;
  }
};

userProfile();
