const head = React.createElement("h1", { id: "heading" }, "Learning React!!")

console.log(head); // It will give us a object with values like type="h1", props, etc... -> It is known as ReactElement(Normal javascript object).

const root = ReactDOM.createRoot(document.getElementById("root")); // To manipulate the DOM -> inserting a h1 inside a div, so we should use ReactDOM.


root.render(parent); // To render use render. (take an object, creates the tag that browser understands and render it to the DOM)

// root.render -> replaces all the things inside the div element with (id - root) from index.html and put the things that are written here

/*
    Props for createElement:
        The React.createElement() arguments are explained below:

            type (string | React.createClass()):

                Can be a string which represents an HTML element (or custom HTML element) or React component instance (i.e., an instance of React.createClass())

            props (null | object):

                Can be null or an object containing attributes/props and values

            children (null | string | React.createClass() | React.createElement()):

                Children can be null, a string that gets turned into a text node, an instance of React.createClass() or React.createElement()

    Note that, the last argument, that becomes a child of the node being created can be a React text node, a React element node, or even a React component instance.

*/