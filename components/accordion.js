import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
const Accordion = ({ title, artist, thumbnail, lyricsE, lyricsK, children }) => {
  const [isOpen, setIsOpen] = useState(false);
console.log(title, artist, thumbnail)
  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="my-6 rounded-lg accordion-items">
      <div
        className="cursor-pointer "
        onClick={toggleAccordion}
      >
        <div className="flex items-center justify-between">
          <span><Image className="rounded-lg" src={artist.profileImage} width={70}
      height={70}/></span> <Link href="">{artist.name}</Link>
          <h4 className="text-xl">{title}</h4>
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
