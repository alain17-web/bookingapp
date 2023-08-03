import { useContext } from "react";
import "./navbar.css"
import { Link } from "react-router-dom"
import { AuthContext } from "../../context/AuthContext";

const Navbar = () => {

    const { user, dispatch } = useContext(AuthContext)

    const handleLogout = () => {
        dispatch({type: "LOGOUT"})
    }

    return (
        <div className="navbar">
            <div className="navContainer">
                <Link to="/" style={{ color: "inherit", textDecoration: "none" }}>
                    <span className="logo">Booking.com</span>
                </Link>

                {
                    user ? (
                        <>
                            <p>{user.username}</p>
                            <button onClick={handleLogout} className="logout">Logout</button>
                        </>
                    ) : (
                        <div className="navItems">
                            <button className="navButton">Register</button>
                            <button className="navButton">Login</button>
                        </div>
                    )
                }


            </div>
        </div>
    );
}

export default Navbar;