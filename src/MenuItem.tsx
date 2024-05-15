import { FC } from "react"

interface MenuItemProps {
    itemName : string
    price : string
}

const MenuItem:FC<MenuItemProps> = ({ itemName, price }) => {

    return <li>
                <div className="menu-cont">
                    <div>{itemName}</div>
                    <div>{price}</div>
                </div>
           </li>

}

export default MenuItem;