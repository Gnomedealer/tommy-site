import { profile } from "../data";

function Home() {
  return (
    <section id="home" className="hero">
      <div className="container">
        <p className="eyebrow">Hi, I'm</p>
        <h1>{profile.name}</h1>
        <h2 className="hero-title">{profile.title}</h2>
        <p className="hero-tagline">{profile.tagline}</p>
        <div className="hero-actions">
          <a href="#projects" className="btn btn-primary">
            View my work
          </a>
          <a href={profile.resume} className="btn btn-outline" target="_blank" rel="noopener noreferrer">
            Resume (PDF)
          </a>
        </div>
      </div>
    </section>
  );
}

export default Home;
