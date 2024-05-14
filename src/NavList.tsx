import { Link } from "react-router-dom";

const NavList = () => {

    return <div className="nav-items">
                <h3><Link to="">Food</Link></h3>
                <h3><Link to="drinks">Drinks</Link></h3>
                <h3><Link to="aboutus">About Us</Link></h3>
            </div>

}

export default NavList;