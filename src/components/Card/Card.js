
import React from 'react';
import style from "./Card.module.css"
const Card = ({ title }) => {
  return (
    <div className={style.card}>
      <h3>{title}</h3>
      <p >Free LMS Access</p>
      <p >SAP Certification Paths</p>
      <p >Free SAP Resources</p>
      <p >Interactive Demos</p>
      <button>Download Content</button>
    </div>
  );
};

export default Card;
