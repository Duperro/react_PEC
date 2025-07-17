import Card, { CardBody } from "./components/Card";
import LIst from "./components/LIst";

function App() {
  const list = ["Pepé", "Carlos", "Rafael", "Juan", "Pedro"];
  const handleSelect = (elemento: string) => {
    console.log("Elemento seleccionado:", elemento);
  };
  return (
    <Card>
      <CardBody
        title="Holamundo"
        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
      />
      <LIst data={list} onSelect={handleSelect} />
    </Card>
  );
}

export default App;
