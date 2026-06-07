
import profile from "../assets/profile.png";

function Home() {
  return (
    <section className="home-section">

      <div className="left-home">

        <p className="hello-tag">
          Heyy! 👋
        </p>

        <h2 className="home-title">
          I'm
          <br />

          <span>
            Bhagyashree R. Pattanashetty
          </span>

          <br />
          
        </h2>

        <h3 className="role-text">
          Aspiring Software Developer | Full Stack Developer
          <span>
            {" "}
          </span>
        </h3>

        <div className="home-buttons">

          <a
            href="#contact"
            className="primary-btn"
          >
            Get In Touch →
          </a>

        </div>

      </div>

      <div className="right-home">

        <div className="profile-circle">

          <img
            src={profile}
            alt="profile"
            className="profile-img"
          />

          <div className="orbit-ring">

            <div className="skill-tag skill1">
              Frontend
            </div>

            <div className="skill-tag skill2">
              Backend
            </div>

            <div className="skill-tag skill3">
              Full Stack
            </div>

            <div className="skill-tag skill4">
              SQL
            </div>

            <div className="skill-tag skill5">
              Java
            </div>

            <div className="skill-tag skill6">
              React.js
            </div>

          </div>

        </div>

      </div>

    </section>
  );
}
export default Home;