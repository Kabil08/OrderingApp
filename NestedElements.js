// const heading = React.createElement("h1", {}, "Helloo from heading tag");

// const child = React.createElement("div", {id: "child"}, heading);

// const parent = React.createElement("div", { id: "parent" }, child);

// the above code can be written like below for better understanding.

const singleChildrenElement = React.createElement(
    "div",
    { id: "parent" },
    React.createElement(
        "div",
        { id: "child" },
        React.createElement(
            "h1",
            {},
            "Hello from heading",
        )
    )
)

/*
    The above example:
        <div id="parent">
            <div id="child">
                <h1>Hello from heading</h1>
                // How to add two or more childrens / siblings to a react element?
            </div>
        </div>

    To do so, we have pass it as array.

    const parent = React.createElement(
        "div",
        { id: "parent" },
        React.createElement(
            "div",
            { id: "child" },
            [React.createElement("h1", {}, "Hello from heading"), React.createElement("h1", {}, "Hello from heading")]
        )
    )
*/

const multipleChildrenElement = React.createElement(
    "div",
    { id: "parent" },
    React.createElement(
        "div",
        { id: "child" },
        [React.createElement("h1", {}, "Hello from heading1"), React.createElement("h2", {}, "Hello from heading2")]
    )
)


const root = ReactDOM.createRoot(document.getElementById("root")); // To manipulate the DOM -> inserting a h1 inside a div, so we should use ReactDOM.


root.render(multipleChildrenElement); // To render use render. (take an object, creates the tag that browser understands and render it to the DOM)



