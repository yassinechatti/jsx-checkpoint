import './App.css';
import imageInSrc from "./imageInSrc.jpg"
function App() {
  return (
    <div style={{border:"solid 1px black", maxWidth:"100vw"}}>

 <h1 className="title-red">Your name here</h1>
 <img src={imageInSrc}alt="react"/>
 <img src="/imageInPublic.jpg"alt="node" />

<iframe width="320" height="240" src="https://www.youtube.com/embed/JrlOvPCVp-E" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

</div>  );
}
export default App;
