import { Component } from "react";

class SecondContactInformation extends Component {
    constructor (props) {
        super(props);
        console.log("Second Constructor")
    }

    componentDidMount() {
        console.log("Second Mount")
    }

    render() {
        console.log("Second Render")
        return (
            <h2>Second Contact Information {this.props.phone}</h2>
        )
    }
}

export default SecondContactInformation;