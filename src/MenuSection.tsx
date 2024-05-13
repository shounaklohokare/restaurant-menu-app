import { FC } from "react"
import MenuItem from "./MenuItem";
import { MenuData } from './Food'



const MenuSection:FC<MenuData> = ({ title, items  }) => { 
    
    return  <div className="menu-item-cont">
                <h1 className="menu-item-header">{title}</h1>
                <ul className="ul-cont">
                   {items.map(item => <MenuItem key={item.itemName} itemName={item.itemName} price={item.price}/>)}
                </ul>
            </div>

}

export default MenuSection;