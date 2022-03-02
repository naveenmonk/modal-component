import React from "react";

import logo from './logo.svg';

import { FaTimes } from "react-icons/fa";

import { links, social } from './data';

import { useGlobalContext } from "./content";

const Sidebar = () => {
    const { isSidebarOpen, toggleSidebar } = useGlobalContext();
  
    return (
      <aside className={`${isSidebarOpen ? 'sidebar show-sidebar' : 'sidebar'}`}>
        <div className="sidebar-header">
          <img src={logo} alt="Spring Boot" />
          <button
            className="close-btn"
            onClick={() => toggleSidebar(isSidebarOpen)}
          >
            <FaTimes />
          </button>
        </div>
        <ul className="links">
          {links.map((link) => (
            <li key={link.id}>
              <a href={link.url}>
                {link.icon}
                {link.label}
              </a>
            </li>
          ))}
        </ul>
  
        <ul className="social-icons">
          {social.map((item) => (
            <li key={item.id}>
              <a href={item.url}>{item.icon}</a>
            </li>
          ))}
        </ul>
      </aside>
    );
  };

  export default Sidebar;