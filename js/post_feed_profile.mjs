import { posts, authorization } from "./API_URLs_export.mjs";

import { searchFunctionProfile } from "./search_filter.mjs";
import { displayPostsProfile } from "./posts/post_content_export.mjs";
let jsonPostData = [];

async function getPosts(url) {
  try {
    const getData = {
      method: "GET",
      headers: {
        "content-type": "application/json; charset=UTF-8",
        Authorization: `Bearer ${authorization}`,
      },
    };
    const response = await fetch(url, getData);
    

    jsonPostData = await response.json();
    displayPostsProfile(jsonPostData);
    searchFunctionProfile(jsonPostData);
  } catch (error) {
    console.log(error);
  }
}

getPosts(posts);
