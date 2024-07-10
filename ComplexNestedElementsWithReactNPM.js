import React from "react";
import ReactDOM from "react-dom/client";

const complexNestedElements = React.createElement(
    "div",
    { id: "parent" },
    [React.createElement(
        "div",
        { id: "child1" },
        [React.createElement("h1", {}, "Hello from heading1"), React.createElement("h2", {}, "Hello from heading2")]
    ),
    React.createElement(
        "div",
        { id: "child2" },
        [React.createElement("h1", {}, "Hello from heading1"), React.createElement("h2", {}, "Hello from heading2")]
    ),
    ]
)


// If we use the same id in element props, it will work - NO ISSUES.

const root = ReactDOM.createRoot(document.getElementById("root"));


root.render(complexNestedElements);