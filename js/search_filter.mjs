import { displayPostsHome } from "./posts/post_content_export.mjs";
import { displayPostsProfile } from "./posts/post_content_export.mjs";
/**
 * this function will search trough the posts that are displayed on the-
 * home page and return and display the posts that contains the-
 * value that is typed into the search bar.
 * 
 */
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


/**
 * this function will search trough the posts that are displayed on the-
 * profile page and return and display the posts that contains the-
 * value that is typed into the search bar.
 * @param {*} jsonPostData 
 */
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


/**
 * this function filters the dates form the posts and displays 
 * them on the profile page.
 * it shows the posts made on the actual date or it 
 * can show the posts that was made the previous day
 * @param {*} jsonPostData 
 */
export const filterByDateProfile = (jsonPostData) => {
  const filterToday = document.querySelector(".today");
  const filterYesterday = document.querySelector(".yesterday");

  const today = new Date();
  const previous = new Date(today.getTime());
  previous.setDate(today.getDate() - 1);

  filterToday.addEventListener("click", (event) => {
    event.preventDefault();
    const todayDateString = today.getDate() + "";
    
    const filterJsonDates = jsonPostData.filter((post) => {
      const jsonDataPostDateOneDigit = post.created.slice(9, 10);
      const jsonDataPostDateTwoDigits = post.created.slice(8, 10);
      if (jsonDataPostDateOneDigit === todayDateString || jsonDataPostDateTwoDigits === todayDateString) {
        return post.created;
      }
    });

    displayPostsProfile(filterJsonDates);
    
  });

  filterYesterday.addEventListener("click", (event) => {
    event.preventDefault();
    const previousDateString = previous.getDate() + "";
    
    const filterJsonDates = jsonPostData.filter((post) => {
      const jsonDataPostDateOneDigit = post.created.slice(9, 10);
      const jsonDataPostDateTwoDigits = post.created.slice(8, 10);
      if (jsonDataPostDateOneDigit === previousDateString || jsonDataPostDateTwoDigits === previousDateString) {
        return post.created;
      }
    });

    displayPostsProfile(filterJsonDates);
    
  });
};

/**
 * this function filters the dates form the posts and displays 
 * them on the home page.
 * it shows the posts made on the actual date or it 
 * can show the posts that was made the previous day
 * @param {*} jsonPostData 
 */
export const filterByDateHome = (jsonPostData) => {
  const filterToday = document.querySelector(".today");
  const filterYesterday = document.querySelector(".yesterday");

  const today = new Date();
  const previous = new Date(today.getTime());
  previous.setDate(today.getDate() - 1);

  filterToday.addEventListener("click", (event) => {
    event.preventDefault();
    const todayDateString = today.getDate() + "";
    
    const filterJsonDates = jsonPostData.filter((post) => {
      const jsonDataPostDateOneDigit = post.created.slice(9, 10);
      const jsonDataPostDateTwoDigits = post.created.slice(8, 10);
      if (jsonDataPostDateOneDigit === todayDateString || jsonDataPostDateTwoDigits === todayDateString) {
        return post.created;
      } else {
        console.log()
      }
    });

    displayPostsHome(filterJsonDates);
    
  });

  filterYesterday.addEventListener("click", (event) => {
    event.preventDefault();
    const previousDateString = previous.getDate() + "";
    
    const filterJsonDates = jsonPostData.filter((post) => {
      const jsonDataPostDateOneDigit = post.created.slice(9, 10);
      const jsonDataPostDateTwoDigits = post.created.slice(8, 10);
      if (jsonDataPostDateOneDigit === previousDateString || jsonDataPostDateTwoDigits === previousDateString) {
        return post.created;
      }
    });

    displayPostsHome(filterJsonDates);
    
  });
};