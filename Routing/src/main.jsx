import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider ,createBrowserRouter, createRoutesFromElements,Route} from 'react-router-dom'
import Layout from './Layout.jsx'
import About from './About.jsx'
import Home from './Home.jsx'
import User from '../User.jsx'
import Github from './Github.jsx'
import { githubInfo } from './Github.jsx'



const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/'  element = {<Layout/>}>
    <Route path='/home' element={<Home/>} />
    <Route path='/about' element={<About/>} />
    <Route path='/user/:userId' element={<User/>} />
    <Route 
    loader={githubInfo}
    path='github' 
    element={<Github/>} />
    </Route>
  )
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
     <RouterProvider router={router}>           {/*  RouterProvider*/}
    <App />
    </RouterProvider>
  </StrictMode>,

)

//1. RouterProvider in main.jsx with router as prop
//2. const router = createBrowserRouter(
  //           createRoutesFromElements( <Route/>) )
//3. <Link to='/'> </Link> : compenent where we want to add route 