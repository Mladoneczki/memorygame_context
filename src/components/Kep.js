import { useContext } from "react"
import { ForditContext } from "../context/forditContext"

export default function Kep(props) {
    const {katt}=useContext(ForditContext)
    return <img onClick={()=>{katt(props.index)}} id={props.index} src={props.kep.src} />
    
};
