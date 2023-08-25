import React, { useEffect, useState } from 'react'
import NoteList from '../component/NoteList'
import Search from '../component/Search'
import { useAppSelector, useAppdispatch } from '../component/Uitils/Hooks'
import Headr from '../component/Headr'
import { Navigate, useNavigate } from 'react-router-dom'
import netWorkCall from '../component/Uitils/Network'
import Addnote from '../component/Addnote'
import { addAllNote } from '../Redux/reducer/NotesReducer'

const Main : React.FC = () => {
  const navigate = useNavigate()
  const datas:any = useAppSelector(state=>state.Note);
  const dispatch = useAppdispatch()
  const[searchtext,setSearchText]=useState("");
  const[darkMode,setDarkMode]=useState(false);
   // console.log(datas.notes)
   const handlesearch =(str:string)=>{
      setSearchText(str)
   }
     
   const getalldata = async ()=>{
   
    let localy_stroed :any = localStorage.getItem('user');
    if(localy_stroed){
      let user= JSON.parse(localy_stroed);
      let result:any = await netWorkCall("POST","/user/getallnote",{email:user.email});
      console.log(result);
      if(!result.isOk){
       return alert(result.message);
      }
console.log("its working1")
      dispatch(addAllNote(result.data));
      

     
      
    }
   }

   useEffect(()=>{
    console.log(localStorage.getItem("isLogin"),localStorage.getItem("isLogin") !="true")
     if(localStorage.getItem("isLogin") !="true"){
        navigate("/signin")
     }
     getalldata();
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
