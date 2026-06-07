function About() {
  return (
    <section
      className="about-section"
      id="about"
    >

      <div className="about-left">

        <p className="about-small">
          ABOUT ME
        </p>

        <h1>
          Who I Am & What I Do
        </h1>

        <p className="about-text">

          Hello! I'm
          <span>
            {" "}Bhagyashree R.
            Pattanashetty
          </span>,
          a passionate Computer
          Science Engineering student
          interested in software
          development and modern
          web technologies.

        </p>

        <p className="about-text">

          I enjoy building responsive,
          clean and user-friendly
          applications using
          React, Java, Spring Boot,
          MySQL and JavaScript.

        </p>

        <p className="about-text">

          I am passionate about
          problem solving,
          continuous learning and
          transforming ideas into
          meaningful digital
          experiences.

        </p>

      </div>

      <div className="about-right">

        <div className="info-card">
          <h3>🎓 Education</h3>
          <p>
            B.E Computer Science
            Engineering
          </p>
        </div>

        <div className="info-card">
          <h3>⭐ CGPA</h3>
          <p>8.06</p>
        </div>

        <div className="info-card">
          <h3>📍 Location</h3>
          <p>Karnataka, India</p>
        </div>

        <div className="info-card">
          <h3>💻 Interests</h3>
          <p>
            Full Stack Development
          </p>
        </div>

      </div>

    </section>
  );
}

export default About;