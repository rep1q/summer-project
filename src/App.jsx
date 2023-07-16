import './App.css';
import Canvas from "./Canvas";
import image from "./picture.jpg"
import logo from "./prac.png"
import {FirFilter} from "./Filters/FilterFirst";
import {SecFilter} from "./Filters/FilterSecond";
import { ReactCompareSlider, ReactCompareSliderImage } from 'react-compare-slider';


function App() {
  const onBtnClick = ()=>{

      console.log("Click")
  }

  const FirstFilter =(imageData)=>{
    return FirFilter(imageData)
  }

  const SecondFilter =(imageData, inputValue)=>{
    return SecFilter(imageData,inputValue)
  }

    return (
        <>
          <header>
            <li id={"logo1"}>Practice on JavaScript</li>
              <li><img src={logo} width={"200px"}/></li>
          </header>
              <body>
                <div>
                  <li className={"canvas"}><Canvas image = {image} showSlider={false} processImage={FirstFilter} /><h2>Monochrome Filter</h2></li>
                  <li className={"canvas"}><Canvas image = {image} showSlider={true} processImage={SecondFilter}/><h2>Contrast Filter</h2></li>
                </div>
              </body>
            <footer>
                <li className={"footer"}>
                    <h4>Our Contacts:</h4>
                    <ul><a href={"https://vk.com/the_cheekiest_pug"}>Владимир Стрельников</a></ul>
                    <ul><a href={"https://vk.com/new0sl"}>Козлов Никита</a></ul>
                    <ul><a href={"https://vk.com/li.mellow"}>Ирина Пупкова</a></ul>
                </li>
                <li className={"footer"}>
                    <h5>Our GitHubs:</h5>
                    <ul><a href={"https://github.com/rep1q"}>@rep1q</a></ul>
                    <ul><a href={"https://github.com/new0sl"}>@new0sl</a></ul>
                    <ul><a href={"https://github.com/limellow"}>@limellow</a></ul>
                </li>
                <li><img id={"logo2"} src={logo} width={"600px"}/></li>
            </footer>
        </>
  );
}

export default App;