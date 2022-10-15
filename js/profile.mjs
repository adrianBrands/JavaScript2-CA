const displayUsername = document.querySelector(".card-title");
const retriveUserNameFromLocal = localStorage.getItem("userName");
const retriveAvatar = localStorage.getItem("avatar");
const displayAvatar = document.querySelector(".w-100");



/**
 * this function displays the avatar image and the username on the profile page, if there is no avatar image provided
 * a defult image will be displayed
 * @returns 
 */
const userProfile = () => {
    if (retriveUserNameFromLocal && retriveAvatar) {
        displayUsername.innerHTML = `${retriveUserNameFromLocal}`;
        displayAvatar.innerHTML = `<img src="${retriveAvatar}" class="mx-auto d-block bd-placeholder-img rounded-circle img-fluid" width="120" height="120"  alt="avatar logo">`;
        
    }  else if (!retriveAvatar) {
        displayUsername.innerHTML = `${retriveUserNameFromLocal}`;
        
        //Default avatar image if none is provided
        displayAvatar.innerHTML = `<img src="/images/man-g39c34cdac_640.jpg" class="mx-auto d-block bd-placeholder-img rounded-circle img-fluid" width="120" height="120"  alt="default avatar image of a painted man">`;
        
        
        
    } else {
        return false
    }
    

}

userProfile(); 