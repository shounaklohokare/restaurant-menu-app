import { FC, useEffect, useState } from "react";
import DrinksBanner from "./DrinksBanner";
import menu_data from './menu_data.json'; 
import { MenuData } from "./Food";
import MenuSection from "./MenuSection";

const Drinks:FC = () => {

    const [drinksData, setDrinksData] = useState<MenuData[]>([])

    useEffect(() => {

        setDrinksData(menu_data.drinks);
      }, []);

    return <div className="main-div">
            <DrinksBanner/>

            <div className="menu-items-cont no-top-margin">
                    {
                        drinksData.map(menuSection => <MenuSection key={menuSection.title} title={menuSection.title} items={menuSection.items} />)
                    }
                </div>
            
    </div>

}

export default Drinks;