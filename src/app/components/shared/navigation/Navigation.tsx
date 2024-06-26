import React from "react";
import styles from "./navigation.module.scss";
import NavLink from "../nav-link/NavLink";

function Navigation({ className }: { className: string }) {
  return (
    <ul className={`${styles.navigation} ${className}`}>
      <li>
        <NavLink href="#Visiting">Visiting</NavLink>
      </li>
      <li>
        <NavLink href="#Explore">Explore</NavLink>
      </li>
      <li>
        <NavLink href="#Video">Video</NavLink>
      </li>
      <li>
        <NavLink href="#Gallery">Gallery</NavLink>
      </li>
      <li>
        <NavLink href="#Tickets">Tickets</NavLink>
      </li>
      <li>
        <NavLink href="#Contacts">Contacts</NavLink>
      </li>
    </ul>
  );
}

export default Navigation;
