import {useEffect, useRef, useState} from "react";
import {ReactCompareSlider, ReactCompareSliderImage} from "react-compare-slider";
import img from "./picture.jpg"

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
        setImage(canvas.getImageData(0,0,widthPhoto,widthPhoto))
      };
      image.src = props.image
    }
  }, [])
    const ShowSlider = props.showSlider;

  const [image,setImage]=useState(null)
  const [newImage,setNewImage]=useState(null)
  const onProcessClick = () => {
    const canvas = canvasRef.current.getContext('2d')
    const newImageProcessed = props.processImage(image,inputValue);
    setNewImage(newImageProcessed)
    canvas.putImageData(newImageProcessed, 0, 0);
  }

  const onChangeValue = (event) => {
      setInputValue(event.target.value)
  }

  useEffect(()=>{
      console.log("input: ", inputValue)
  },[inputValue])

  function imagedata_to_image(imaged) {
    var canvas = document.createElement('canvas');
    var ctx = canvas.getContext('2d');
    canvas.width = imaged.width;
    canvas.height = imaged.height;
    ctx.putImageData(imaged, 0, 0);

    var img = new Image();
    img.src = canvas.toDataURL();
    return img;
  }

  return (
    <div className={"TableFoto"}>
      {newImage ?<ReactCompareSlider
          itemOne={<ReactCompareSliderImage src={img}/>}
          itemTwo={<ReactCompareSliderImage src={imagedata_to_image(newImage).src}/>}
      />:<canvas ref={canvasRef} width={widthPhoto} height={widthPhoto}/>
      }
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
