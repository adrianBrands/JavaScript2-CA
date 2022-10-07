const logOut = document.querySelector(".logout");

logOut.addEventListener("click", checkLocalStorage)

function checkLocalStorage(event){
    event.preventDefault();
    const getLocal = localStorage.getItem("accsessToken");
    const getUserName = localStorage.getItem("userName");
    
    if (getLocal !== null && getUserName !== null){
        window.localStorage.clear();
        window.open("signin.html", "_self");
    }
   
}
    
 

