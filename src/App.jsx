import './App.css';
import Canvas from "./Canvas";
import image from "./picture.jpeg"
import {FirFilter} from "./Filters/FilterFirst";
import {SecFilter} from "./Filters/FilterSecond";


function App() {
  const onBtnClick = ()=>{

      console.log("Click")
  }

  const FirstFilter =(imageData)=>{
    return FirFilter(imageData)
  }

  const SecondFilter =(imageData)=>{
    return SecFilter(imageData)
  }

    return (
    <body>
      <div>
        <Canvas image = {image} processImage={FirstFilter} />
        <Canvas image = {image} processImage={SecondFilter}/>
      </div>
    </body>
  );
}

export default App;