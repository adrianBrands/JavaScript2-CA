
 const authorization = localStorage.getItem("accsessToken"); 
 const baseUrl_API = "https://nf-api.onrender.com"; 
 const registerUrl = `${baseUrl_API}/api/v1/social/auth/register`;
 const signinrUrl = `${baseUrl_API}/api/v1/social/auth/login`;
 const posts = `${baseUrl_API}/api/v1/social/posts/?_author=true `;
 const postId = `${baseUrl_API}/api/v1/social/posts/id/?_author=true`;
 const post = `${baseUrl_API}/api/v1/social/posts/`;
 const post_author  = `?_author=true`;



export {signinrUrl, registerUrl, posts, authorization, postId, post, post_author};



