import {useEffect, useRef} from "react";

const Canvas = (props) => {

  const widthPhoto = 650

  const canvasRef = useRef()

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

  const onProcessClick = () => {
    const canvas = canvasRef.current.getContext('2d')
    const image = canvas.getImageData(0, 0, widthPhoto, widthPhoto)
    const newImage = props.processImage(image)
    canvas.putImageData(newImage, 0, 0)
  }

  return (
    <div className={"TableFoto"}>
      <canvas ref={canvasRef} width={widthPhoto} height={widthPhoto}/>
      <p>
        <button onClick={onProcessClick}>Обработать</button>
      </p>
    </div>
  )
}

export default Canvas
