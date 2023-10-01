import { useState } from 'react';

const Accordion = ({ title, artist,  lyricsE, lyricsK, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="my-6 rounded-lg accordion-items">
      <div
        className="py-2 cursor-pointer"
        onClick={toggleAccordion}
      >
        <div className="flex items-center justify-between">
          <h4 className="text-lg ">{title} by {artist}</h4>
          <div className={`transform ${isOpen ? 'rotate-180' : 'rotate-0'} transition-transform`}>
            &#9660; {/* Down arrow */}
          </div>
        </div>
      </div>
      {isOpen && (
        <>
       
        {children}  

      
      
            </>
      )}
    </div>
  );
};

export default Accordion;
