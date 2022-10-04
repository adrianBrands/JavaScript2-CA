import { post } from "./API_URLs_export.mjs";
import { displayPostsHome } from "./posts/post_content_export.mjs";

export const searchFunction = (jsonPostData) => {
    const searchInput = document.querySelector(".form-control");
    

searchInput.addEventListener('keyup', (event) => {
    const searchValue = event.target.value.toLowerCase();
    
    const filteredPosts = jsonPostData.filter(post => {
        return post.author.name.toLowerCase().startsWith(searchValue) ;

    });

    displayPostsHome(filteredPosts);
}); 
}















