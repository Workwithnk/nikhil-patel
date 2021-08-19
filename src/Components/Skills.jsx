import React from "react";
import { SkillsData } from "./SkillsData";
import "../CSS/skills.css";

function Skills() {
  return (
    <div className="skill" id="skill">
      <h1>Skills</h1>
      <div className="data_skill">
        {SkillsData.map((data) => {
          return (
            <div key={data.id} className="allData">
              <span className="skill_name">{data.nameOfSkill}</span>
              <div className="progressBar">
                <div style={{ width: `${data.progress}` }} className="progress">
                  <span>{data.progress}</span>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Skills;
