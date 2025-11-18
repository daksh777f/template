import React from "react";

const Navbar = () => {
  const navStyle = {
    position: "fixed",
    top: 0,
    width: "100%",
    backgroundColor: "transparent",
    color: "white",
    zIndex: 1000,
    padding: "1.5rem 0",
  };

  const containerStyle = {
    maxWidth: "1408px",
    margin: "0 auto",
    padding: "0 2rem",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  };

  const logoStyle = {
    fontSize: "1.5rem",
    fontWeight: "500",
    fontFamily: "'403 Doshi', Montserrat",
    color: "white",
    margin: 0,
    letterSpacing: "0.1em",
    textShadow: "0 2px 20px rgba(0, 0, 0, 0.7)",
  };

  const linkContainerStyle = {
    display: "flex",
    gap: "3rem",
    alignItems: "center",
  };

  const linkStyle = {
    color: "rgba(255, 255, 255, 0.9)",
    textDecoration: "none",
    fontWeight: "350",
    fontSize: "0.95rem",
    fontFamily: "'Poppins', Montserrat",
    letterSpacing: "0.05em",
    transition: "all 0.3s ease",
    textShadow: "0 2px 15px rgba(0, 0, 0, 0.8)",
    position: "relative",
  };

  const handleMouseOver = (e) => {
    e.target.style.color = "#ffffff";
    e.target.style.transform = "translateY(-2px)";
  };

  const handleMouseOut = (e) => {
    e.target.style.color = "rgba(255, 255, 255, 0.9)";
    e.target.style.transform = "translateY(0)";
  };

  const navLinks = [
    { href: "#home", label: "Home" },
    { href: "#about", label: "About" },
    { href: "#features", label: "Features" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <nav style={navStyle}>
      <div style={containerStyle}>
        {}
        <h1 style={logoStyle}>CHIKKU AI</h1>

        {}
        <div style={linkContainerStyle}>
          {navLinks.map(({ href, label }) => (
            <a
              key={label}
              href={href}
              style={linkStyle}
              onMouseOver={handleMouseOver}
              onMouseOut={handleMouseOut}
            >
              {label}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
