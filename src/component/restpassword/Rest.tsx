import React, { useState } from 'react';
import "./rest.css"
import { useNavigate, useParams } from 'react-router-dom';
import { validation} from "../Uitils/Validation";
import netWorkCall from "../Uitils/Network";

const Rest :React.FC= () => {
    const navigate = useNavigate()
    let params = useParams()
    const [formvalue,setFormvalue]= useState({
      conformpassword:"",
      password:""
     })
     
     const handleSubmit =async (e:any)=>{
      e.preventDefault()
      if(!validation(formvalue)){
        return 
      }
      if(formvalue.conformpassword === formvalue.password){
        console.log("submitworks good",formvalue);
        let result = await netWorkCall("POST","/user/resetpassword/"+params.token,formvalue);
        console.log(result)
        if(!result.isOk){
         return alert(result.message);
        }
        alert(result.message);
        navigate("/signin");
      }else{
        alert("make sure password and confirm password is same");
      }
   
  
      
  }
    const handlechanges = (ele:any)=>{
        setFormvalue({...formvalue,[ele.target.name]:ele.target.value})
    }
    return (
      <div className='container2'>
       <div className="container__alain">
       <div className="wrapp1">
          <div className="heading">Rest You Password</div>
          <form  className="form__container" onSubmit={(e)=>{handleSubmit(e)}}>
              <div className="component">
              <label className="formlable1">Password </label>
              <input type="type" name='password' className="forminput" value={formvalue.password} onChange={(ele)=>handlechanges(ele)} />
              </div>
              <div className="component">
              <label className="formlable1"> Conform PassWord </label>
              <input type="password" name='conformpassword' className="forminput" value={formvalue.conformpassword} onChange={(ele)=>handlechanges(ele)} />
              </div>
              <button className="submit__btn" type='submit'>Submit</button>
          </form>
       </div>
       </div>
      </div>
    )
  }
  
export default Rest