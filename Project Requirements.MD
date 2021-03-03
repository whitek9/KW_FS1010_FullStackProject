# Course Project - FS1010 Requirements

The project for FS1010 will build off of the contact us form JSON API from FS1020 and involve integrating in the existing HTML / CSS from FS1000. 

## Phase One - HTML/CSS Fundamentals 

1. Modify your website's markup to make it more semantically correct. The expectation isn't to be perfectly semantically correct and iterated over throughout the length of the project. Ensure your setup is sound. 

2. Make any improvements to your website's existing HTML and CSS to make it more maintainable. 

## Phase Two - Basic React 
Using your semantic markup from Phase One, convert your website into React components, and using React Router, ensure your website works as a multi-page React application. For your contact form component, it does not need to be connected to state in this phase. 

Reference any documentation you find to create a React Router - [here is a simple resource](https://www.golangprograms.com/how-to-create-simple-react-router-to-navigate-multiple-pages.html)

## Phase Three - React with Backend 
*Note*: All endpoints listed are ones developed in your FS1020 course. You will need your Express app running in another terminal session in order to interact with your React application. 

1. Use the `useState` React hook in order to store your contact form's state. Feel free to use libraries like [formik](https://www.npmjs.com/package/formik) if you so choose to. 

2. Make a successful AJAX request ( `POST /contact_form/entries` - developed in the FS1020 Course Project) from the Contact Us React component that displays a success and error notification upon form submission. 

3.  a) Add a new page for your React application, which upon a successful submission to your login     route ( `POST /auth` ), the token received will be used to gain access to protected pages in React. Error messages should be displayed appropriately on screen. 

    b) Add a new page, which can only be accessed by a valid JWT, which leverages the `GET /contact_form/entries` endpoint to display all submissions. This page should be stylized appropriately. This page can be accessible through the login page. If a valid JWT is not available, or no token is set, then user should be redirected to the Login page from step 2. 

*Bonus*: 

4. In your protected area, add a new page which has a single form that allows to make a request to POST /users to create new users.