import React from "react";

const Header = ({ title }) => (
  <nav className="navbar navbar-dark bg-dark mb-2">
    <a className="navbar-brand" href="#!">
      Welcome to {title}
    </a>
  </nav>
);

export default Header;
