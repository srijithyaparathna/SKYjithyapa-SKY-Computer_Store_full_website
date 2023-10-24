import React from 'react';
import './Sidebar.css';
import { SidebarData } from './SidebarData';

function Sidebar() {
  const currentPathname = window.location.pathname;

  return (
    <div className="Sidebar">
      <ul className="SidebarList">
        {SidebarData.map((val, key) => (
          <li
            className={`row1 ${currentPathname === val.link ? "active" : ""}`}
            key={key}
            onClick={() => {
              window.location.pathname = val.link;
            }}
          >
            <div id="icon">{val.icon}</div>
            <div id="title">{val.title}</div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Sidebar;
