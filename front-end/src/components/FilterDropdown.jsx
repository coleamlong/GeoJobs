import React from "react";

import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import Container from "react-bootstrap/Container";

const FilterDropdown = (props) => {
  const { title, items, scroll } = props;

  return (
    <DropdownButton title={title}>
      <Container style={scroll ? { height: "20rem", overflowY: "scroll" } : {}}>
        {items.map((item) => {
          return <Dropdown.Item href={`#/${item}`}>{item}</Dropdown.Item>;
        })}
      </Container>
    </DropdownButton>
  );
};

export default FilterDropdown;
