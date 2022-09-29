import { posts, authorization} from "./API_URLs_export.mjs";
import {displayPostsProfile} from "./post_feed_export.mjs";


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
        
        displayPostsProfile(json);
       
    } catch (error) {
       console.log(error);
    }
}   

getPosts(posts);


//add posts to the feed

/*async function makePost(post) {
    try{
        const postData = {
            method: "POST",
            body: JSON.stringify({
                title: "testAbra",
                body: "helloAbra",
                tas:["string_test"]

            }),
            headers: {
                "content-type": "application/json; charset=UTF-8",
                Authorization: `Bearer ${authorization}`,
            },
            
        };
        const response = await fetch(post, postData);
        console.log(response);
        const json = await response.json();
        console.log(json);
        
        
        
        

    } catch (error) {
       console.log(error);
    }
}*/

//makePost(posts);

//427