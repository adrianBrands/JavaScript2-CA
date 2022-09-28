
 const authorization = localStorage.getItem("accsessToken"); 
 const baseUrl_API = "https://nf-api.onrender.com"; 
 const registerUrl = `${baseUrl_API}/api/v1/social/auth/register`;
 const signinrUrl = `${baseUrl_API}/api/v1/social/auth/login`;
 const posts = `${baseUrl_API}/api/v1/social/posts/?_author=true`;

export {signinrUrl, registerUrl, posts, authorization};

export function testSomething (json) {
    const displaySomething = document.querySelector(".col-sm-7");
    for (let i = 0; i < json.length; i++){
        if (json[i].media ===  ""){
            continue
        }
        displaySomething.innerHTML += `<div class="card mb-3">
            <img src="${json[i].media}" class="card-img-top" alt="black and white picture of a huge cliff by the ocean">
            <div class="card-body">
                <h5 class="card-title">${json[i].author.name}</h5>
                <p class="card-text"><small class="text-muted">Published ${json[i].updated}</small></p>
            </div>
        </div>`;
        

    }
    

}