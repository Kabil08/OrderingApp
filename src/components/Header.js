import { Link } from "react-router-dom";
import useOnlineStatus from "../customHooks/useOnlineStatus";
import cn from "classnames";

const Header = () => {
    const onlineStatus = useOnlineStatus();

    return (
        <div className="flex justify-between items-center bg-custom-white">
            <div>
                <img 
                    src="https://img.freepik.com/premium-vector/restaurant-logo-design-template_57516-175.jpg?w=996"
                    alt="img loading"
                    className="imageTag"
                />
            </div>
            <div>
                <ul className="flex p-2.5">
                    <Link to="/">
                        <li className="li-item">🏠 Home</li>
                    </Link>
                    <Link to="/reach-us">
                        <li className="li-item">📱 Reach Us</li>
                    </Link>
                    <Link to="/">
                        <li className="li-item">📝 Feedback</li>
                    </Link>
                    <li className={cn("li-item", "onlineStatus")}>Online Status: {onlineStatus} {onlineStatus ? "🟢" : "🔴"} </li>
                </ul>
            </div>
        </div>
    )
}

export default Header;