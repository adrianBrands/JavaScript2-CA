import { posts, authorization} from "./API_URLs_export.mjs";
//import {displayPosts} from "./post_feed_export.mjs";
import { displayPostsHome } from "./posts/post_content_export.mjs";
import { searchFunction } from "./search_filter.mjs";


let jsonPostData = [];

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
        
        displayPostsHome(jsonPostData);
        searchFunction(jsonPostData); 
        
        

    } catch (error) {
        console.log(error);
     }
 
    };

       

       
       
getPosts(posts);