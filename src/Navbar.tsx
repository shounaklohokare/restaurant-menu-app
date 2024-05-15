import { FC } from "react"
import NavList from "./NavList";
import { useMediaQuery } from 'react-responsive';
import NavDropdown from "./NavDropdown";

const Navbar:FC = () => { 

    const isMobile = useMediaQuery({ query: '(max-width: 768px)' });

    return  <div>
                <div className="navbar">
                    <h3 className="name">Barnyard Bistro</h3>
                    { (isMobile) ? <NavDropdown/>: <NavList/>}
                    
                </div> 
            </div>
}

export default Navbar;