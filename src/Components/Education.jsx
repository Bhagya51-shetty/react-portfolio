function Education() {
  return (
    <section
      className="education-section"
      id="education"
    >

      <h1 className="education-heading">
        My Education
      </h1>

      <p className="education-subheading">
        My academic journey and
        learning experience
      </p>

      <div className="timeline-container">

        {/* B.E */}

        <div className="timeline-item left">

          <div className="education-card">

            <h2>
              B.E Computer Science
            </h2>

            <h3>
              Government Engineering
              College
            </h3>

            <p>
              2022 – 2026
            </p>

            <span>
              CGPA: 8.06
            </span>

          </div>

        </div>

        {/* PUC */}

        <div className="timeline-item right">

          <div className="education-card">

            <h2>
              PUC – Science
            </h2>

            <h3>
              Shri Noorandeshwara
              PU College
            </h3>

            <p>
              2020 – 2022
            </p>

            <span>
              85.67%
            </span>

          </div>

        </div>

        {/* SSLC */}

        <div className="timeline-item left">

          <div className="education-card">

            <h2>
              SSLC / Class X
            </h2>

            <h3>
              MDRS for Girls,
              Jewargi
            </h3>

            <p>
              2019 – 2020
            </p>

            <span>
              86.8%
            </span>

          </div>

        </div>

      </div>

    </section>
  );
}

export default Education;