import React from 'react'
import {RiDeleteBin4Fill} from "react-icons/ri"
import { Prop, deleteNote } from '../Redux/reducer/NotesReducer';
import { useAppdispatch } from './Uitils/Hooks';
import netWorkCall from './Uitils/Network';

interface note {
    note:Prop
}

const Note : React.FC<note> = ({note}:note) => {
 const dispatch = useAppdispatch()
    const handleDelete =async(id:number)=>{
            dispatch(deleteNote(id));
            let localy_stroed :any = localStorage.getItem('user');
            if(localy_stroed){
              let user= JSON.parse(localy_stroed);
              let result = await netWorkCall("POST","/user/deletenote",{email:user.email,id});
             // console.log(result)
              if(!result.isOk){
               return alert(result.message)
              }
              alert(result.message)
            }
    }
  return (
    <div className='note'>
      <span>{note.content}</span>
      <div className="note__footer">
            <small>{note.date}</small>
            <RiDeleteBin4Fill className='delete__icon' onClick={()=>{handleDelete(note.id)}}  />
      </div>
    </div>
  )
}

export default Note
