import FlexV1Grow from "../components/layout/FlexV1Grow/FlexV1Grow";
import Navbar from "../components/ui/Navbar/Navbar";
import MemeForm from "../components/functional/MemeForm/MemeForm";
import Footer from "../components/ui/Footer/Footer";
import Header from "../components/ui/Header/Header";
import FlexH3Grow from "../components/layout/FlexH3Grow/FlexH3Grow";
import { emptyMeme, MemeSVGViewer, type ImageInterface } from "orsys-tjs-meme";
import { useEffect, useState } from "react";
import { REST_API_RESSOUCES, REST_API_URL } from "../config/constantes";
type TImages=Array<ImageInterface>


const App: React.FC = () => {
  const [images,  setImages] = useState<TImages>([])
  useEffect(() => {
      fetch(`${REST_API_URL}${REST_API_RESSOUCES.images}`).then(r=>r.json()).then(imgs=>setImages(imgs))
  },[])

  return (
    <>
    <div>images:{JSON.stringify(images)}</div>
    <div className="App">
      <FlexH3Grow>
        <Header />
        <Navbar />
        <FlexV1Grow>
          <MemeSVGViewer meme={emptyMeme} image={undefined} basePath=""/>
          <MemeForm />
        </FlexV1Grow>
        <Footer />
      </FlexH3Grow>
    </div>
    </>
  );
};

export default App;
