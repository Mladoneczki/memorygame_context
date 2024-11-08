import Kep from "./Kep";

export default function Kepek(props) {
    return (
      <>
        {props.lista.map((kep, i) => {
          return <Kep kep={kep} key={i} index={i}/>;
        })}
      </>
    );
  }
  