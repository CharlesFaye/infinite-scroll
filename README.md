# 🔄 Infinite Scroll Project

This is a modern and responsive Infinite Scroll project built with HTML, TailwindCSS, and vanilla JavaScript. It loads additional content dynamically as the user scrolls down the page, offering a seamless and continuous browsing experience.

## Features

- Infinite scrolling using JavaScript and Intersection Observer
- Fetches data dynamically from an API or mock data source
- Loading animation or spinner while fetching new content
- Responsive grid layout using TailwindCSS
- Optimized for performance and smooth user experience

## Demo

👉 [Live Demo](https://infinite-scroll-pearl.vercel.app/)  


## Installation

1. Clone the repository:

```bash
git clone https://github.com/CharlesFaye/infinite-scroll.git

2. Navigate into the folder:

cd infinite-scroll

3. run "npm run dev" on your console in order to launch the app

Technologies Used

. HTML5
. TailwindCSS
. JavaScript (ES6+)
. Intersection Observer API
. JSONPlaceholder API 

How It Works

1. Initial content is loaded on page load.
2. As the user scrolls and the last item comes into view, the app fetches the next batch of data.
3. New content is dynamically appended to the page without full reload.
4. A loading spinner or message appears during data fetching.


Project Structure
infinite-scroll/
├── index.html        # Markup and structure
├── /js/main.js        # Infinite scroll logic and API calls
├── src/style.css         # Optional additional styles

Optional Enhancements

. Add a “back to top” button
. Prevent duplicate content loading
. Support filtering or search with infinite scroll
. Integrate pagination from the backend (if applicable)
. Show a message when no more data is available

API Source
This project uses:

[JSONPlaceholder](https://jsonplaceholder.typicode.com/) for demo data

Author
Created by Charles Faye.


