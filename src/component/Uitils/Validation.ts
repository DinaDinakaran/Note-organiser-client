
var email = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/;

export const validation = (obj:any)=>{
        if(obj){
            Object.keys(obj).map((key)=>{
                if(!obj[key]){
                    alert(key+" is empty !");
                    return false;
                }else{
                    if(key=="email"){
                        //console.log('emil')
                        if(!obj[key].match(email)){
                            alert(key + "  is empty !");
                            return false;
                        }
                    } 
                }
            })
            return true;
        }else{
            return false;
        }
}