const retriveUserNameFromLocal = localStorage.getItem("userName");
const hidelinks = document.querySelectorAll(".hide");


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


