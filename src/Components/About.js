import { about, skills } from "../data";

function About() {
  return (
    <section id="about" className="section">
      <div className="container">
        <h2 className="section-title">About</h2>
        <div className="about-grid">
          <div className="about-text">
            {about.map((paragraph, i) => (
              <p key={i}>{paragraph}</p>
            ))}
          </div>
          <div className="skills">
            {skills.map((group) => (
              <div key={group.group} className="skill-group">
                <h3>{group.group}</h3>
                <ul className="chips">
                  {group.items.map((item) => (
                    <li key={item} className="chip">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
