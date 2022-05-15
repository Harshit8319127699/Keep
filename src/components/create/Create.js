import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import "../create/Create.css"
function Create(props) {
  const navigate=useNavigate()
  const { notes, setnotes, noteslist, setnoteslist, trash, settrash } = { ...props.name }
  const [input1, setinput1] = useState("")
  const [input2, setinput2] = useState("")
  const inp1handle = (e) => {
    setinput1(e.target.value)
  }
  const inp2handle = (e) => {
    setinput2(e.target.value)
  }
  const clickhandler = () => {
    var a = {
      title: input1,
      notes: input2
    }
    let arr = [...noteslist]
    arr.push(a)
    setnoteslist(arr)
    setinput1("")
    setinput2("")
  }
  const update=(e)=>{
let arr=[...noteslist]
var a={
  title:arr[e.target.id].title,
  notes:arr[e.target.id].notes
}
setnotes({
  ...notes,
  a
})
navigate(`/update/${arr[e.target.id].title}/${arr[e.target.id].notes}/${e.target.id}`)
  }




  let hold=noteslist.map((elem,id)=>{
    return <div className="notes" key={id} id={id}>
    <h5>Title:{elem.title}</h5>
    <p>notes :{elem.notes}</p>
    <button onClick={update} id={id}>update</button>
  </div>
  })

  return (
    <>
      <div className="createcontainer">
        <div className="inputholder">
          <div className="inp11">
            <input type="text" placeholder='Title'
              onChange={inp1handle}
              value={input1}
            />
          </div>
          <div className="inp22">
            <input type="text" placeholder='Notes'
              onChange={inp2handle}
              value={input2}


            />
            <button className='btn'
              onClick={clickhandler}
            >Save</button>
          </div>
        </div>
        <div className="notesholder">
          {hold}
        </div>
        



      </div>

    </>
  )
}

export default Create
