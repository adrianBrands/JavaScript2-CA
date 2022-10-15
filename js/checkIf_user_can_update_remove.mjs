const form = document.querySelector("#update_post");
const updateButton = document.querySelector(".update_post_button");
const removeButton = document.querySelector(".remove_post_button");
const displayUpdateForm = document.querySelector(".flex-grow-1");
const userName = localStorage.getItem("userName");


/**
 * this function checks if a user can update or remove a post and validates this by 
 * checking if the user is the owner of the specific post
 * @param {*} json 
 */
export function jsonValue(json) {
  const postValues = {
    username: json.author.name,
    title: json.title,
    body: json.body,
    image: json.media,
    tags: json.tags,
  };

  const { body, title, image, username, tags } = postValues;

  form.title.value = title;
  form.body.value = body;
  form.media.value = image;
  form.tags.value = tags;

  updateButton.addEventListener("click", (event) => {
    event.preventDefault();

    if (userName === username) {
      displayUpdateForm.style.display = "block";
      window.scrollTo({ top: document.body.scrollHeight, behavior: "smooth" });
    } else {
      updateButton.innerHTML = "you are not the owner of this post";
    }
  });

  removeButton.addEventListener("click", (event) => {
    event.preventDefault();
    if (userName !== username) {
      removeButton.innerHTML = "You do not have permission to remove this post";
    }
  });
}
