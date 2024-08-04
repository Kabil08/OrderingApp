import { Component } from "react";

class FirstContactInformation extends Component {
    constructor (props) {
        super(props);
        console.log("First Constructor");

        this.state={
            count: 0,
            name: "Kabil",
        }
    }

    componentDidMount() {
        console.log("First Mount");

        
        // this.timeOut = setInterval(() => {
        //     console.log("Times printed");
        // }, 1000)
    }

    componentWillUnmount() {
        console.log("First Unmount");

        // It will be called when the component unmounts.
        //componentWillUnmount is meant for clearing up the spaces, time intervals and event listeners.
        
        
        // clearInterval(this.timeOut);

    }

    render() {
        console.log("First Render")
        return (
            <div>
                <h2>First Contact Information {this.props.phone}</h2>
                <h3>Name: {this.state.name}</h3>
                <h4>Count: {this.state.count}</h4>
                <button
                    onClick={() => {
                        this.setState({
                            count: this.state.count + 1
                        })
                    }}
                >
                    Increment Count
                </button>

            </div>
        )
    }
}

export default FirstContactInformation;