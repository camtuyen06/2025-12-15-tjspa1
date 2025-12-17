import { MemeSVGViewer } from 'orsys-tjs-meme';
import React from 'react'
import { useSelector } from 'react-redux';
import type { StoreState } from '../../../store/store';


interface IMemeSvgViewerProps{
  basePath?:"/"| "";

}
const MemeSvgViewer:React.FC<IMemeSvgViewerProps> = (props) => {
 const images = useSelector((s:StoreState) => s.ressources.images);
 const current = useSelector((s:StoreState) => s.current.meme);

  return <MemeSVGViewer {...props} image={images.find(item=>item.id===current.imageId)} meme={current}/>
}

export default MemeSvgViewer;