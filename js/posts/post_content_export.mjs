function postContent (post) {
    return  {
        username: post.author.name,
        image: post.media,
        created: post.created,
        body: post.body,
        id: post.id
    };
}


export const displayPostsProfile = (posts) => {
    const createHtmlPosts = document.querySelector(".posts-feed");
    const htmlPosts = posts.map((post) => {
    const {username, image, created, body, id} = postContent(post);

        return `<div class="card mb-3 w-100 ">
        <a href="post.html?id=${id}"><img src="${image}" class="card-img-top" alt="image uploaded by ${username}">
        <div class="card-body">
            <h5 class="card-title">${username}</h5>
            <p class="card-text">${body}</small></p>
            <p class="card-text"><small class="text-muted">Published ${created} </small></p>
        </div></a>
    </div>`;
    })
    .join('')
    createHtmlPosts.innerHTML = htmlPosts;
};

export const displayPostsHome = (posts) => {
    const createHtmlPosts = document.querySelector(".posts-feed");
    const htmlPosts = posts.map((post) => {
    const {username, image, created, body, id} = postContent(post);

        return `<div class="card mb-3 w-75 ">
        <a href="post.html?id=${id}"><img src="${image}" class="card-img-top" alt="image uploaded by ${username}">
        <div class="card-body">
            <h5 class="card-title">${username}</h5>
            <p class="card-text">${body}</small></p>
            <p class="card-text"><small class="text-muted">Published ${created} </small></p>
        </div></a>
    </div>`;
    })
    .join('')
    createHtmlPosts.innerHTML = htmlPosts;
};

export const displayPostById = (post) => {
    const createHtmlPost = document.querySelector(".post");
    const {username, image, created, body, } = postContent(post);
    
    createHtmlPost.innerHTML += `<div class="card mb-3 w-75">
        <img src="${image}" class="card-img-top" alt="image uploaded by ${username}">
        <div class="card-body">
            <h5 class="card-title">${username}</h5>
            <p class="card-text">${body}</small></p>
            <p class="card-text"><small class="text-muted">Published ${created} </small></p>
        </div>
    </div>`;
}