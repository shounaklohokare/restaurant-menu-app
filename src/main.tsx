import React from 'react'
import ReactDOM from 'react-dom/client'
import { Outlet, RouterProvider, createBrowserRouter } from 'react-router-dom';

import './index.css'
import Food from './Food.tsx';
import Navbar from './Navbar.tsx';
import Drinks from './Drinks.tsx';
import AboutUs from './AboutUs.tsx';

const App = () => {

    return <div>
              <Navbar/>
              <Outlet/>
          </div>

}
          
const router = createBrowserRouter([{
    path: "",
    element: <App/>,
    children : [
        {
            path: "",
            element: <Food/>
        },{
          path: "drinks",
          element: <Drinks/>
      },{
        path: "aboutus",
        element: <AboutUs/>
    }
    ],
    // errorElement: <Error/>
  }
])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)


export default App;
