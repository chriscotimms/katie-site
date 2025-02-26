import { useState } from "react";
import "./Accordion.css"; // Ensure correct path

const Accordion = ({ items }) => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleItem = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="accordion">
      {items.map((item, index) => (
        <div key={index} className="accordion-item">
          <button className="accordion-header" onClick={() => toggleItem(index)}>
            <span>{item.title}</span>
          </button>
          <div className="accordion-content" style={{ maxHeight: openIndex === index ? "1200px" : "0" }}>
            <ul>
              {item.links.map((link, i) => (
                <li key={i}>
                  <a href={link.url} target="_blank" rel="noopener noreferrer">
                    {link.text}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Accordion;
