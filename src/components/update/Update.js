import React,{useState}from 'react'
import { useParams,useNavigate } from 'react-router-dom';
import "../update/Update.css"
function Update(props) {
  const { notes, setnotes, noteslist, setnoteslist } = { ...props.name }
const [inp1, setinp1] = useState("")
const [inp2,setinp2] = useState("")
const{title,note,ind}=useParams()
const navigate=useNavigate()
const inphandle1=(e)=>{
setinp1(e.target.value)
}
const inphandle2=(e)=>{
  setinp2(e.target.value)

}
const updatenotes=()=>{
const arr4=[...noteslist]
arr4.splice(ind,1)
var a={
  title:inp1,
  notes:inp2
}
arr4.push(a)
setnoteslist(arr4)
navigate('/')

}

  return (
<>
<div className="updatecontainer">
<div className="inputholder2">
<div className="inp21">
  <input type="text" placeholder='title'
 defaultValue={title}
 onChange={inphandle1}
  />
</div>
<div className="inp23">
  <input type="text" placeholder='note'
  defaultValue={note}
  onChange={inphandle2}

  />
</div>
<button className='btn2' onClick={updatenotes}>save</button>

</div>



</div>

</>


    )
}

export default Update
