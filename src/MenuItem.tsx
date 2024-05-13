import { FC } from "react"

interface MenuItemProps {
    itemName : string
    price : string
}

const MenuItem:FC<MenuItemProps> = ({ itemName, price }) => {


    return <li><div className="menu-cont"><div className="item-name">{itemName}</div>
    <div className="price-tag">{price}</div></div></li>

}

export default MenuItem;