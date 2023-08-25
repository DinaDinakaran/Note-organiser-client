import React from 'react'
import { useNavigate } from 'react-router-dom'
import {AiOutlineLogout} from "react-icons/ai"

const Headr:React.FC<any> = ({darkMode}) => {
  const navigate = useNavigate();
  const handleLogout =()=>{
    // eslint-disable-next-line no-restricted-globals
    if(confirm("Are You want Logout !")){
      // localStorage.removeItem("user")
      // localStorage.removeItem("token")
      // localStorage.removeItem("isLogin")
      localStorage.clear();
      navigate("/signin")
    }
  }
  return (
    <div className='header'>
      <h1>Notes</h1>
      <div className='top__importent-btn'>
      <button className='btn' onClick={()=>{darkMode((pre:boolean)=>!pre)}}>Dark Mode</button>
      <AiOutlineLogout className='logout-icon'  onClick={handleLogout}/>
      </div>
    </div>
  )
}

export default Headr
