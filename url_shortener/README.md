# URL Shortener

![HTML](https://img.shields.io/badge/HTML-5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS](https://img.shields.io/badge/CSS-3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-ES6+-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)

## Project Description

This project is a simple URL Shortener web application that allows users to generate short URLs for longer links, track the number of clicks on each shortened URL, and manage (edit/delete) the generated URLs. It utilizes HTML, CSS, and JavaScript for the front-end interface and functionality.

## Features

- **Generate Short URL**: Create a shortened version of a given URL.
- **Click Counter**: Track the number of times the shortened URL is clicked.
- **Edit Short URL**: Edit the generated short URL part.
- **Delete URLs**: Delete specific URLs or clear the entire list of URLs.


## Example

1. **Generate Short URL**
   - Enter a valid URL in the input field.
   - Click the "Create" button to generate a shortened URL.

2. **Click Counter**
   - Click on the generated short URL to open the original link in a new tab.
   - The click count will be displayed and updated.

3. **Edit Short URL**
   - Click the "Edit" button next to the generated URL.
   - Modify the short URL part and click "Save" to update it.

4. **Delete URLs**
   - Enter the original URL in the input field and click the "Delete" button to remove that specific URL.
   - Leave the input field empty and click "Delete" to clear the entire list of URLs.


## JavaScript Functions

- **generateUrl**: Generates a short URL for the given input URL, tracks click counts, and handles edit and save functionalities.
- **urlValidityChecker**: Validates the input URL format.
- **randomUrlSet**: Generates a random string for the short URL part.
- **deleteUrl**: Deletes specific URLs or clears the entire list of URLs.


## Author

- Vladimir Davidov
