import React from 'react'

import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import AppLayout from './Layout/AppLayout'
import ErrorPage from './Components/ErrorPage'
import Home from './Pages/Home'
import Privacy from './Pages/Privacy'
import Terms from './Pages/Terms'


const App = () => {

  const router=createBrowserRouter([
    {
      path:"/",
      element:<AppLayout/>,
      errorElement:<ErrorPage/>,
      children:[
        {
          path:"/",
          element:<Home/>
        }
      ]
    }
    ,
    {
      path:"/privacy",
      element:<Privacy/>
    }
    ,
    {
      path:"/terms",
      element:<Terms/>
    }
  ])
  
  return (
    <div>
      <RouterProvider router={router}></RouterProvider>
      
    </div>
  )
}

export default App