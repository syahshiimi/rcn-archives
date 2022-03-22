import { Link } from "gatsby";
import React, { useState } from "react";
import { DropdownComponent } from "./Dropdown";

export const MenuItems = ({ link, index }) => {
  const { url, text, subMenu } = link;

  // Dropdown with useState Hook
  const [dropdown, setDropdown] = useState(false);

  const onClick = () => {
    setDropdown(!dropdown);
  };

  // Render Menu items
  return (
    <li key={index} className={"c-nav" + "__" + text}>
      {subMenu != null ? (
        <>
          <button
            type="button"
            aria-expanded={dropdown ? "true" : "false"}
            aria-haspopup="menu"
            className="c-nav__dropdownbutton"
            onClick={onClick}
          >
            {text}
          </button>
          <DropdownComponent subMenu={subMenu} dropdown={dropdown} />
        </>
      ) : (
        <Link
          activeClassName="active--link"
          to={url}
          className={"c-nav__link" + " " + text}
        >
          {text}
        </Link>
      )}
    </li>
  );
};
