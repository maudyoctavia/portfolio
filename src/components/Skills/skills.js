import React from 'react';
import './skills.css';
import UIDesign from '../../assets/ui-design.png';
import WebDesign from '../../assets/website-design.png';
import AppDesign from '../../assets/app-design.png';

const skills = () => {
  return (
    <section id='skills'>
        <span className="skillTitle">What I do</span>
        <div className="skillBars">
            <div className="skillBar">
                <img src={UIDesign} alt="UIDesign" className="skillBarImg" />
                <div className="SkillBarText">
                    <h2>System Analyst</h2>
                    <p>Able to identify and analyze business needs to design efficient systems. Strong communication skills are essential to collaborate with teams, stakeholders, and users to gather accurate information and deliver solutions. Knowledge of IT infrastructure and system architecture is important for designing scalable systems, while critical thinking helps find optimal solutions to complex problems.</p>
                </div>
            </div>
            <div className="skillBar">
                <img src={WebDesign} alt="WebDesign" className="skillBarImg" />
                <div className="SkillBarText">
                    <h2>UI UX Design</h2>
                    <p>Understanding of visual principles such as color, typography, and layout to create engaging interfaces. Additionally, user research skills are required to understand their needs and preferences, as well as proficiency in prototyping and wireframing with tools like Figma</p>
                </div>
            </div>
            <div className="skillBar">
                <img src={AppDesign} alt="AppDesign" className="skillBarImg" />
                <div className="SkillBarText">
                    <h2>Quality Assurance</h2>
                    <p>Can pay attention to details to identify bugs and errors in the system. A solid understanding of various types of testing, including functional, regression, and performance testing, is necessary. Mastery of automation tools like Selenium increases efficiency in iterative testing, and strong documentation skills are essential for reporting test results and bugs clearly.</p>
                </div>
            </div>
        </div>
    </section>
  )
}

export default skills