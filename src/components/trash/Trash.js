import React from 'react'
import { useNavigate } from 'react-router-dom'
import "../trash/Trash.css"


function Trash(props) {
const navigate=useNavigate()

  const { trash, settrash } = { ...props.name }
const deletenotes=(e)=>{
const index=e.target.id
const arr=[...trash]
arr.splice(index,1)
settrash(arr)
}
if(trash.length>0){

}
const hold3=trash.map((elem,id)=>{
  return <div className="notes2"  onClick={deletenotes} key={id} id={id}>
  <h5>Title:{elem.title}</h5>
  <p>notes :{elem.notes}</p>
</div>
})
  
  return (
    <>
<div className="trashcontainer">
  <div className='heading2'>
  <h1>Your deleted notes display here</h1>
  </div>
  <div className="notesholder3">
{hold3}
  </div>
</div>


    </>
  )
}

export default Trash
