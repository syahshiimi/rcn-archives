import { Link } from "gatsby";
import React, { useState } from "react";

export const DropdownComponent = ({ subMenu, dropdown }) => {
  // to render the submenu dropdown, first check if the item has a subMenu
  const showState = dropdown
    ? "c-nav__dropdownmenu-active"
    : "c-nav__dropdownmenu";
  const { pageID } = subMenu;
  return (
    <ul className={showState} key={pageID}>
      {subMenu.map((items, index) => {
        const { pageID, url, text } = items;
        return (
          <li className={"c-nav" + "__" + text} key={pageID + text}>
            <Link
              activeClassName="active--link"
              to={url}
              className={"c-nav__link" + " " + text}
              key={index}
            >
              <p className="c-nav__dropdowntext">{text}</p>
            </Link>
          </li>
        );
      })}
    </ul>
  );
};
