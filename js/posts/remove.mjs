import { post, post_author } from "../API_URLs_export.mjs";
import { fetchWithToken } from "../posts/fetch_with_token.mjs";

const queryString = document.location.search;
const params = new URLSearchParams(queryString);
const id = params.get("id");

const postURL = post + id + post_author;

const method = "delete";
async function removePost(postData) {
  const response = await fetchWithToken(postURL, {
    method,
    body: JSON.stringify(postData),
  });

  const result = await response.json();
  
  if (typeof result === "number"){
    setTimeout(() => {
        window.open("index.html", "_self");
      }, 1000);
  } 
  
}

const removeButton = document.querySelector(".remove_post_button")
removeButton.addEventListener("click", (event) => {
    event.preventDefault();
    
    removePost();

});

