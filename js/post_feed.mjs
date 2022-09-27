import { posts, authorization } from "./API_URLs.mjs";

const displaySomething = document.querySelector(".col-sm-7");    
    
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
        for (let i = 0; i < json.length; i++){
            console.log(json[i]);
            displaySomething.innerHTML += `<div class="card mb-3">
            <img src="${json[i].media}" class="card-img-top" alt="black and white picture of a huge cliff by the ocean">
            <div class="card-body">
                <h5 class="card-title">${json[i].author.name}</h5>
                <p class="card-text"><small class="text-muted">Published ${json[i].updated}</small></p>
            </div>
        </div>`;

        }
       
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