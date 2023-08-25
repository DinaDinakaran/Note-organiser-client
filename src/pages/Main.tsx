import React, { useEffect, useState } from 'react'
import NoteList from '../component/NoteList'
import Search from '../component/Search'
import { useAppSelector } from '../component/Uitils/Hooks'
import Headr from '../component/Headr'
import { Navigate, useNavigate } from 'react-router-dom'

const Main : React.FC = () => {
  const navigate = useNavigate()
  const datas:any = useAppSelector(state=>state.Note);
  const[searchtext,setSearchText]=useState("");
  const[darkMode,setDarkMode]=useState(false);
   // console.log(datas.notes)
   const handlesearch =(str:string)=>{
      setSearchText(str)
   }
   useEffect(()=>{
    console.log(localStorage.getItem("isLogin"),localStorage.getItem("isLogin") !="true")
     if(localStorage.getItem("isLogin") !="true"){
        navigate("/signin")
     }
   },[])
  return (
    <div className={`${darkMode && "dark-mode"}`}>
 <div className='container555'>
      <Headr darkMode={setDarkMode} />
    <Search handlesearch={handlesearch} searchtext={searchtext} />
     <NoteList datas={datas.notes.filter((note:any)=>note.content.toLowerCase().includes(searchtext))}/>
    </div>
    </div>
   
  )
}

export default Main
