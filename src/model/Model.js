import { useRef } from "react";
import { backs } from "../components/back";
import { cards } from "../components/cards";

class Model {
  constructor() {
    this.kepLista = this.kevertLista();
  }

  kevertLista() {
    let jatekElemLista = [...cards, ...cards];
    for (let i = jatekElemLista.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [jatekElemLista[i], jatekElemLista[j]] = [
        jatekElemLista[j],
        jatekElemLista[i],
      ];
    }
    return jatekElemLista;
  }

  nyertE(id1, id2, index, index2) {
    console.log("id1:", id1, "id2:", id2);
    if (id1 === id2) {
    document.getElementById(index).className="hasznalt"
    document.getElementById(index2).className="hasznalt"
      console.log("nyert");
      return true;
    }
    return false;
  }

  visszaFordit(id1, id2, lista, index, index2) {
    if (!this.nyertE(id1, id2, index, index2)) {
      lista[index] = backs[0];
      lista[index2] = backs[0];
    }
    return [...lista];
  }
  getKepLista() {
    const lista = [...this.kepLista];
    return lista;
  }
}

export default Model;
