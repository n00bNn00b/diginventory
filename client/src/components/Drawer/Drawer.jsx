import React from "react";

const Drawer = () => {
  return (
    <div className="drawer">
      <input id="my-drawer" type="checkbox" className="drawer-toggle" />

      <div className="drawer-side">
        <label htmlFor="my-drawer" className="drawer-overlay"></label>
        <ul className="menu p-4 w-80 bg-base-100 text-base-content">
          <li>
            <a>Dashboard</a>
          </li>
          <li>
            <a>Inventory</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Drawer;
