import { posts, authorization} from "./API_URLs.mjs";
import {displayPostsHome} from "./post_feed_export.mjs";


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
        displayPostsHome(json);
       
    } catch (error) {
       console.log(error);
    }
}   

getPosts(posts);