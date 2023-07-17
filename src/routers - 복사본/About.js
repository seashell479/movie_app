import { useLocation } from "react-router-dom";
import "./About.css";

function About() {

  return (
    <div className="about__container">
      <span>
        "삶이란 우리의 인생 앞에 어떤 일이 생기느냐에 따라 결정되는 것이 아니라, 
        우리가 어떤 태도를 취하느냐에 따라 결정되는 것이다."
      </span>
      <span>- John Homer Mills</span>
    </div>
  )
}

export default About;