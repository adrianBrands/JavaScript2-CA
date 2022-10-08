
import { displayPostsHome } from "./posts/post_content_export.mjs";
import { displayPostsProfile } from "./posts/post_content_export.mjs";

export const searchFunctionHome = (jsonPostData) => {
  const searchInput = document.querySelector(".form-control");

  searchInput.addEventListener("keyup", (event) => {
    const searchValue = event.target.value.toLowerCase();
    const filteredPosts = jsonPostData.filter((post) => {
      return (
        post.author.name.toLowerCase().startsWith(searchValue) ||
        post.body.toLowerCase().startsWith(searchValue)
      );
    });

    displayPostsHome(filteredPosts);
  });
};

export const searchFunctionProfile = (jsonPostData) => {
  const searchInput = document.querySelector(".form-control");

  searchInput.addEventListener("keyup", (event) => {
    const searchValue = event.target.value.toLowerCase();
    const filteredPosts = jsonPostData.filter((post) => {
      return (
        post.author.name.toLowerCase().startsWith(searchValue) ||
        post.body.toLowerCase().startsWith(searchValue)
      );
    });

    displayPostsProfile(filteredPosts);
  });
};


export const filterByDate = (jsonPostData) => {
  const filterToday = document.querySelector(".today");
  const filterYesterday = document.querySelector(".yesterday");

const today = new Date();
const previous = new Date(today.getTime());
previous.setDate(today.getDate() - 1);

filterToday.addEventListener("click", (event) => {
 event.preventDefault();
 const todayDateString = (today.getDate() + "");
 
 console.log(todayDateString);
  const filterJsonDates = jsonPostData.filter((post) => {
    
    const jsonDataPostDate = post.created.slice(9, 10)
    if (jsonDataPostDate === todayDateString) {
      return post.created;
    }

  });

  displayPostsProfile(filterJsonDates);

});

filterYesterday.addEventListener("click", (event) => {
  event.preventDefault();
  const previousDateString = (previous.getDate() + "");
  console.log(previousDateString);
   const filterJsonDates = jsonPostData.filter((post) => {
     
     const jsonDataPostDate = post.created.slice(9, 10)
     if (jsonDataPostDate === previousDateString) {
       return post.created;
     }
 
   });
 
   displayPostsProfile(filterJsonDates);
 
 });


}

