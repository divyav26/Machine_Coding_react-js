import React from 'react'
import './Model.css'
import { useRef } from 'react'

const Model = ({setOpenModel}) => {
    const modelRef = useRef()

    const closeModel = (e)=>{
        if(modelRef.current === e.target){
            setOpenModel()
        }
    }
  return (
    <div className='modelbg' ref={modelRef} onClick={closeModel}>
        <div className='container'>
            <div>
                <button onClick={()=>setOpenModel(false)}>X</button>
               <p>Open our model</p>

            </div>
        </div>
      
    </div>
  )
}

export default Model
