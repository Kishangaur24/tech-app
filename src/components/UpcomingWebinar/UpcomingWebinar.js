import React from 'react';
import style from "./UpcomingWebinar.module.css"
import { useNavigate } from 'react-router-dom';
function UpcomingWebinars() {
  // Placeholder data for upcoming SAP webinars
  const upcomingWebinars = [
    {
      id: 1,
      title: 'Mastering SAP HANA',
      date: 'January 15, 2024',
      time: '10:00 AM - 12:00 PM',
      description: 'Join us to learn advanced techniques in SAP HANA.',
      registrationLink: 'https://example.com/register', // Replace with actual registration link
    },
    {
      id: 2,
      title: 'Introduction to SAP S/4HANA',
      date: 'February 5, 2024',
      time: '9:30 AM - 11:30 AM',
      description: 'Discover the basics of SAP S/4HANA and its benefits.',
      registrationLink: 'https://example.com/register', // Replace with actual registration link
    },
    // Add more webinar data as needed
  ];

  const navigate = useNavigate()
  function handleClick(){
    navigate("/registration")
  }

  return (
    <div className={style.container}>
      <h2>Upcoming SAP Webinars</h2>
      <div className={style.list}>
        {upcomingWebinars.map((webinar,id) => (
          <div key={webinar.id} className={style.item}>
            <h3>{webinar.title}</h3>
            <p>
              <strong>Date:</strong> {webinar.date} <br />
              <strong>Time:</strong> {webinar.time} <br />
              <strong>Description:</strong> {webinar.description}
            </p>
            <button className={style.btn} onClick={()=>handleClick(webinar)}>register now</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default UpcomingWebinars;
