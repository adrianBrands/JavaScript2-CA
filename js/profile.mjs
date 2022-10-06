const displayUsername = document.querySelector(".card-title");
const retriveUserNameFromLocal = localStorage.getItem("userName");
const retriveAvatar = localStorage.getItem("avatar");
const displayAvatar = document.querySelector(".w-100");


const userName = () => {
    if (retriveUserNameFromLocal) {
        displayUsername.innerHTML = `${retriveUserNameFromLocal}`;
        displayAvatar.innerHTML = `<img src="${retriveAvatar}" class="mx-auto d-block bd-placeholder-img rounded-circle img-fluid" width="120" height="120"  alt="...">`;
    } else {
        console.log("")
    }
    

}

userName(); 