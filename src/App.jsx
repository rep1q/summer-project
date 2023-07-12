import logo from './logo.svg';
import './App.css';

function App() {
  const onBtnClick = ()=>{

      console.log("Click")
  }


  const image = document.getElementById("image");
  const canvas = document.getElementById("canvas");
  const ctx = canvas.getContext("2d");
  canvas.width = image.width;
  canvas.height = image.height;

    return (
    <body>
      <div>
      <img src={"../logo192.png"} id={"image"} className={"image"}/>
          <canvas id={"canvas"} className={"canvas"}>
              Your browser does not support JS or HTML5!
          </canvas>
      </div>
      <button id={"btn"} onClick={onBtnClick}>Обработка фото</button>
    </body>
  );
}

export default App;
