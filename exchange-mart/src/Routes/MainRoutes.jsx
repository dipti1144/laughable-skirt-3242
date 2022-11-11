
import React from 'react'
import {BrowserRouter as Router , Route, Routes} from 'react-router-dom'
// import Home from '../Pages/Home'
import Login from '../Pages/Login'




function MainRoutes() {
    return (
       <Router>
         
           <Route path="/login">
               <Login/>
           </Route>
             
       </Router>
    )
}

export default MainRoutes
