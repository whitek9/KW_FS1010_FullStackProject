# Course Project FS1010

# Project Requirements

## Phase One - HTML/CSS Fundamentals 

- [x] Modify your website's markup to make it more semantically correct.
- [x] Make any improvements to your website's existing HTML and CSS to make it more maintainable. 

## Phase Two - Basic React 

- [x] Convert your website into React components.
- [x] Using React Router, ensure your website works as a multi-page React application.

## Phase Three - React with Backend 

- [x] Use the `useState` React hook in order to store your contact form's state.

- [x] Make a successful AJAX request ( `POST /contact_form/entries` ) from the Contact Us React component that displays a success and error notification upon form submission. 

- [x] Add a new page for your React application, which upon a successful submission to your login     route ( `POST /auth` ), the token received will be used to gain access to protected pages in React. Error messages should be displayed appropriately on screen. 

- [ ] Add a new page, which can only be accessed by a valid JWT, which leverages the `GET /contact_form/entries` endpoint to display all submissions. This page should be stylized appropriately. This page can be accessible through the login page. If a valid JWT is not available, or no token is set, then user should be redirected to the Login page. 

*Bonus*: 

- [ ] In your protected area, add a new page which has a single form that allows you to make a request to `POST /users` to create new users.