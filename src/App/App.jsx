import Button from "../components/ui/Button/Button";

function App() {
  return (
    <div>
      DEMAT BREIZH
      <br />
         <Button title={"benjamin"}
            bgColor="tomato"
            onButtonClick={(param)=>{
            console.log("j'ai ckiqué sur benjamin", param)
         }}
      />

      <Button title="ok" bgColor="aquamarine"
       onButtonClick={(param)=>{
            console.log("j'ai ckiqué sur ok", param)
         }}></Button>

      <Button title="cancel"></Button>

      
    </div>
  );
}

export default App;
