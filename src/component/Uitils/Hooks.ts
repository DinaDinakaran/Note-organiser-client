import { useSelector ,useDispatch,TypedUseSelectorHook} from "react-redux";
import {Appdispatc,Rootstate} from "../../Redux/store"

export const useAppSelector : TypedUseSelectorHook<Rootstate> = useSelector
export const useAppdispatch =()=>useDispatch<Appdispatc>()