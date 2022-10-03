

export const displayPostsProfile = (json) => {
    for (let i = 0; i < json.length; i++){
        
        const postContent = {
            username: json[i].author.name,
            image: json[i].media,
            created: json[i].created,
            body: json[i].body,
            id: json[i].id,
        };
        
        const {username, image, created, body, id} = postContent;
        
        if (image === ""){
            continue
        }

        const createHtmlPosts = document.querySelector(".col-sm-7");
        createHtmlPosts.innerHTML += 
        `<div class="card mb-3">
            <a href="post.html?id=${id}"><img src="${image}" class="card-img-top" alt="image uploaded by ${username} ">
            <div class="card-body">
                <h5 class="card-title">${username}</h5>
                <p class="card-text">${body}</small></p>
                <p class="card-text"><small class="text-muted">Published ${created}</small></p>
            </div></a>
        </div>`;

    }
}








export const displayPostsHome = (json) => {

    //
    const search = document.querySelector(".form-control");
    search.addEventListener("input", e => {
        const value = e.target.value.toLowerCase();
        getPostsData.forEach(post => {
            const isDisplayed = post.author.name.includes(value)
            user.element.classList.toggle("hide", !isDisplayed)

        });

    });


    //

    let getPostsData = [];
     getPostsData = json.map(post => {
        const createHtmlPosts = document.querySelector(".home-posts");
        createHtmlPosts.innerHTML += `
        <div class="card mb-3 w-75">
        <a href="post.html?id=${post.id}"><img src="${post.media}" class="card-img-top" alt="image uploaded by ${post.author.name}">
        <div class="card-body">
            <h5 class="card-title">${post.author.name}</h5>
            <p class="card-text">${post.body}</small></p>
            <p class="card-text"><small class="text-muted">Published ${post.updated} </small></p>
        </div></a>
    </div>`;
        
    return { name: post.author.name }

        
    });
    
   
        

    }



/*const search = document.querySelector(".form-control");
            search.addEventListener('keyup', handleSearchInput);

            function handleSearchInput(event) {
                const searchValue = event.currentTarget.value.toLowerCase();
                    console.log(searchValue);
                    
                    const jsonTest = json.filter((user) => {
                        const createHtmlPosts = document.querySelector(".col-sm-7");
                        if(user.author.name.toLowerCase().startsWith(searchValue)) {
                            console.log(user);
                        }
                    });

                    console.log(jsonTest); 
                        
                }*/