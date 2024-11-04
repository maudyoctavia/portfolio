import React from 'react';
import './intro.css';
import bg from '../../assets/image.png';
import { Link } from 'react-scroll';

const Intro = () => {
  return (
    <section id="intro">
      <div className="introContainer">
        <div className="introContent">
          <span className="hello">Hello,</span>
          <div className="introText">
            <span>I'm </span>
            <span className="introName">Maudy</span>
          </div>
          <p className="introPara">
          I am a final-year student majoring in Information Technology at Institut Teknologi Del. I have interests in UI/UX Design, System Analysis, and Quality Assurance.
          </p>
        </div>
        <img src={bg} alt="Profile" className="bg" />
      </div>
    </section>
  );
};

export default Intro;
