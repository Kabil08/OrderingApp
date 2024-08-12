import React from "react";
import FirstContactInformation from "./ClassBasedComponentsAndItsLifeCycle/FirstContactInformation";
import LoginContext from "../customHooks/LoginContext";
// import SecondContactInformation from "./ClassBasedComponentsAndItsLifeCycle/SecondContactInformation";

// const ReachUs = () => {
//     return (
//         <div>
//             <h1>This is our reach us page</h1>
//             <h2>To email: 📧receipe@gmail.com</h2>
//             <h2>To contact: 📱9000000000</h2>
//             <FirstContactInformation phone="0000000000" />
//             <SecondContactInformation phone="1111111111" />
//         </div>
//     )
// }

class ReachUs extends React.Component {
    constructor(props) {
        super(props);
        
        console.log("Parent Constructor");
    }

    componentDidMount() {
        console.log("Parent Mount");
    }

    render () {
        console.log("Parent Render");
        return (
            <div>
                <br/><h1>This is our reach us page</h1><br />
                {/* To use the context in class component, it is only possible using the context with .Consumer.
                To get the value use the javascript {} and a callback function get the value and use it */}
                <LoginContext.Consumer>
                    {({loggedInUser}) => <h2>The logged in user is <b>{loggedInUser}</b></h2>}
                </LoginContext.Consumer>
                <br />
                <br />
                <h2>To email: 📧receipe@gmail.com</h2>
                <h2>To contact: 📱{this.props.mobileNo}</h2>
                <FirstContactInformation phone="0000000000" />
                {/* <SecondContactInformation phone="1111111111" /> */}
            </div>
        )
    }
}

export default ReachUs;