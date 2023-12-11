import React from "react";
import { Dropdown } from "flowbite-react";

function DropdownMenu(props) {
  return (
    <>
      <section>
        {/* dismissOnClick={false} default was false  */}
        <Dropdown label={props.main} dismissOnClick={true}>
          <Dropdown.Item>{props.item2}</Dropdown.Item>
          <Dropdown.Item>{props.title}</Dropdown.Item>
          <Dropdown.Item>{props.item1}</Dropdown.Item>
          <Dropdown.Item>{props.item4}</Dropdown.Item>
          <Dropdown.Item>{props.item3}</Dropdown.Item>
        </Dropdown>
      </section>
    </>
  );
}

export default DropdownMenu;
