import React from "react";
import ReactDOM from "react-dom/client";

// JSX is a html-like syntax, which transpiles jsx to React.createElement by babel(https://babeljs.io/), then it converts to ReactElement (JS object) and in root.render(Js Object) will change to Html element

const heading = <h1 id="heading">Heading</h1>

// To create a functional component
// Functional component -> is a normal javascript function that returns some piece of JSX or return React Element.

const HeadingComponent = () => {
    return <h1>This is heading from functional component</h1>
}

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<HeadingComponent />);

// root.render(heading);