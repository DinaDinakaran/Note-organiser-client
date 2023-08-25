import React from 'react'
import Note from './Note'
import { useSelector,useDispatch } from 'react-redux'
import { AppState, Prop } from '../Redux/reducer/NotesReducer';
import { useAppSelector,useAppdispatch } from './Uitils/Hooks';
import Addnote from './Addnote';

const NoteList :React.FC<any> = ({datas}:any) => {
  console.log(datas)
  return (
    <div className='note__list'>
      {
        datas.map((note:any,index:number)=> <Note key={index} note={note}/>)
      }
      <Addnote/>
    </div>
  )
}

export default NoteList
