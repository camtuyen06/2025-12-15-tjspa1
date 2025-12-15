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
         >
            benjamin
         </Button>

         <Button title="ok" bgColor="aquamarine"
            onButtonClick={(param)=>{
            console.log("j'ai ckiqué sur ok", param)
         }}
         >
            <div>cancel</div>
         </Button>


         <Button>
            <div>3eme</div>
            <div>button</div>
         </Button>

      
    </div>
  );
}

export default App;
