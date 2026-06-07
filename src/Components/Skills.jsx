
import { VscVscode } from "react-icons/vsc";
import {
  FaHtml5,
  FaCss3Alt,
  FaReact,
  FaJava,
  FaGithub,
  FaGitAlt,
  FaBootstrap
} from "react-icons/fa";

import {
  SiJavascript,
  SiPython,
  SiMysql,
  SiSpringboot,
  SiPostman,
  SiMongodb,
  SiFlask,
  SiIntellijidea,
  SiTailwindcss
} from "react-icons/si";

function Skills() {
  return (
    <section
      className="skills-section"
      id="skills"
    >

      <h1 className="skills-heading">
        Skills I Have
      </h1>

      <p className="skills-subheading">
        A snapshot of tools,
        languages and technologies
        I work with.
      </p>

      <div className="skills-grid">

        {/* Programming */}

        <div className="skill-box">

          <h2>
            Programming Languages
          </h2>

          <div className="skill-tags">

            <span>
              <FaJava />
              Java
            </span>

            <span>
              <SiPython />
              Python
            </span>

            <span>
              <SiJavascript />
              JavaScript
            </span>

          </div>
        </div>

        {/* Frontend */}

        <div className="skill-box">

          <h2>
            Frontend
          </h2>

          <div className="skill-tags">

            <span>
              <FaHtml5 />
              HTML
            </span>

            <span>
              <FaCss3Alt />
              CSS
            </span>

            <span>
              <FaReact />
              React.js
            </span>


            <span>
              <SiTailwindcss />
              Tailwind
            </span>

          </div>
        </div>

        {/* Backend */}

        <div className="skill-box">

          <h2>
            Backend
          </h2>

          <div className="skill-tags">

            <span>
              <SiSpringboot />
              Spring Boot
            </span>

            <span>
              REST API
            </span>

            <span>
                <SiFlask/>
                Flask
            </span>

          </div>

        </div>

        {/* Database */}

        <div className="skill-box">

          <h2>
            Database
          </h2>

          <div className="skill-tags">

            <span>
              <SiMysql />
              MySQL
            </span>


          </div>

        </div>

        {/* Tools */}

        <div className="skill-box">

          <h2>
            Tools
          </h2>

          <div className="skill-tags">

            <span>
              <FaGithub />
              GitHub
            </span>

            <span>
              <FaGitAlt />
              Git
            </span>

            <span>
              <SiPostman />
              Postman
            </span>

            <span>
                <SiIntellijidea/>
                IntelliJ
            </span>

            <span>
              <VscVscode />
              VS Code
            </span>

          </div>

        </div>

      </div>

    </section>
  );
}

export default Skills;