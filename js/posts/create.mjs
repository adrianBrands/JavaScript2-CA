import { post } from "../API_URLs_export.mjs";
import { fetchWithToken } from "../posts/fetch_with_token.mjs";

const displayErrorMessage = document.querySelector(".create_post_h1");

const method = "post";
async function createPost(postData) {
  const response = await fetchWithToken(post, {
    method,
    body: JSON.stringify(postData),
  });

  const result = await response.json();
  const error = result.error;
  console.log(result);

  if (error) {
    displayErrorMessage.innerHTML = `${error}`;
    displayErrorMessage.style.color = "red";
  } else {
    setTimeout(() => {
      window.open("index.html", "_self");
    }, 1500);
  }
}

function createFormListener() {
  const form = document.querySelector("#create_post");

  if (form) {
    form.addEventListener("submit", (event) => {
      event.preventDefault();
      const form = event.target;
      const formData = new FormData(form);
      const post = Object.fromEntries(formData.entries());

      createPost(post);
    });
  }
}
createFormListener();
