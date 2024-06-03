import Greeting from "./Greeting";
import Button from "./Button";
import Farewell from "./Farewell";

function App() {
  return (
    <>
      <Greeting name="Sun" />
      <Farewell name="Moon" />
      <Button label="press me" onClick={() => {}} isWished />
    </>
  );
}

export default App;
