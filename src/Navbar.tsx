import { FC } from "react"
import { Link } from "react-router-dom";

const Navbar:FC = () => { 

    return <div className="navbar">
                <h3 className="name">Barnyard Bistro</h3>
                <div className="nav-items">
                    <h3><Link to="">Food</Link></h3>
                    <h3><Link to="drinks">Drinks</Link></h3>
                    <h3><Link to="aboutus">About Us</Link></h3>
                </div>
            </div> 
}

export default Navbar;