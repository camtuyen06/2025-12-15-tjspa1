import Button from "../components/ui/Button/Button";

function App() {
  return (
    <div>
      DEMAT BREIZH
      <br />
         <Button title={"benjamin"}
            onButtonClick={(param)=>{
            console.log("j'ai ckiqué sur benjamin", param)
         }}
      />

      <Button title="ok"
       onButtonClick={(param)=>{
            console.log("j'ai ckiqué sur ok", param)
         }}></Button>

      <Button title="cancel"></Button>

      
    </div>
  );
}

export default App;
