import "./Slider.css"
import ReactSlider from "react-slider"
import { useState } from "react"

const MinFare = 100.000
const MaxFare = 900.000
const VXSlider = (props) => {
    const [fare, setFare] = useState([MinFare, MaxFare])
    return(
        <div className = "main">
            <div className = "title-label">Khoảng giá</div>
            <ReactSlider className={"slider"}
                        onChange={setFare}
                         value={fare}
                         min={MinFare}
                         max={MaxFare}></ReactSlider>
        </div>
    )
}
export default VXSlider