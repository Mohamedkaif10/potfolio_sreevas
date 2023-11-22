import './App.css'
import "./HomePage"
import HomePage from './HomePage'
import {createBrowserRouter,RouterProvider} from "react-router-dom"
import Skills from './Skills'
import Projects from './Projects'
import Rootlayout from './Rootlayout'
function App() {
  
const router=createBrowserRouter([
    { path:"/",element:<Rootlayout/>,children:[
      {
        index:true,element:<HomePage/>
      },
      {
        path:"/skills",element:<Skills/>
      },
      {
        path:"/projects",element:<Projects/>
      }
    ]}

])
  return <RouterProvider router={router}/>
}

export default App
