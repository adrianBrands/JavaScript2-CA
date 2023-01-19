/**
 * this function creates the post object that gets displayed on the website
 * gets destructured in the functions below
 * @param {Array} posts the array of objects from the API
 * @returns object
 */
export function postContent(post) {
  return {
    title: post.title,
    username: post.author.name,
    image: post.media,
    created: post.created.slice(0, 10),
    body: post.body,
    id: post.id,
    tags: post.tags,
  };
}

/**
 * this function displays the posts on the profile page.
 * @param {Array} posts the array of objects from the API
 */
export const displayPostsProfile = (posts) => {
  const createHtmlPosts = document.querySelector(".posts-feed");
  const htmlPosts = posts
    .flatMap((post) => {
      const { username, image, created, body, id, title } = postContent(post);

      if (image === "") {
        return `<div class="card mb-3 w-100 ">
                        <a href="post.html?id=${id}">
                        <div class="card-body">
                            <h3 class="card-title">${username}</h3>
                            <h4 class="card-text">${title}</small></h4>
                            <p class="card-text">${body}</small></p>
                            <p class="card-text"><small class="text-muted">Published ${created} </small></p>
                        </div></a>
                    </div>`;
      } else if (image !== "") {
        return `<div class="card mb-3 w-100 ">
                        <a href="post.html?id=${id}"><img src="${image}" class="card-img-top" alt="image uploaded by ${username}">
                        <div class="card-body">
                            <h3 class="card-title">${username}</h3>
                            <h4 class="card-text">${title}</small></h4>
                            <p class="card-text">${body}</small></p>
                            <p class="card-text"><small class="text-muted">Published ${created} </small></p>
                        </div></a>
                    </div>`;
      }
    })
    .join("");
  createHtmlPosts.innerHTML = htmlPosts;
};

/**
 * this function displays the posts on the home page.
 * @param {Array} posts the array of objects from the API
 */
export const displayPostsHome = (posts) => {
  const createHtmlPosts = document.querySelector(".posts-feed");
  const htmlPosts = posts
    .map((post) => {
      const { username, image, created, body, id, title } = postContent(post);

      if (image === "") {
        return `<div class="card mb-3 w-75 ">
                        <a href="post.html?id=${id}">
                        <div class="card-body">
                            <h3 class="card-title">${username}</h3>
                            <h4 class="card-text">${title}</small></h4>
                            <p class="card-text">${body}</small></p>
                            <p class="card-text"><small class="text-muted">Published ${created} </small></p>
                        </div></a>
                    </div>`;
      } else if (image !== "") {
        return `<div class="card mb-3 w-75 ">
                    <a href="post.html?id=${id}"><img src="${image}" class="card-img-top" alt="image uploaded by ${username}">
                    <div class="card-body">
                        <h5 class="card-title">${username}</h5>
                        <h4 class="card-text">${title}</small></h4>
                        <p class="card-text">${body}</small></p>
                        <p class="card-text"><small class="text-muted">Published ${created} </small></p>
                    </div></a>
                </div>`;
      }
    })
    .join("");
  createHtmlPosts.innerHTML = htmlPosts;
};

/**
 * this function displays a single post by its id.
 * @param {Array} posts the array of objects from the API
 */
export const displayPostById = (post) => {
  const createHtmlPost = document.querySelector(".post");
  const { username, image, created, body, title, tags } = postContent(post);

  if (image === "") {
    return (createHtmlPost.innerHTML += `<div class="card mb-3 w-75">
                                          <div class="card-body">
                                            <h5 class="card-title">${username}</h5>
                                            <h4 class="card-text">${title}</small></h4>
                                            <p class="card-text">${body}</small></p>
                                            <p class="card-text">${tags}</small></p>
                                            <p class="card-text"><small class="text-muted">Published ${created} </small></p>
                                          </div>
                                        </div>`);
  } else if (image !== "") {
    return (createHtmlPost.innerHTML += `<div class="card mb-3 w-75">
                                    <img src="${image}" class="card-img-top" alt="image uploaded by ${username}">
                                    <div class="card-body">
                                        <h5 class="card-title">${username}</h5>
                                        <h4 class="card-text">${title}</small></h4>
                                        <p class="card-text">${body}</small></p>
                                        <p class="card-text">${tags}</small></p>
                                        <p class="card-text"><small class="text-muted">Published ${created} </small></p>
                                    </div>
                                </div>`);
  }
};
