import React from 'react'
import style from "./Success.module.css"
import YouTubeVideo from '../Youtube/Youtube'
import student1 from "../../assets/student1.jpeg"
import student2 from "../../assets/student2.jpeg"
const Success = () => {
  return (
    <div className={style.main}>
      <div>
      <YouTubeVideo/>
      </div>
      <div className={style.thought}>
      <div className={style.student1}>
        <img src={student1} alt='student1'/>
        <h1>Wow! my profile is completely different now.</h1>
        <p>Great place for SAP Online Trainings. Trainers & cordinators were exceptionally helpful. Instructor had thorough practical experience which he inculcated in his training methodology. I landed up a job within 15 days of the completion of my sap in lockdown itself.</p>
      </div>
      <div className={style.student2}>
        <img src={student2} alt='student2'/>
        <h1>Successfully Completed Fast Track Online Training Of ARIBA</h1>
        <p>I got to know about ZebLearn through one of my senior & my experience was exceptionally good</p>
      </div>
      </div>
    </div>
  )
}

export default Success
