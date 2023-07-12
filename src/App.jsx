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
        <li><Canvas image = {image} processImage={FirstFilter} /><h2>Filter 1</h2></li>
        <li><Canvas image = {image} processImage={SecondFilter}/><h2>Filter 2</h2></li>
      </div>
    </body>
  );
}

export default App;