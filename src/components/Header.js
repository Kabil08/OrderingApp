import { Link } from "react-router-dom";

const Header = () => {
    return (
        <div className="mainContainer">
            <div>
                <img 
                    src="https://img.freepik.com/premium-vector/restaurant-logo-design-template_57516-175.jpg?w=996"
                    alt="img loading"
                    className="imageTag"
                />
            </div>
            <div>
                <ul className="navBar">
                    <Link to="/" className="linkText">
                        <li>🏠 Home</li>
                    </Link>
                    <Link to="/reach-us" className="linkText">
                        <li>📱 Reach Us</li>
                    </Link>
                    <Link to="/" className="linkText">
                        <li>📝 Feedback</li>
                    </Link>
                </ul>
            </div>
        </div>
    )
}

export default Header;