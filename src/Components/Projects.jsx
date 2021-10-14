import React, { useState } from "react";
import ProjectData from "./ProjectData";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";
import "../CSS/Project.css";

function Projects() {
  const initialVal = 0;
  const [index, setIndex] = useState(initialVal);
  const [maxIndex, setMaxIndex] = useState(ProjectData.length - 1);
  const handleLeft = () => {
    if (index <= 0) {
      setIndex(maxIndex);
    } else {
      setIndex(index - 1);
    }
  };
  const handleRight = () => {
    if (index >= ProjectData.length - 1) {
      setIndex(initialVal);
    } else {
      setIndex(index + 1);
    }
  };

  return (
    <div className="Projects" id="project">
      <h1>Projects</h1>
      {
        <div className="card_project">
          <AiOutlineArrowLeft
            className="arrow_project arrow_left"
            onClick={handleLeft}
          />
          <div className="card_project_data">
            <img src={ProjectData[index].imageUrl} />
            <div className="card_porject_details">
              <h3>{ProjectData[index].name}</h3>
              <span>{ProjectData[index].dis}</span>
              <a href={ProjectData[index].url}>Visit</a>
            </div>
          </div>
          <AiOutlineArrowRight
            className=" arrow_right arrow_project "
            onClick={handleRight}
          />
        </div>
      }
    </div>
  );
}

export default Projects;
