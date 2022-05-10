import React from 'react'
import { useNavigate } from 'react-router-dom'
import "../delete/Delete.css"
function Delete(props) {
const navigate=useNavigate()

  const {  noteslist, setnoteslist, trash, settrash } = { ...props.name }
  const deletenotes=(e)=>{
let index=e.target.id
let arr2=[...noteslist]
arr2.splice(index,1)
setnoteslist(arr2)
navigate("/")
  }
  
  
  let hold2=noteslist.map((elem,id)=>{
    return <div className="notes2"  onClick={deletenotes} key={id} id={id}>
    <h5>Title:{elem.title}</h5>
    <p>notes :{elem.notes}</p>
  </div>
  })
 
  return (
    <>
    <div className='deletecontainer'>
      <div className='heading1'>
        <h1>Delete Your Notes</h1>
      </div>
<div className="notesholder2">
{hold2}
</div>
    </div>
    
    </>
  )
}

export default Delete
