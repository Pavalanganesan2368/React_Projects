import React from "react";

const AccordianContent = ({ multipleSelect, item, selectedId, mulitple }) => {
  return (
    <>
      {multipleSelect
        ? mulitple.indexOf(item.id) !== -1 && (
            <div className="answer_accordian">
              <h5>{item.answer}</h5>
            </div>
          )
        : selectedId === item.id && (
            <div className="answer_accordian">
              <h5>{item.answer}</h5>
            </div>
          )}
    </>
  );
};

export default AccordianContent;
