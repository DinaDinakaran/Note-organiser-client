import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { validation} from "../Uitils/Validation";
import netWorkCall from "../Uitils/Network";
import "./signin.css"
const SignIn :React.FC = () => {
    const navigate =useNavigate()
    const [formvalue,setFormvalue]= useState({
      email:"",
      password:""
     })
     useEffect(()=>{
      if(localStorage.getItem("isLogin") =="true"){
        navigate("/")
      }
    },[])
     const handleSubmit =async (e:any)=>{
      e.preventDefault()
      if(!validation(formvalue)){
        return 
      }
  
      console.log("submitworks good",formvalue);
      let result = await netWorkCall("POST","/user/signin",formvalue);
      console.log(result)
      if(!result.isOk){
       return alert(result.message);
      }
     let jsonfile = JSON.stringify(result.details);
       localStorage.setItem("user",jsonfile);
       localStorage.setItem("isLogin","true");
       localStorage.setItem("token",result.token);
       navigate("/")
  }
  
    const handlechanges = (ele:any)=>{
        setFormvalue({...formvalue,[ele.target.name]:ele.target.value})
    }
    return (
      <div className='container1'>
       <div className="container__alain">
       <div className="wrapp1">
          <div className="heading1">SignIn</div>
          <form  className="form__container" onSubmit={(e)=>{handleSubmit(e)}}>
              <div className="component">
              <label className="formlable">Email </label>
              <input type="email" name="email" className="forminput" value={formvalue.email} onChange={(ele)=>handlechanges(ele)} />
              </div>
              <div className="component">
              <label className="formlable">PassWord </label>
              <input type="password" name='password' className="forminput" value={formvalue.password} onChange={(ele)=>handlechanges(ele)} />
              </div>
              <button className="submit__btn" type='submit'>Submit</button>
              <Link to="/forgetpassword" style={{color:"white"}}>Forget Your Password</Link>
              <Link to="/signup" style={{color:"white"}}>Create New Accout !</Link>
          </form>
       </div>
       </div>
      </div>
    )
  }
  
export default  SignIn
