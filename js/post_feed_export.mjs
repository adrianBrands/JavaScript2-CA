export const displayPostsProfile = (json) => {
    
    for (let i = 0; i < json.length; i++){
        const postContent = {
            username: json[i].author.name,
            image: json[i].media,
            created: json[i].created,
            body: json[i].body,
        };
        
        const {username, image, created, body} = postContent;
        
        
        if (image === ""){
            continue
        }

        const createHtmlPosts = document.querySelector(".col-sm-7");
        createHtmlPosts.innerHTML += 
        `<div class="card mb-3">
            <img src="${image}" class="card-img-top" alt="image uploaded by ${username} ">
            <div class="card-body">
                <h5 class="card-title">${username}</h5>
                <p class="card-text">${body}</small></p>
                <p class="card-text"><small class="text-muted">Published ${created}</small></p>
            </div>
        </div>`;

    }
}





export const displayPostsHome = (json) => {
    const createHtmlPosts = document.querySelector(".home-posts");
    for (let i = 0; i < json.length; i++){
        if (json[i].media ===  ""){
            continue
        }
        createHtmlPosts.innerHTML += `<div class="card mb-3 w-75">
        <img src="${json[i].media}" class="card-img-top" alt="image uploaded by ${json[i].author.name}">
        <div class="card-body">
            <h5 class="card-title">${json[i].author.name}</h5>
            <p class="card-text">${json[i].body}</small></p>
            <p class="card-text"><small class="text-muted">Published ${json[i].updated} </small></p>
        </div>
    </div>`;
        

    }
}