import { nanoid } from '@reduxjs/toolkit';
import React, { useState } from 'react'
import { text } from 'stream/consumers';
import { useAppdispatch } from './Uitils/Hooks';
import { addNote } from '../Redux/reducer/NotesReducer';
import netWorkCall from './Uitils/Network';
import { Notification } from './Uitils/Tostify';



const Addnote :React.FC = () => {
    const dispatch = useAppdispatch()
    const [text,setText]= useState("");
    let chaaractorlength :number = 200
    const handlesubmit:any = async(e:any)=>{
        if(text.trim().length>0 ){
            let date = new Date();
        let note :any ={
            id:nanoid(),
            date:date.toLocaleDateString(),
            content:text
        } 

        dispatch(addNote(note));

        let localy_stroed :any = localStorage.getItem('user');
        if(localy_stroed){
          let user= JSON.parse(localy_stroed);
          let result = await netWorkCall("POST","/user/addnote",{email:user.email,data:note});
         // console.log(result)
          if(!result.isOk){
           return Notification(result.isOk,result.message)
          }
          console.log("this is working")
          setText("")
          Notification(result.isOk,result.message)
          
          
        }
       
        
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
