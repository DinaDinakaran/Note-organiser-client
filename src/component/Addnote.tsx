import { nanoid } from '@reduxjs/toolkit';
import React, { useState } from 'react'
import { text } from 'stream/consumers';
import { useAppdispatch } from './Uitils/Hooks';
import { addNote } from '../Redux/reducer/NotesReducer';



const Addnote :React.FC = () => {
    const dispatch = useAppdispatch()
    const [text,setText]= useState("");
    let chaaractorlength :number = 200
    const handlesubmit:any = (e:any)=>{
        if(text.trim().length>0 ){
            let date = new Date();
        let note :any ={
            id:nanoid(),
            date:date.toLocaleDateString(),
            content:text
        } 
        dispatch(addNote(note));
        setText("")
        }
    }
    const handlechanges =(e:any)=>{
          if(chaaractorlength>e.target.value.length){
            setText(e.target.value)
          }
    }
  return (
    <div className='note new'>
      <textarea rows={8} cols={10} value={text} onChange={(e:any)=>{handlechanges(e)}} placeholder='Add a New Note'></textarea>
      <div className="note__footer">
        <small>{chaaractorlength - text.length} Remaining</small>
        <button onClick={handlesubmit} className='btn'>Save</button>
      </div>
    </div>
  )
}

export default Addnote