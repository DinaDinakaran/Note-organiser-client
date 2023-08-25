import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { validation} from "../Uitils/Validation";
import netWorkCall from "../Uitils/Network";
import "./forget.css"

const Forget :React.FC= () => {
    const navigate = useNavigate()
    const [formvalue,setFormvalue]= useState()
    const handleSubmit =async (e:any)=>{
      e.preventDefault()
      if(!validation({"email":formvalue})){
        return 
      }
      console.log("submitworks good",formvalue);
      let result = await netWorkCall("POST","/user/forgetpassword",{email:formvalue});
      console.log(result)
      if(!result.isOk){
       return alert(result.message);
      }
      alert(result.message);
      navigate("/signin")
  }
    return (
      <div className='container3'>
      <div className="container__alain">
      <div className="wrapp1">
         <div className="heading">Rest You Password</div>
         <form  className="form__container" onSubmit={(e)=>{handleSubmit(e)}}>
             <div className="component">
             <label className="formlable3">Email</label>
             <input type="email" name="email" className="forminput" value={formvalue} onChange={(ele:any)=>setFormvalue(ele.target.value)} />
             </div>
             <button className="submit__btn" type='submit'>Submit</button>
         </form>
      </div>
      </div>
     </div>
    )
  }
export default Forget
