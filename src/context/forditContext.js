
import { createContext, useState } from "react";

import {backs} from "../components/back"
import  {kepLista, visszaFordit } from "../components/function";
export const ForditContext = createContext("");
export const ForditProvider = ({ children }) => {
  
  const [allapotLista, setlista]=useState(backs)
  const [lepes, setlepes]=useState(1)
  const [elozoIndex, setElozoIndex]=useState(-1)
  const [id2, setId]=useState(-2)
    const kepL=kepLista
    

    function katt(index){
      let sv=lepes
      sv++
      setlepes(sv)
      
      let id1=0
      
      let segedLista=[...allapotLista]
      segedLista[index]=kepL[index]
      setlista(segedLista)

      if (lepes%2==0){
        id1=kepL[index].id
        console.log(kepL[index].id)
        
        setTimeout(()=>{setlista(visszaFordit(id1, id2, segedLista, index,elozoIndex))},3000)
        
      }
      else{setId(kepL[index].id)
        console.log(kepL[index].id)
        let segedindex=index
        setElozoIndex(segedindex)


      
        
      }

    }
   
  
  return (
    <ForditContext.Provider
      value={{allapotLista, katt}}
    >
      {children}
    </ForditContext.Provider>
  );
};
