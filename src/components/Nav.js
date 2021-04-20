import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Nav = () => {
  return (
    <StyledNav>
      <h1>
        <Link id="logo" to="/capture-react/">
          Capture
        </Link>
      </h1>
      <div>
        <ul>
          <li>
            <Link to="/capture-react/">1. About Us</Link>
          </li>
          <li>
            <Link to="/capture-react/work">2. Our Work</Link>
          </li>
          <li>
            <Link to="/capture-react/contact">3. Contact Us</Link>
          </li>
        </ul>
      </div>
      <motion.div className="selectLine"></motion.div>
    </StyledNav>
  );
};

const StyledNav = styled.nav`
  min-height: 10vh;
  display: flex;
  margin: auto;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 10rem;
  background: #282828;
  position: sticky;
  top: 0;
  z-index: 20;
  a {
    color: white;
    text-decoration: none;
  }
  ul {
    display: flex;
    list-style: none;
  }
  #logo {
    font-size: 1.5rem;
    font-family: "Lobster", cursive;
    font-weight: lighter;
  }
  li {
    padding-left: 10rem;
    position: relative;
  }
  .selectLine {
    border-bottom: 1rem #23d997;
    width: 5vw;
    height: 0.2vw;
  }
`;

export default Nav;
