import React from "react";

const Header = ({ userInfo }) => {
  return (
    <header>
      <h1 style={{ margin: "auto" }}>{userInfo}</h1>
    </header>
  );
};

Header.defaultProps = {
  userInfo: "Course List",
};

export default Header;
