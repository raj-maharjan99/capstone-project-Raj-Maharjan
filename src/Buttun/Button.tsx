import React from "react";

function Button(props) {
  return (
    <>
      <button
        style={{ color: "green" }}
        className="px-3 text-[25px]  font-[600] py-3 border rounded-lg text-light hover:bg-red-400"
      >
        {props.title}
      </button>
    </>
  );
}

export default Button;
