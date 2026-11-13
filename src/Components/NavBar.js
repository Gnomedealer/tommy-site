import { useState } from "react";
import { profile } from "../data";

const links = [
  { href: "#about", label: "About" },
  { href: "#projects", label: "Projects" },
  { href: "#resume", label: "Resume" },
  { href: "#blog", label: "Blog" },
  { href: "#contact", label: "Contact" },
];

function NavBar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="navbar">
      <nav className="container navbar-inner">
        <a href="#home" className="brand" onClick={() => setOpen(false)}>
          {profile.name}
        </a>

        <button
          className="menu-toggle"
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen((isOpen) => !isOpen)}
        >
          <span />
          <span />
          <span />
        </button>

        <ul className={open ? "nav-links open" : "nav-links"}>
          {links.map((link) => (
            <li key={link.href}>
              <a href={link.href} onClick={() => setOpen(false)}>
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}

export default NavBar;
