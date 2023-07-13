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

  const SecondFilter =(imageData, inputValue)=>{
    return SecFilter(imageData, inputValue)
  }

    return (
    <body>
      <div>
        <li><Canvas image = {image} showSlider={false} processImage={FirstFilter} /><h2>Monochrome Filter</h2></li>
        <li><Canvas image = {image} showSlider={true} processImage={SecondFilter}/><h2>Contrast Filter</h2></li>
      </div>
    </body>
  );
}

export default App;