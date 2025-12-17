
import { useNavigate, useParams } from "react-router"
import MemeForm from "../../components/functional/MemeForm/MemeForm.store"
import FlexV1Grow from "../../components/layout/FlexV1Grow/FlexV1Grow"
import MemeSvgViewer from "../../components/ui/MemeSvgViewer/MemeSvgViewer.store"
import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { clear, update } from "../../store/current"
import type { AppDispatch, RootState } from "../../store/store"

const Editor:React.FC = () => {
  const param = useParams(); 
  const memes= useSelector((s:RootState)=> s.ressources.memes);
  const d=useDispatch<AppDispatch>();
  const nav=useNavigate();

  //observation un evt => recupere id
  useEffect(() => {
   //console.log(param);  //recupere id renvoyé dans param
   if(param.id === undefined){
      d(clear()); 
      return;
   }
   else{
      const paramId= Number(param.id);
      if(Number.isNaN(paramId)){
        nav('/');  //remetre url sans param
        return;
      }
      const founMeme= memes.find((item) => item.id === paramId);
      if(founMeme === undefined){
        nav("/");
        return;
      }
      d(update(founMeme));
   }


  }, [param.id,nav,d,memes])
  
  return (
  <FlexV1Grow>
    <MemeSvgViewer basePath="" />
    <MemeForm />
    </FlexV1Grow>
  )
}

export default Editor;