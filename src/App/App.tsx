import { useEffect, useState } from "react";
import Button from "../components/ui/Button/Button";

const App: React.FC<undefined> = () => {
  const [counter, setCounter] = useState(-100);
  useEffect(() => {
    //componentDidMount
    console.log('didMount',counter);
    setCounter(0);
    
    return () => {
      //componentWillUnmount
    };
  }, []);
  useEffect(() => {
    console.log('counter effect modif',counter);
  }, [counter]);


  //useEffect n'est plus utilisé , remplacé par hook
  return (
    <div style={{ textAlign: "center" }}>
      valeur de counter :{counter}
      <hr />
      <Button
        onButtonClick={() => {
          setCounter(counter - 1);
          console.log(counter);
        }}
      >
        -1
      </Button>
      <Button
        bgColor="skyblue"
        onButtonClick={() => {
          setCounter(counter + 1);

          console.log(counter);
        }}
      >
        +1
      </Button>
    </div>
  );
};

export default App;
