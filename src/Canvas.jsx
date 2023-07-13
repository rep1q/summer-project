import {useEffect, useRef, useState} from "react";

const Canvas = (props) => {
  const widthPhoto = 650;
  const [inputValue,setInputValue] = useState(0)
  const canvasRef = useRef();

  useEffect(() => {

    if (canvasRef.current) {
      const canvas = canvasRef.current.getContext('2d')

      const image = new Image()
      image.onload = function () {
        canvas.drawImage(image, 0, 0);
      };
      image.src = props.image
    }
  }, [])
    const ShowSlider = props.showSlider;
  const onProcessClick = () => {
    const canvas = canvasRef.current.getContext('2d')
    const image = canvas.getImageData(0, 0, widthPhoto, widthPhoto)
    const newImage = props.processImage(image,inputValue);

    canvas.putImageData(newImage, 0, 0);
  }

  const onChangeValue = (event) => {
      setInputValue(event.target.value)
  }

  useEffect(()=>{
      console.log("input: ", inputValue)
  },[inputValue])

  return (
    <div className={"TableFoto"}>
      <canvas ref={canvasRef} width={widthPhoto} height={widthPhoto}/>
        {props.showSlider&&<p>Filter settings:</p>}
        {!props.showSlider&&<h3>!No Filters Settings Found!</h3>}
      <div>
          {props.showSlider&&
        <input type={"range"} id={"volume"} className={"inp"} onChange={onChangeValue} name={"volume"}
               min={"0"} max={"20"}/>
          }
          {props.showSlider&&
          <label htmlFor="volume">Value</label>}
      </div>
      <p>
        <button onClick={onProcessClick}>Обработать</button>
      </p>
    </div>
  )
}

export default Canvas
