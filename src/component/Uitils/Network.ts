import Axios from "./Axios"



 const netWorkCall  = async (method:any,endpoint:any,datas:any)=>{
        if(method=="GET"){
            let {data}= await Axios.get(endpoint);
            if(data){
                console.log(data)
                return data
            }
        }else if(method=="POST"){
            let {data}= (await Axios.post(endpoint,datas));
            if(data){
                console.log(data)
                return data
            }
        }else if(method=="PUT"){
            let {data}= await Axios.put(endpoint,datas);
            if(data){
                console.log(data)
                return data
            }
        }else if(method=="DELETE"){
            let {data}= await Axios.delete(endpoint,datas);
            if(data){
                console.log(data)
                return data
            }
        }
}
export default netWorkCall;