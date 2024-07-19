import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import TravelCell from './components/TravelCell/TravelCell'
import VXSlider from './components/TravelCell/Slider'

function App() {
  const [count, setCount] = useState(0)
  const [listOfSession, setListOfSession] = useState([
    {
      session: "Sáng sớm",
      time: "00:00 - 06:00"
    },
    {
      session: "Buổi sáng",
      time: "06:01 - 12:00"
    },
    {
      session: "Buổi trưa",
      time: "12:01 - 18:00"
    },
    {
      session: "Buổi tối",
      time: "18:01 - 23:59"
    }])
  
    const onSelectSession = () => {
      alert("Clicked")
    }
  //Bat dau code
  return (
    <div>
      <TravelCell listOfSession = {listOfSession} onSelectSession = {onSelectSession}></TravelCell>
      {/* <VXSlider></VXSlider> */}
      {/* <div>Khoảng giá</div>
      
      
      <div>Nhà xe</div>

      <div>Loại xe</div> */}
    </div>
  )
}

export default App
