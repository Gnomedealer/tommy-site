import { posts } from "../data";

function Blog() {
  return (
    <section id="blog" className="section section-alt">
      <div className="container">
        <h2 className="section-title">Blog</h2>
        <div className="card-grid">
          {posts.map((post) => (
            <article key={post.title} className="card">
              <span className="badge">{post.status}</span>
              <h3>{post.title}</h3>
              <p>{post.summary}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Blog;
