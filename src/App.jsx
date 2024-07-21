/* eslint-disable no-unused-vars */
import React, { useMemo, useState } from 'react'
import "./App.css"
function App() {
  const [weight,setWeight]=useState(120)
  const [height,setHeight]=useState(120)

  const onWeightChange=(e)=>{
    setWeight(e.target.value)
  }

  const onHeightChange=(e)=>{
    setHeight(e.target.value)
  }
  const output= useMemo(()=>{
const calculateHeaight= height*100


return (weight/(calculateHeaight*calculateHeaight)).toFixed(1)
  },[height,weight])
  return (
    <main>
      <h1>BMI - Calculator</h1>
      <div className="input-section">
        <p className="slider-output">Weight : {weight}kg</p>
        <input type="range" onChange={onWeightChange} step={1} min="40" max="200 "className="input-slider" />
        <p className="slider-output">Height : {height}cm</p>
        <input type="range" onChange={onHeightChange} min="120" max="220"  className="input-slider" />
      </div> 
      <div className="output-section">
        <p>Your BMI is  </p>
        <p className='output'>{output}</p>

      </div>
    </main>
  )
}

export default App