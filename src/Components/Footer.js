import React from "react";

const Footer = ({ itemsLength }) => {
  return (
    <footer>
      <h3>
        {itemsLength} list {itemsLength == 1 ? "Item" : "Items"}
      </h3>
    </footer>
  );
};

export default Footer;
