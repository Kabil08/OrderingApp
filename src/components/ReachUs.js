import React from "react";
import FirstContactInformation from "./ClassBasedComponentsAndItsLifeCycle/FirstContactInformation";
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
                <h1>This is our reach us page</h1>
                <h2>To email: 📧receipe@gmail.com</h2>
                <h2>To contact: 📱{this.props.mobileNo}</h2>
                <FirstContactInformation phone="0000000000" />
                {/* <SecondContactInformation phone="1111111111" /> */}
            </div>
        )
    }
}

export default ReachUs;