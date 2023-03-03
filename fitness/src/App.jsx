import { createContext, useState } from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import './App.css'
import Diet from './comps/Diet'
import Fitness from './comps/Fitness'
import Food from './comps/Food'
import Home from './comps/Home'
import Profile from './comps/Profile'
import NavBar from './comps/NavBar';
import ContactUs from './comps/ContactUs'
export const AppContext=createContext()
function App() {
  let [user,setuser]=useState(null);
  // let [user,setuser]=useState({name:'Charan'});
  return (
    <AppContext.Provider value={{user,setuser}}>
    <BrowserRouter>
    <NavBar/>
       <Routes>
      <Route path='/' element={<Home/>}></Route>
       <Route path='/food' element={<Food/>}></Route>
      <Route path='/fitness' element={<Fitness/>}></Route> 
     <Route path='/diet' element={<Diet/>}></Route>
     <Route path='/profile' element={<Profile/>}></Route>
     <Route path='/contact' element={<ContactUs/>}></Route>
     <Route path='*' element={<h1>Could'nt find ur page</h1>}></Route>
    </Routes>
    </BrowserRouter>
     </AppContext.Provider>
  )
}

export default App
