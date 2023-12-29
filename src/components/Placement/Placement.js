import React from 'react'
import style from "./Placement.module.css"

const Placement = () => {
  return (
    <div>
      <h1>Placement Partner</h1>
      <div className={style.main}>
        <div className={style.company}>
            <img src='https://cdn-icons-png.flaticon.com/128/5968/5968269.png' alt='amazon' />
            <img src='https://cdn-icons-png.flaticon.com/128/5977/5977581.png' alt='epay' />
            <img src='https://cdn-icons-png.flaticon.com/128/5968/5968382.png' alt='stripe' />
            <img src='https://cdn-icons-png.flaticon.com/128/882/882725.png' alt='htc' />
        </div>
        <div className={style.company}>
            <img src='https://cdn-icons-png.flaticon.com/128/5968/5968852.png' alt='youtube' />
            <img src='https://cdn-icons-png.flaticon.com/128/882/882706.png' alt='epson' />
            <img src='https://cdn-icons-png.flaticon.com/128/5969/5969238.png' alt='zoom' />
            <img src='https://cdn-icons-png.flaticon.com/128/9018/9018508.png' alt='videvo' />
        </div>
        <div className={style.company}>
            <img src='https://cdn-icons-png.flaticon.com/128/5969/5969038.png' alt='ibm' />
            <img src='https://cdn-icons-png.flaticon.com/128/5969/5969043.png' alt='intel'/>
            <img src='https://cdn-icons-png.flaticon.com/128/732/732178.png' alt='amd' />
            <img src='https://cdn-icons-png.flaticon.com/128/5969/5969323.png' alt='uber' />
        </div>
        <div className={style.company}>
            <img src='https://cdn-icons-png.flaticon.com/128/882/882603.png' alt='vedcon' />
            <img src='https://cdn-icons-png.flaticon.com/128/5969/5969139.png' alt='simens' />
            <img src='https://cdn-icons-png.flaticon.com/128/5969/5969096.png' alt='oracle' />
            <img src='https://cdn-icons-png.flaticon.com/128/5968/5968349.png' alt='johnson' />
        </div>
      
      </div>
    </div>
  )
}

export default Placement
