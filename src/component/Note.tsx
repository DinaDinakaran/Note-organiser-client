import React from 'react'
import {RiDeleteBin4Fill} from "react-icons/ri"
import { Prop, deleteNote } from '../Redux/reducer/NotesReducer';
import { useAppdispatch } from './Uitils/Hooks';

interface note {
    note:Prop
}

const Note : React.FC<note> = ({note}:note) => {
 const dispatch = useAppdispatch()
    const handleDelete =(id:number)=>{
            dispatch(deleteNote(id))
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
