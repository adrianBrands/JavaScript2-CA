import { postsTest, postTest2, authorization } from "./API_URLs_export.mjs";


const queryString = document.location.search;
const params = new URLSearchParams(queryString);
const id = params.get("id");

const postURL = postsTest + id + postTest2;

console.log(postURL);

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
        displayPost(json)
       
    } catch (error) {
       console.log(error);
    }
} 

const displayPost = (json) => {
    const createHtmlPost = document.querySelector(".post");
    createHtmlPost.innerHTML += `<div class="card mb-3 w-75">
        <img src="${json.media}" class="card-img-top" alt="image uploaded by ${json.author.name}">
        <div class="card-body">
            <h5 class="card-title">${json.author.name}</h5>
            <p class="card-text">${json.body}</small></p>
            <p class="card-text"><small class="text-muted">Published ${json.updated} </small></p>
        </div>
    </div>`;
}

getPosts(postURL);