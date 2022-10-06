import { post } from "../API_URLs_export.mjs";
import { fetchWithToken } from "../posts/fetch_with_token.mjs";

const method = "post";
async function createPost(postData) {
  const response = await fetchWithToken(post, {
    method,
    body: JSON.stringify(postData),
  });

  const result = await response.json();

  console.log(result);
}

function createFormListener() {
  const form = document.querySelector("#create_post");

  if (form) {
    form.addEventListener("submit", (event) => {
      event.preventDefault();
      const form = event.target;
      const formData = new FormData(form);
      const post = Object.fromEntries(formData.entries());

      console.log(post);

      createPost(post);

      setTimeout( () => {
                window.open("index.html", "_self");
            }, 1500);
    });
  }
}

createFormListener();
