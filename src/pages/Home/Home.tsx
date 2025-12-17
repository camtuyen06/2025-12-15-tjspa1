import { Link } from "react-router"

const Home:React.FC = () => {
  return (
   <div>
    <h1>Bienvenue sur le createur de memes </h1>
    <p>
      dans cette application ...
      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magnam,
    </p>
    <p>selectionner votre action</p>
    <ul>
      <li><Link to="/thumbnail">Thumbnail</Link></li>
       <li><Link to="/editor">New meme</Link></li>
       <li><Link to="/editor/3">editor meme.id =3</Link></li>
    </ul>
   </div>
  )
}

export default Home