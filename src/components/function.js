import { backs } from "./back";
import { cards } from "./cards";

function kevertLista(){
    let jatekElemLista=[...cards,...cards]
    for (let i = jatekElemLista.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [jatekElemLista[i], jatekElemLista[j]] = [jatekElemLista[j], jatekElemLista[i]];
      }
    
      return jatekElemLista;
    
}
 const kepLista=kevertLista()


 function nyertE(id1, id2) {
    console.log("id1:", id1, "id2:", id2);
    if (id1 === id2) {
        console.log("nyert");
        return true;
    }
    return false;
}


 function visszaFordit(id1, id2, lista, index, index2){
   
    if(nyertE(id1, id2)==false){
        lista[index] = backs[0]
        lista[index2] = backs[0]


    }
    return [...lista]
 }

 export {kepLista, visszaFordit}

