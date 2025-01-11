import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Upload from './componenets/Upload.jsx'
import Login from './pages/Login.jsx'
import Signup from './pages/Signup.jsx'
import { createBrowserRouter, createRoutesFromElements, RouterProvider,Route, Navigate } from 'react-router-dom'
import Logout from './pages/Logout.jsx'
import ProtectedRoutes from './componenets/ProtectedRoutes.jsx'
import Loading from './componenets/Loading.jsx'

const isauth=true;
const router=createBrowserRouter(
  createRoutesFromElements(
  <>
  <Route element={<ProtectedRoutes/>}>
  <Route path='/' element={<App/>}></Route>  
  <Route path='/upload' element={<Upload/>}></Route>  
  <Route path='/logout' element={<Logout/>}></Route>  
  </Route>
  <Route path='/login' element={!isauth?<Login/>:<Navigate to={'/'}/>}></Route>  
  <Route path='/signup' element={!isauth?<Signup/>:<Navigate to={'/'}/>}></Route>  
  </>
  )
)


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
 <RouterProvider router={router}/>
  </React.StrictMode>,
)
