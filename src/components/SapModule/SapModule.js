import React from 'react'
import style from "./SapModule.module.css"
import Card from '../Card/Card'
const SapModule = () => {
  return (
    <div className={style.main}>
      <Card title ="SAP FICO">
       
      </Card>
      <Card 
      title ="SAP MM"
      
      >
       
      </Card>
      <Card 
      title ="SAP SD"
      
      >
       
      </Card>
      <Card 
      title ="SAP HCM"
      
      >
       
      </Card>
      <Card 
      title ="SAP Successfactors"
      children="hello"
      >
       
      </Card>
      <Card 
      title ="SAP SCM"
      children="hello"
      >
       
      </Card>
      <Card 
      title ="SAP PP"
      children="hello"
      >
       
      </Card>
      <Card 
      title ="SAP FICO Hana"
      children="hello"
      >
       
      </Card>
      <Card 
      title ="SAP MM Hana"
      children="hello"
      >
       
      </Card>
      <Card 
      title ="SAP ABAP Hana"
      children="hello"
      >
       
      </Card>
    </div>
  )
}

export default SapModule
