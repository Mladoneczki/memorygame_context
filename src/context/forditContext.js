import { createContext, useState, useEffect } from "react";
import { backs } from "../components/back";
import Model from "../model/Model";

export const ForditContext = createContext("");

export const ForditProvider = ({ children }) => {
  const model = new Model();
  const [allapotLista, setLista] = useState(backs);
  const [lepes, setLepes] = useState(1);
  const [elozoIndex, setElozoIndex] = useState(-1);
  const [id2, setId] = useState(-2);
  const [kepL, setKepL] = useState([]);
  const[kattinthatoE, setKattinthato]=useState(true)

  
  useEffect(() => {
    setKepL(model.getKepLista());
  }, []); 

  function katt(index) {
    if (!kattinthatoE){
      return
    }
    let sv = lepes;
    sv++;
    setLepes(sv);

    let id1 = 0;
    

    let segedLista = [...allapotLista];
    segedLista[index] = kepL[index];
    setLista(segedLista);

    if (lepes % 2 === 0) {
      id1 = kepL[index].id;
      console.log(kepL[index].id);
      setKattinthato(false)

      setTimeout(() => {
        setLista(model.visszaFordit(id1, id2, segedLista, index, elozoIndex));
        setKattinthato(true)
      }, 1000);
    } else {
      setId(kepL[index].id);
      console.log(kepL[index].id);
      setElozoIndex(index);
    }
  }

  return (
    <ForditContext.Provider value={{ allapotLista, katt }}>
      {children}
    </ForditContext.Provider>
  );
};
