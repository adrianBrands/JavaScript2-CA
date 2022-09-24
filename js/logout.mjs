const logOut = document.querySelector(".logout");

logOut.addEventListener("click", checkLocalStorage)

function checkLocalStorage(event){
    event.preventDefault();
    const getLocal = localStorage.getItem("accsessToken");
    console.log(getLocal);
    if (getLocal !== null){
        window.localStorage.clear();
        window.open("signin.html", "_self");
    }
   
}
    
 

