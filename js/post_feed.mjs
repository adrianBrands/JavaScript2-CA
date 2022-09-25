import { posts, authorization } from "./API_URLs.mjs";

    
    
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
        const json = await response.json();
        console.log(json);
        
        
        
        

    } catch (error) {
       console.log(error);
    }
}   

getPosts(posts);
