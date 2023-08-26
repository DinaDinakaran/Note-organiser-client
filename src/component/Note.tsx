import React, { useState } from 'react'
import {RiDeleteBin4Fill} from "react-icons/ri"
import { Prop, deleteNote, updateNote } from '../Redux/reducer/NotesReducer';
import { useAppdispatch } from './Uitils/Hooks';
import netWorkCall from './Uitils/Network';

interface note {
    note:Prop
}

const Note : React.FC<note> = ({note}:note) => {
  const [IsEdit,setIsEdit]=useState(false);
  const[text,setText]=useState(note)
 const dispatch = useAppdispatch();
 let chaaractorlength=200
    const handleDelete =async(id:number)=>{
           
            let localy_stroed :any = localStorage.getItem('user');
            if(localy_stroed){
              dispatch(deleteNote(id));
              let user= JSON.parse(localy_stroed);
              let result = await netWorkCall("POST","/user/deletenote",{email:user.email,id});
             // console.log(result)
              if(!result.isOk){
               return alert(result.message)
              }
             // alert(result.message)
             
            }
    }
    const handlesubmit =async(e:any)=>{
      setIsEdit(false)
   
      let localy_stroed :any = localStorage.getItem('user');
      if(localy_stroed){
        dispatch(updateNote(text));
        let user= JSON.parse(localy_stroed);
        let result = await netWorkCall("POST","/user/updatenote",{email:user.email,data:text});
       // console.log(result)
        if(!result.isOk){
         return alert(result.message)
        }
       // alert(result.message)
       
      }
       console.log(text)
    }
    const handlechanges = (ele:any)=>{
      setText({...text,[ele.target.name]:ele.target.value})
  }
  return (
    <div className='note'>
     { IsEdit?  <textarea className='text-area' onClick={()=>{setIsEdit(true)}} value={text.content} name="content" onChange={(e:any)=>{handlechanges(e)}} >{text.content}</textarea> :  <span onClick={()=>{setIsEdit((pre)=>!pre)}} >{note.content}</span>

     }
     {
      IsEdit ? 
      
      <div className="note__footer">
      <small>{chaaractorlength - text.content.length} Remaining</small>
      <button onClick={handlesubmit} className='btn'>Save</button>

    </div> : <div className="note__footer">
            <small>{note.date}</small>
            <RiDeleteBin4Fill className='delete__icon' onClick={()=>{handleDelete(note.id)}}  />
      </div>
}
    </div>

  )
}

export default Note
