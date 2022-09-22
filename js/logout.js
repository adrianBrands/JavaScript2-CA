const logOut = document.querySelector(".logout");

logOut.addEventListener("click", checkLocalStorage)





function checkLocalStorage(event){
    const getLocal = localStorage.getItem("accsessToken");
    if (localStorage = getLocal){
        window.localStorage.clear();
        window.open("signin.html", "_self");
    }
    event.preventDefault();
    
}

