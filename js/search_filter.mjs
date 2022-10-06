import { post } from "./API_URLs_export.mjs";
import { displayPostsHome } from "./posts/post_content_export.mjs";
import { displayPostsProfile } from "./posts/post_content_export.mjs";

export const searchFunctionHome = (jsonPostData) => {
  const searchInput = document.querySelector(".form-control");
  
  searchInput.addEventListener("keyup", (event) => {
    const searchValue = event.target.value.toLowerCase();
    const filteredPosts = jsonPostData.filter((post) => {
      return post.author.name.toLowerCase().startsWith(searchValue) || post.body.toLowerCase().startsWith(searchValue);
    });

    displayPostsHome(filteredPosts);
    
  });
};

export const searchFunctionProfile = (jsonPostData) => {
  const searchInput = document.querySelector(".form-control");
  
  searchInput.addEventListener("keyup", (event) => {
    const searchValue = event.target.value.toLowerCase();
    const filteredPosts = jsonPostData.filter((post) => {
      return post.author.name.toLowerCase().startsWith(searchValue) || post.body.toLowerCase().startsWith(searchValue);
    });

    displayPostsProfile(filteredPosts);
  });
};
