import Card, { CardBody } from "./components/Card";
import LIst from "./components/LIst";
import Button from "./components/Button";
import { useState } from "react";

function App() {
  const [data, setData] = useState([
    "Pepe",
    "Carlos",
    "Rafael",
    "Juan",
    "Pedro",
  ]);

  /*
  const [isLoading, setIsLoading] = useState(false);
  const handleClick = () => setIsLoading(!isLoading);

  const list = ["Pepe", "Carlos", "Rafael", "Juan", "Pedro"];
  const handleSelect = (elemento: string) => {
    console.log("Elemento seleccionado:", elemento);
  };

  return (
    <Card>
      <CardBody
        title="Holamundo"
        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
      />
      {list.length !== 0 && <LIst data={list} onSelect={handleSelect} />}
      <Button isLoading={isLoading} onClick={handleClick}>
        Hola Mundo
      </Button>
    </Card>
  );
  */

  const addMInion = () => setData([...data, "Carlos Arias"]);
  const removeMInion = () => setData(data.slice(0, -1));

  return (
    <Card>
      <Button onClick={addMInion}>Agregar</Button>
      <Button onClick={removeMInion}>Eliminar</Button>
      <LIst data={data}></LIst>
      Hola Mundo
    </Card>
  );
}
export default App;
