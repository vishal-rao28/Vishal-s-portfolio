import React from 'react';
import DraggableList from './Viewpager';

function SkillSet() {
  const arraySkills = [
    ['iOS Native Dev', 'SwiftUI, UIKit, Combine, Core ML, HealthKit'],
    ['QA & Automation', 'Selenium, Appium, Postman, Load Testing'],
    ['Architecture & DB', 'CoreData, ROOM DB, MySQL, REST APIs'],
    ['Languages', 'Swift, Python, Java, C/C++, SQL'],
    ['Tools & Design', 'Xcode, TestFlight, Git, Figma, Canva']
  ];

  return (
    <div id="skills" className="skillSet" style={{ marginTop: '70px' }}>
      <div className="draggableItems">
        <h1>
          Variable Skill Set <strong style={{ color: 'orange' }}>.</strong>
        </h1>
        <div
          className="SkillSetItems"
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            width: '120%'
          }}
        >
          <DraggableList items={arraySkills} />
        </div>
      </div>
      <div className="notesDiv" style={{ width: '50%', marginTop: 100 }}>
        <img
          className="notes"
          src="https://i.ibb.co/ss4BBF1/notes.png"
          alt="Sticky note reminder"
          width="100%"
        />
        <p
          className="cartoonText"
          style={{ fontSize: '150%', color: 'orange', textAlign: 'center' }}
        >
          PS. My Skill set is Literally Variable, Try Dragging and Rearranging one of the Skills :p
        </p>
      </div>
    </div>
  );
}

export default SkillSet;
