
import { Bounce, toast } from "react-toastify";
const toastOptions :any = {
    position: "top-center",
    autoClose: 4000,
    pauseOnHover: true,
    theme: "light",
    TransitionEvent: Bounce,
  };
  
  
  export const Notification = (type?:number, msg?:string) => {
    if (type === 1) {
      toast.success(msg, toastOptions);
    } else if (type === 0) {
      toast.error(msg, toastOptions);
    }
    
  };