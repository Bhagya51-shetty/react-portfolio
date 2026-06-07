import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaPhoneAlt
} from "react-icons/fa";

function Contact() {

  return (

    <section
      className="contact-section"
      id="contact"
    >

      <h1 className="contact-heading">
        Let's Build Something Great
      </h1>

      <p className="contact-subheading">
        Have a project in mind,
        want to collaborate or
        just say hi?
        I'd love to hear from you.
      </p>

      <div className="contact-container">

        {/* LEFT SIDE */}

        <div className="contact-left">

          <form>

            <label>
              Name
            </label>

            <input
              type="text"
              placeholder="Your Name"
            />

            <label>
              Email
            </label>

            <input
              type="email"
              placeholder="your@email.com"
            />

            <label>
              Message
            </label>

            <textarea
              rows="6"
              placeholder=
              "Tell me about your project..."
            >
            </textarea>

            <button
              type="submit"
              className="send-btn"
            >
              Send Message
            </button>

          </form>

        </div>

        {/* RIGHT SIDE */}

        <div className="contact-right">

          <div className="contact-card">

            <h2>
              Get In Touch
            </h2>

            <p>
              I’m always open to
              discussing new projects,
              creative ideas and
              opportunities to be
              part of something
              meaningful.
            </p>

            <div className="contact-info">

              <p>
                <FaEnvelope />
                bhagyashreepattanashetty430@gmail.com
              </p>

              <p>
                <FaPhoneAlt />
                +91 8088633515
              </p>

            </div>

          </div>

          <div className="social-box">

            <h3>
              FIND ME ON
            </h3>

            <div className="social-icons">

              <a
                href="https://github.com/bhagya51-shetty"
                target="_blank"
              >
                <FaGithub />
              </a>

              <a
                href="https://www.linkedin.com/in/bhagyashree-pattanashetty"
                target="_blank"
              >
                <FaLinkedin />
              </a>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}

export default Contact;