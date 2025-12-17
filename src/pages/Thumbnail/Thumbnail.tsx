import MemeThumbnail from "../../components/layout/MemeThumbnail/MemeThumbnail"
import { Link } from "react-router";
import type { RootState } from "../../store/store";
import { useSelector } from "react-redux";
import { MemeSVGViewer } from "orsys-tjs-meme";

const Thumbnail:React.FC = () => {
  //const memes=useSelector((s:RootState)=> s.ressources.memes);
  //const images=useSelector(())
  const ressources=useSelector((s:RootState)=>s.ressources);

  return (
   <>
   <MemeThumbnail>
      {
        ressources.memes.map(item=><Link key={item.id} to={"/editor/"+item.id}>
          {item.titre}
          <MemeSVGViewer basePath="" 
          image={ressources.images.find((img)=>img.id===item.imageId)} 
          meme={item}
          />
        </Link>)
      }

   </MemeThumbnail>
   
   </>
  )
}

export default Thumbnail