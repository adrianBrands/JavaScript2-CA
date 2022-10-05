import { post, post_author, authorization } from "./API_URLs_export.mjs";
import { displayPostById } from "./posts/post_content_export.mjs";
//import { postContent } from "./posts/post_content_export.mjs";

    


const queryString = document.location.search;
const params = new URLSearchParams(queryString);
const id = params.get("id");

const postURL = post + id + post_author;

//console.log(postURL);

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
        displayPostById(json);
        jsonValue (json);
        
        console.log(json);
        
    } catch (error) {
       console.log(error);
    }
} 


const form = document.querySelector("#update_post");
const updateButton = document.querySelector(".update_post_button");
const displayUpdateForm = document.querySelector(".flex-grow-1");



const userName = localStorage.getItem("userName");

function jsonValue (json) {
const obj = {
    username: json.author.name,
    title: json.title, 
    body: json.body, 
    image: json.media,
    tags: json.tags
}

const {body, title, image, username, tags } = obj;

if (userName === username){
    console.log(true);
    
} else {
    console.log(false);
}


form.title.value = title;
form.body.value = body;
form.media.value = image;
form.tags.value = tags;

updateButton.addEventListener("click", (event) => {
    event.preventDefault();

    if (userName === username){
        displayUpdateForm.style.display = "block";

    } else {
        console.log("you are not the owner of this post");
    }
    

});

}

/*function testForm () {
    formInputUsername.innerHTML = `${username}`;
}*/




getPosts(postURL);