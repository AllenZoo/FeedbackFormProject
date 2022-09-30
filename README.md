# Frontend Mentor - Interactive rating component solution

This is a solution to the [Interactive rating component challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/interactive-rating-component-koxpeBUmI). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the app depending on their device's screen size
- See hover states for all interactive elements on the page
- Select and submit a number rating
- See the "Thank you" card state after submitting a rating

### Screenshot



### Links

- Live Site URL: [Feedback Form](https://allenzoo.github.io/FeedbackFormProject/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- [React](https://reactjs.org/) - JS library

### What I learned

```html
/* Using custom radio inputs and wrapping them with label to add text to them and allowing hover + checked
states to modify the text as well through css*/
<form className="app-form-form" onSubmit={this.handleSubmit}>
          <fieldset
            id="rating"
            className="app-form-button-list"
            ref={this.ratingRef}
          >
            <label className="radio-button-container">
              <input
                type="radio"
                name="rating"
                value="1"
                checked={this.state.selectedOption === "1"}
                onChange={this.onValueChange}
              />
              <span>1</span>
            </label>
            <label className="radio-button-container">
              <input
                type="radio"
                name="rating"
                value="2"
                checked={this.state.selectedOption === "2"}
                onChange={this.onValueChange}
              />
              <span>2</span>
            </label>
            <label className="radio-button-container">
              <input
                type="radio"
                name="rating"
                value="3"
                checked={this.state.selectedOption === "3"}
                onChange={this.onValueChange}
              />
              <span>3</span>
            </label>
            <label className="radio-button-container">
              <input
                type="radio"
                name="rating"
                value="4"
                checked={this.state.selectedOption === "4"}
                onChange={this.onValueChange}
              />
              <span>4</span>
            </label>
            <label className="radio-button-container">
              <input
                type="radio"
                name="rating"
                value="5"
                checked={this.state.selectedOption === "5"}
                onChange={this.onValueChange}
              />
              <span>5</span>
            </label>
          </fieldset>
          <button className="app-form-submit-button" type="submit">
            Submit
          </button>
        </form>
```


```css
/* Styling radio-inputs */
/* Default radio button appearance*/
input[type="radio"] {
  appearance: none;
  font: inherit;

  width: 50px;
  height: 50px;
  border: none;
  border-radius: 25px;

  background-color: hsl(213, 19%, 18%);
  color: hsl(216, 12%, 54%);

  transition: background-color 0.3s, color 0.5s;
}

/* Checked radio button css */
input[type="radio"]:checked {
  background-color: hsl(217, 12%, 63%);
  color: white;
}

/* Unchecked radio button css */
input[type="radio"]:not(:checked):hover {
  cursor: pointer;
  background-color: hsl(25, 97%, 53%);
  color: white;
}

/* Fixed problem of the button text not changing colour when hovering :),
really found useful learning about +, ~ in css and modifying siblings */
input[type="radio"]:not(:checked):hover + span {
  color: white;
}

/* Sets text of selected radio button to be white*/
input[type="radio"]:checked ~ span {
  color: white;
}

/* Styles and moves text within radio button */
label span:first-of-type {
  position: relative;
  top: -40px;
  font-size: 18px;
  color: hsl(216, 12%, 54%);
  pointer-events: none;
}
```

```js

/*Learned to wrap class components with hooks! 
This particular example was useful for navigating between pages using Reacts Navigate hook*/
function WithNavigate(props) {
  let navigate = useNavigate();
  return <AppFormButtons {...props} navigate={navigate} />;
}

export default WithNavigate;
```



### Continued development

Definetely want to try getting more comfortable with using custom CSS and also familiarize myself with CSS connectors like (+, ~).

### Useful resources

- [On event change another style](https://stackoverflow.com/questions/6910049/on-a-css-hover-event-can-i-change-another-divs-styling) - This helped me modify the css of other values when interacting with an input hover and click. Really useful, and something I will probably need to reference again in the future.
- [Custom CSS Styling Radio Buttons](https://moderncss.dev/pure-css-custom-styled-radio-buttons/) - This is an amazing article which helped me learn about styling css radio buttons. Honestly a lifesaver - could not imagine what the code would like if I implemented this challenge using custom made buttons instead of radio buttons just because I couldn't match the design.


## Author

- Frontend Mentor - [@AllenZoo](https://www.frontendmentor.io/profile/AllenZoo)

_______________________________________________________________________________________________________________________________________________________________________

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
