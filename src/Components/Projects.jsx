import { FaGithub } from "react-icons/fa";
import { FiExternalLink } from "react-icons/fi";

function Projects() {

  const projects = [

    {
      title:
      "Real Time Sign Language Detection using CNN",

      description:
      "A machine learning based project to recognize sign language gestures in real-time using CNN.",

      tech:
      [
        "Python",
        "CNN",
        "Flask",
        "PyCharm"
      ],

      github:
      "#",

      live:
      "#"
    },

    {
      title:
      "Weather App",

      description:
      "A modern weather application using API integration to fetch real-time weather updates.",

      tech:
      [
        "HTML",
        "CSS",
        "JavaScript"
      ],

      github:
      "https://github.com/Bhagya51-shetty/Weather-Web-App",

      live:
      "#"
    },

    {
      title:
      "Login Page",

      description:
      "A responsive login page with clean UI and form validation.",

      tech:
      [
        "HTML",
        "CSS",
        "JavaScript"
      ],

      github:
      "#",

      live:
      "#"
    },

    {
      title:
      "University Management System",

      description:
      "A management system to handle student records, faculty details and academic activities efficiently.",

      tech:
      [
        "Java",
        "MySQL",
        "IntelliJ",
        "VS Code"
      ],

      github:
      "#",

      live:
      "#"
    },

    {
      title:
      "Fintech Banking System",

      description:
      "A secure full-stack banking system for transactions, account management and secure user handling.",

      tech:
      [
        "React.js",
        "Java",
        "Spring Boot",
        "MySQL",
        "Postman"
      ],

      github:
      "#",

      live:
      "#"
    }

  ];

  return (

    <section
      className="projects-section"
      id="projects"
    >

      <h1 className="project-heading">
        Things What I Built
      </h1>

      <p className="project-subheading">
        A collection of projects
        I built to strengthen my
        development, problem-solving
        and full-stack skills.
      </p>

      <div className="projects-grid">

        {projects.map(
          (project,index) => (

          <div
            className="project-box"
            key={index}
          >

            <div className="project-title-box">

              <h2>
                {project.title}
              </h2>

            </div>

            <p className="project-description">
              {project.description}
            </p>

            <div className="tech-stack">

              {project.tech.map(
                (tech,index) => (

                <span key={index}>
                  {tech}
                </span>

              ))}

            </div>

            <div className="project-buttons">

              <a
                href={project.github}
                target="_blank"
              >
                <FaGithub />
                GitHub
              </a>

              <a
                href={project.live}
                target="_blank"
              >
                <FiExternalLink />
                Live Demo
              </a>

            </div>

          </div>

        ))}

      </div>

    </section>
  );
}

export default Projects;