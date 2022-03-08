import React, { useState } from "react";
import { Link } from "gatsby";

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
          <Link
            activeClassName="active--link"
            to={url}
            className={"c-nav" + " " + text}
            key={index}
          >
            {text}
          </Link>
        );
      })}
    </ul>
  );
};
