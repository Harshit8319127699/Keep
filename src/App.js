import React, { useState } from 'react'
import "./App.css"
import { Routes,Route } from 'react-router-dom'
import Create from './components/create/Create'
import Delete from './components/delete/Delete'
import Navbar from './components/Navbar/Navbar'
import Sidenav from './components/SideNav/Sidenav'
import Trash from './components/trash/Trash'
import Update from './components/update/Update'
function App() {
  const [notes, setnotes] = useState({
    title:"",
    notes:''
  })
  const [noteslist, setnoteslist] = useState([])
  const [trash, settrash] = useState([])
  
  return (
  <>
  <div className="container">
<Navbar></Navbar>
<div className="holder">
  <Sidenav/>
  <div className="maincontainer">
<Routes>
<Route path='/' element={<Create name={{notes,setnotes,noteslist,setnoteslist,trash,settrash}} />}></Route>
<Route path='/delete' element={<Delete name={{notes,setnotes,noteslist,setnoteslist,trash,settrash}}/>}></Route>
<Route path='/update' element={<Update name={{notes,setnotes,noteslist,setnoteslist,trash,settrash}}/>}></Route>
<Route path='/trash' element={<Trash name={{notes,setnotes,noteslist,setnoteslist,trash,settrash}}/>}></Route>


</Routes>
  </div>
</div>

  </div>
  </>
  )
}

export default App