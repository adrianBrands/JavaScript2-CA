import { post, post_author,  } from "../API_URLs_export.mjs";
import { fetchWithToken } from "../posts/fetch_with_token.mjs";


const queryString = document.location.search;
const params = new URLSearchParams(queryString);
const id = params.get("id");

const postURL = post + id + post_author;


const method = "put";
async function updatePost(postData) {
    
    const response = await fetchWithToken(postURL, {
        method, 
        body: JSON.stringify(postData)

    });

    const result = await response.json();
   
    
    

    
}



function createFormListener() {
    const form = document.querySelector("#update_post");


    if (form) {
        form.addEventListener("submit", (event) => {
            event.preventDefault();
            const form = event.target;
            const formData = new FormData(form);
            const post = Object.fromEntries(formData.entries())

            
            updatePost(post);
            
            setTimeout( () => {
                window.location.reload(true);
            }, 1000);
        
        } );
    
    }  
   

   
   
    
}

createFormListener();