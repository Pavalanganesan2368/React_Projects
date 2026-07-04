import React, { useState } from "react";
import data from "../data/data";
import AccordianHeader from "./AccordianHeader";
import AccordianContent from "./AccordianContent";

const Accordian = () => {
  const [selectedId, setSelectedId] = useState(null);
  const [multipleSelect, setMultipleSelect] = useState(false);
  const [mulitple, setMultiple] = useState([]);
  
  const handleClick = (id) => setSelectedId(id === selectedId ? null : id);
  const handleMultiple = (id) => {
    let copyMultiple = [...mulitple];
    const findIndexOfId = copyMultiple.indexOf(id);

    if (findIndexOfId === -1) copyMultiple.push(id);
    else copyMultiple.splice(findIndexOfId, 1);

    setMultiple(copyMultiple);
  };

  return (
    <section className="wrapper">
      <button
        className="button-multiple-select"
        onClick={() => setMultipleSelect(!multipleSelect)}
      >
        SELECT MULTIPLE BUTTON
      </button>
      <div className="accordian">
        {data && data.length < 0 ? (
          <p>Data Not Fetched Properly...</p>
        ) : (
          <ul>
            {data.map((item) => (
              <li key={item.id}>
                <AccordianHeader 
                  item={item}
                  handleClick={handleClick}
                  handleMultiple={handleMultiple}
                  multipleSelect={multipleSelect}
                />

                <AccordianContent 
                  selectedId={selectedId}
                  multipleSelect={multipleSelect}
                  item={item}
                  mulitple={mulitple}
                />
              </li>
            ))}
          </ul>
        )}
      </div>
    </section>
  );
};

export default Accordian;
