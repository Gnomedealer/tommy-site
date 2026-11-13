import { education, experience, profile } from "../data";

function Resume() {
  return (
    <section id="resume" className="section">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Resume</h2>
          <a href={profile.resume} className="btn btn-outline" target="_blank" rel="noopener noreferrer">
            Download PDF
          </a>
        </div>

        <div className="resume-grid">
          <div>
            <h3 className="subhead">Experience</h3>
            <ol className="timeline">
              {experience.map((job) => (
                <li key={job.role + job.company} className="timeline-item">
                  <div className="timeline-head">
                    <h4>{job.role}</h4>
                    <span className="muted">{job.dates}</span>
                  </div>
                  <p className="muted">
                    {job.company} · {job.place}
                  </p>
                  <ul className="bullets">
                    {job.points.map((point) => (
                      <li key={point}>{point}</li>
                    ))}
                  </ul>
                </li>
              ))}
            </ol>
          </div>

          <div>
            <h3 className="subhead">Education</h3>
            <ul className="edu-list">
              {education.map((item) => (
                <li key={item.school} className="card edu-card">
                  <h4>{item.school}</h4>
                  <p>{item.credential}</p>
                  <p className="muted">{item.dates}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Resume;
