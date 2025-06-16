let posts = document.getElementById('posts');
const intersectionDiv = document.getElementById('intersection');
const spinner = document.getElementById('spinner');
let limit = 5;
let start = 1;
let total = 101;

 


/**
 * Asynchronously loads new posts from a remote API and appends them to the DOM.
 * Fetches posts in batches defined by the `limit` variable, starting from the `start` index up to the `total`.
 * Updates the `posts` element with the fetched post titles and links.
 * Handles fetch errors and logs them to the console.
 *
 * @async
 * @function loadingNewPosts
 * @returns {Promise<void>} Resolves when all posts are loaded or an error occurs.
 */
const loadingNewPosts = async () => {
    while( start < total) {
      try {
        const response = await fetch(`https://jsonplaceholder.typicode.com/posts?_start=${start}&_limit=${limit}`);
        if (!response.ok) {
            throw new Error('Impossible de récupérer les articles.');
        } 

          const datas = await response.json();
          datas.forEach(data => {
          posts.innerHTML += `
                              <p id="title" class="text-xl">${data.title}</p>
                              <a id="link" href="#" class="text-blue-500 underline">Lire plus</a>
                            `
    })
     
        start += 5;
        if (start === total) {
            return 
        }
      break;
    
    } catch (error) {
      console.error('Catch Error'  + error);
    }

  }
}


/**
 * IntersectionObserver instance that monitors when a target element becomes fully visible in the viewport.
 * When the element is intersecting, it shows a spinner, waits for 5 seconds, calls `loadingNewPosts()`,
 * and then hides the spinner.
 *
 * @type {IntersectionObserver}
 * @param {IntersectionObserverEntry[]} entries - Array of intersection observer entries.
 * @param {IntersectionObserver} observer - The IntersectionObserver instance.
 */
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      spinner.classList.remove('opacity-0');
      setTimeout(() => {
        loadingNewPosts();
        spinner.classList.add('opacity-0');
      }, 1000);
    }
  })
}, {
  threshold: 1
})

observer.observe(intersectionDiv)



