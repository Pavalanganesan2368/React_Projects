import React from "react";

const AccordianHeader = ({ item, handleMultiple, handleClick, multipleSelect }) => {
  return (
    <div className="header-title">
      <h3>{item.question}</h3>
      <span
        onClick={
          multipleSelect
            ? () => handleMultiple(item.id)
            : () => handleClick(item.id)
        }
        className="button-plus"
      >
        +
      </span>
    </div>
  );
};

export default AccordianHeader;
