import "./About.css";
import figureGif from "../img/Ghibli.gif"

function About() {

  return (
    <div className="about__container">
      <span style={{fontSize: "30px"}}><b>영화 평점 웹 서비스 개발자</b></span>
      <hr />
      <span><b>이름: </b> 김은현</span>
      <span><b>나이: </b> 24(만)</span>
      <span><b>언어: </b> HTML & CSS & JavaScript, Java</span>
      <span><b>기술: </b> React.js, Vue.js</span>
      <hr />
      <img src={figureGif} width="100%" alt="지브리"></img>
    </div>
  )
}

export default About;