import { useState } from "react";
import { GoChevronDown, GoChevronLeft } from "react-icons/go";

const Accordion = ({ items }) => {
  const [expandedIndex, setExpendedIndex] = useState(-1);

  // Define event handler outside mapping statement, we use hybrid of shorthand and longhand of event handling
  const handleClick = (nextIndex) => {
    setExpendedIndex((currentExpandedIndex) => {
      if(currentExpandedIndex === nextIndex) {
        return -1;
      } else {
        return nextIndex;
      }
    });
  };

  const renderedItems = items.map((item, index) => {
    const isExpanded = index === expandedIndex;

    const icon = <span className="text-xl">
      {isExpanded ? <GoChevronDown /> : <GoChevronLeft />}
    </span>

    return (
      <div key={item.id}>
        <div className="flex justify-between p-3 bg-gray-100 border-b items-center cursor-pointer" onClick={() => handleClick(index)}>
          {item.label}
          {icon}
        </div>
        {isExpanded && <div className="border-b p-5">{item.content}</div>}
      </div>
    );
  });

  return (
    <div className="border-x border-t rounded">
      {renderedItems}
    </div>
  )
};

export default Accordion;