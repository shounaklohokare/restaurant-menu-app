import { FC, useState } from "react";
import { IoIosArrowDropdown  } from "react-icons/io";
import { Link, useLocation } from "react-router-dom";

const NavDropdown:FC = () => {

    const [open, setOpen] = useState(false);

    const changeState = () => {
        setOpen(!open)
    }

    return <div>
            <ul className="p-[2.08rem] flex flex-col cursor-pointer"><IoIosArrowDropdown color="#f5ba63" size="32" onClick={changeState}/>
                {open && <div className="dropdown" >
                    <NavItem text="Food" path=""  changeState={changeState}/>
                    <NavItem text="Drinks" path="drinks" changeState={changeState}/>
                    <NavItem text="About Us" path="aboutus" changeState={changeState} />
                </div>}
            </ul>

    </div>

}

interface NavItemProps{
    text : string
    path : string
    changeState : () => void
}

const NavItem:FC<NavItemProps> = ({text, path ,changeState}) => {

    const location = useLocation();

    return <li className={`p-[0.08rem] text-[#f5ba63] tracking-widest font-serif`} onClick={changeState}>
        <Link to={path}><span className={`${path === location.pathname.substring(1,) ? 'border-b-[0.1rem] border-[#f5ba63]' : ''}`}>{text}</span></Link>
    </li>

}

export default NavDropdown;