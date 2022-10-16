import { post } from "../API_URLs_export.mjs";
import { fetchWithToken } from "../posts/fetch_with_token.mjs";

const displayErrorMessage = document.querySelector(".create_post_h1");
const method = "post";
/**
 * takes the url and fetch the userdata to run an API request
 * runs if the form is submitted in the function createFormListener()
 * if an error occurs the error message gets dsiplayed on the page, if not
 * the user gets sent to index.html after 1,5 seconds
 * @param {object} postData {method, headers}
 */
async function createPost(postData) {
  const response = await fetchWithToken(post, {
    method,
    body: JSON.stringify(postData),
  });

  const result = await response.json();
  const error = result.error;

  if (error) {
    displayErrorMessage.innerHTML = `${error}`;
    displayErrorMessage.style.color = "red";
  } else {
    setTimeout(() => {
      window.open("index.html", "_self");
    }, 1500);
  }
}

/**
 * this function creates a post using the input values typed into the create-post form.
 * if an image url is not provided, the post.media will be deleted.
 */
function createFormListener() {
  const form = document.querySelector("#create_post");

  if (form) {
    form.addEventListener("submit", (event) => {
      event.preventDefault();
      const form = event.target;
      const formData = new FormData(form);
      const post = Object.fromEntries(formData.entries());

      if (post.media === "") {
        delete post.media;
      }

      createPost(post);
    });
  }
}
createFormListener();
