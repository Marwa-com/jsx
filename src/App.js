import myImage from "./techInt.jpg";
import myVideo from "./significantTech.mp4";
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <div style={{borderStyle:'solid' ,borderSize:1 ,borderColor:'black' ,maxWidth:'100vw'}}>

<h1 className='title red'> MARWA</h1> <br/>

<img style={{width:350 ,height:250 }} src={myImage} alt ='techInt' /> <br/>

<img style={{width:350 ,height:250 }} src="/technologieRFID.jpg" alt='technologieRFID'/> 

</div>

<video style={{width:320 ,height:240 }} controls autostart autoPlay src={myVideo} type="video/mp4" />
      </header>
    </div>
  );
}

export default App;
