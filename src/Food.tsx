import { FC, useEffect, useState } from "react"
import Banner from "./Banner"
import MenuSection from "./MenuSection"
import menu_data from './menu_data.json'; 

interface MenuItems {
    itemName: string;
    price: string;
}
  
export interface MenuData {
    title: string
    items : MenuItems[]
}

const Food:FC = () => {

    const [foodData, setFoodData] = useState<MenuData[]>([]);

    useEffect(() => {
        
        setFoodData(menu_data.food);
      }, []);

    console.log(foodData)
    return <div className="main-div">
                <Banner/>

                <div className="menu-items-cont no-top-margin">
                    {
                        foodData.map(menuSection => <MenuSection key={menuSection.title} title={menuSection.title} items={menuSection.items} />)
                    }
                </div>
            </div>

}

export default Food;