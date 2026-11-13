import { projects } from "../data";

function ProjectCard({ project }) {
  return (
    <article className="card project-card">
      <h3>{project.name}</h3>
      <p>{project.description}</p>
      <ul className="chips">
        {project.tech.map((t) => (
          <li key={t} className="chip chip-small">
            {t}
          </li>
        ))}
      </ul>
      <a href={project.repo} className="card-link" target="_blank" rel="noopener noreferrer">
        View code →
      </a>
    </article>
  );
}

function Project() {
  return (
    <section id="projects" className="section section-alt">
      <div className="container">
        <h2 className="section-title">Projects</h2>
        <div className="card-grid">
          {projects.map((project) => (
            <ProjectCard key={project.name} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Project;
