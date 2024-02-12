import React from 'react';
import About1 from './About.css'
import image from "./1.png";
import 'font-awesome/css/font-awesome.min.css';



const TeamMember = ({ name, title, description }) => (
  <div className="col-sm-6 col-lg-3 my-auto" >
    <div className="box shadow-sm p-4 "style={{backgroundColor:"#E3EDE8"}} >
      <div className="image-wrapper mb-3">
        {/* Assuming you have an image URL in your team data, otherwise replace {image} with the correct image URL */}
        <img className="img-fluid" src={image} alt="..." />
      </div>
      <div className="box-desc ">
        <h5>{name}</h5>
        <p>{title}</p>
        <p>{description}</p>
      </div>
      <ul className="social">
        <li>
          <a className="btn btn-outline-light btn-floating m-1" href="#!" role="button">
            <i className="bi bi-github"></i>
          </a>
        </li>
        <li>
          <a className="btn btn-outline-light btn-floating m-1" href="#!" role="button">
            <i className="bi bi-instagram"></i>
          </a>
        </li>
        <li>
          <a className="btn btn-outline-light btn-floating m-1" href="#!" role="button">
            <i className="bi bi-twitter-x"></i>
          </a>
        </li>
      </ul>
    </div>
  </div>
);

const About = () => {
  const team = [
    {
      name: 'Amey Kohle',
      title: 'CEO & founder',
      // description: 'Lorem ipsum dolore sit a ex ullamco labori tempor incididunt minim veniam adpiscing ex ea eiusmod tempor do.',
      // img: {image}
    },
    {
      name: 'Rohit Kumar Sharma',
      title: 'Data Manager',
      // description: 'Lorem ipsum dolore sit a ex ullamco labori tempor incididunt minim veniam adpiscing ex ea eiusmod tempor do.',
      // Add image URL here if available
    },
    {
      name: 'Nitesh Kumar Kannaujiya',
      title: 'Invigilator And Examiner',
      // description: 'Lorem ipsum dolore sit a ex ullamco labori tempor incididunt minim veniam adpiscing ex ea eiusmod tempor do.',
      // Add image URL here if available
    },
    {
      name: 'Himanshu Tambuskar',
      title: 'Invigilator And Examiner',
      // description: 'Lorem ipsum dolore sit a ex ullamco labori tempor incididunt minim veniam adpiscing ex ea eiusmod tempor do.',
      // Add image URL here if available
    },
  ];

  return (
    <div className="container ">
      <div className="row my-4">
        <div>
          <h1 className='text-center'>Our Team</h1>
          <br></br>
        </div>
        {team.map((member, index) => (
          <TeamMember
            key={index} // Use index as key if no unique identifier available
            name={member.name}
            title={member.title}
            description={member.description}
          />
        ))}
      </div>
    </div>
  );
};

export default About;
