import { post, post_author, authorization } from "./API_URLs_export.mjs";
import { displayPostById } from "./posts/post_content_export.mjs";
import { jsonValue } from "./checkIf_user_can_update_remove.mjs";

const queryString = document.location.search;
const params = new URLSearchParams(queryString);
const id = params.get("id");
const postURL = post + id + post_author;

/**
 * gets url and getData to run and api request and gets a single post by its id
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
    const json = await response.json();

    displayPostById(json);
    jsonValue(json);
  } catch (error) {
    console.log(error);
  }
}

getPosts(postURL);
