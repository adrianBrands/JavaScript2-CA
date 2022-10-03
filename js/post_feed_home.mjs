import { posts, authorization} from "./API_URLs_export.mjs";
//import {displayPostsHome} from "./post_feed_export.mjs";
const createHtmlPosts = document.querySelector(".home-posts");
const searchInput = document.querySelector(".form-control");
let jsonPostData = [];

searchInput.addEventListener('keyup', (event) => {
    const searchValue = event.target.value.toLowerCase();
    
    const filteredPosts = jsonPostData.filter(post => {
        return post.author.name.toLowerCase().startsWith(searchValue);

    });

    displayPosts(filteredPosts);

});

async function getPosts(url) {
    try{
        const getData = {
            method: "GET",
            headers: {
                "content-type": "application/json; charset=UTF-8",
                Authorization: `Bearer ${authorization}`,
            },
            
        };
        const response = await fetch(url, getData);
        console.log(response);
        jsonPostData = await response.json();
        //displayPostsHome(json);
        
        displayPosts(jsonPostData);

    } catch (error) {
        console.log(error);
     }
 
    };

        //

        const displayPosts = (posts) => {
            const htmlPosts = posts.map((post) => {
                return `<div class="card mb-3 w-75">
                <a href="post.html?id=${post.id}"><img src="${post.media}" class="card-img-top" alt="image uploaded by ${post.author.name}">
                <div class="card-body">
                    <h5 class="card-title">${post.author.name}</h5>
                    <p class="card-text">${post.body}</small></p>
                    <p class="card-text"><small class="text-muted">Published ${post.updated} </small></p>
                </div></a>
            </div>`;
            })
            .join('')
            createHtmlPosts.innerHTML = htmlPosts;

        };
       
     
        
        
       
    

        
 
//

       
       
       
       
    
   

getPosts(posts);