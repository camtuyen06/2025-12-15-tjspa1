import { useState } from "react";
import Button from "../components/ui/Button/Button";

function App() {
 const [counter, setcounter] = useState(0);
  return (
    <div style={{ textAlign: "center" }}>
      valeur de counter :{counter}
      <hr />
      <Button
        onButtonClick={() => {
          setcounter(counter -1);
          console.log(counter);
        }}
      >
        -1
      </Button>
      <Button
        bgColor="skyblue"
        onButtonClick={() => {
          setcounter(counter +1);
          console.log(counter);
        }}
      >
        +1
      </Button>
    </div>
  );
}

export default App;
