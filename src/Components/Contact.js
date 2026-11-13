import { profile } from "../data";

function Contact() {
  return (
    <section id="contact" className="section">
      <div className="container contact">
        <h2 className="section-title">Get in touch</h2>
        <p>
          I'm open to software engineering roles and collaborations. The best way to reach me is email.
        </p>
        <a href={`mailto:${profile.email}`} className="btn btn-primary">
          {profile.email}
        </a>
        <ul className="contact-links">
          <li>
            <a href={profile.github} target="_blank" rel="noopener noreferrer">
              GitHub
            </a>
          </li>
          <li>
            <a href={profile.linkedin} target="_blank" rel="noopener noreferrer">
              LinkedIn
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
}

export default Contact;
