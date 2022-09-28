const displayUsername = document.querySelector(".card-title");
const retriveUserNameFromLocal = localStorage.getItem("userName");


const userName = () => {
    if (retriveUserNameFromLocal) {
        displayUsername.innerHTML = `${retriveUserNameFromLocal}`;
    } else {
        console.log("hgekki")
    }
    

}

userName(); 