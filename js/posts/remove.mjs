import { post } from "../API_URLs_export.mjs";
import { fetchWithToken } from "../posts/fetch_with_token.mjs";

const method = "delete";
async function createPost(postData) {
    
    const response = await fetchWithToken(post, {
        method, 
        body: JSON.stringify(postData)

    });

    const result = await response.json();
    
    

    console.log(result);
}

