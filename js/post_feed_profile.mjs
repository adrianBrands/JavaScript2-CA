import { posts, authorization } from "./API_URLs_export.mjs";
import {
  searchFunctionProfile,
  filterByDateProfile,
} from "./search_filter.mjs";
import { displayPostsProfile } from "./posts/post_content_export.mjs";

let jsonPostData = [];
/**
 * gets url and getData to run and api request and gets the posts from the api
 * @param {string} url {the API url}
 * @param {object} getData {method, headers}
 */
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
    filterByDateProfile(jsonPostData);
  } catch (error) {
    console.log(error);
  }
}

getPosts(posts);
