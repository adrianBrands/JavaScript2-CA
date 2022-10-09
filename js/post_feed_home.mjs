import { posts, authorization } from "./API_URLs_export.mjs";
import { displayPostsHome } from "./posts/post_content_export.mjs";
import { searchFunctionHome, filterByDateHome } from "./search_filter.mjs";

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

    displayPostsHome(jsonPostData);
    searchFunctionHome(jsonPostData);
    filterByDateHome(jsonPostData);
  } catch (error) {
    console.log(error);
  }
}

getPosts(posts);
