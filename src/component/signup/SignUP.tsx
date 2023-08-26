import React, { useEffect, useState } from 'react'
import { useNavigate ,Link} from 'react-router-dom';
import { validation} from "../Uitils/Validation";
import netWorkCall from "../Uitils/Network";
import "./signup.css"
import { Notification } from '../Uitils/Tostify';

const SignUP :React.FC = () => {
    const navigate = useNavigate();
    const [formvalue,setFormvalue]= useState<any>({
     name:"",
     email:"",
     number:null,
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
      if(formvalue.password.length>5){
        console.log("submitworks good",formvalue);
        let result = await netWorkCall("POST","/user/create",formvalue);
        console.log(result)
        if(!result.isOk){
         return  Notification(result.isOk,result.message)
        }
        Notification(result.isOk,result.message)
       navigate("/signin") 
      }else{
        Notification(0,"password must be more then 5")
      }
     
   }
   const handlechanges = (ele:any)=>{
       setFormvalue({...formvalue,[ele.target.name]:ele.target.value})
   }
 return (
   <div className='container'>
    <div className="container__alain">
    <div className="wrapp">
       <div className="heading">SignUp</div>
       <form  className="form__container" onSubmit={(e)=>{handleSubmit(e)}}>
           <div className="component">
           <label className="formlable">Name </label>
           <input type="text" name="name" className="forminput" value={formvalue.name} onChange={(ele:any)=>handlechanges(ele)} />
           </div>
           <div className="component">
           <label className="formlable" >Email </label>
           <input type="email" name="email" className="forminput" value={formvalue.email} onChange={(ele:any)=>handlechanges(ele)} />
           </div>
           <div className="component">
           <label className="formlable">Phone Number </label>
           <input type="number" name="number" className="forminput" value={formvalue.number} onChange={(ele:any)=>handlechanges(ele)} />
           </div>
           <div className="component">
           <label className="formlable">PassWord </label>
           <input type="password" name='password' className="forminput" value={formvalue.password} onChange={(ele:any)=>handlechanges(ele)} />
           </div>
           <button className="submit__btn" type='submit'>Submit</button>
           <Link to="/signin" style={{color:"white"}}>Allready you have Account !</Link>
       </form>
    </div>
    </div>
   </div>
 )
}

export default SignUP
