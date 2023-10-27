import { useState } from "react";

const AboutSidebar = () => {
  const [showSidebar, setShowSidebar] = useState(false);

  return (
    <>
      {showSidebar ? (
        <button
          className="fixed z-50 flex items-center text-2xl text-white cursor-pointer right-10 top-6 click-close"
          onClick={() => setShowSidebar(!showSidebar)}
        >
          x
        </button>
      ) : (
       
         <button
          className="fixed z-50 flex items-center text-2xl cursor-pointer text-blue right-10 top-6 "
          onClick={() => setShowSidebar(!showSidebar)}
        >
          About
        </button>
      )}

      <div
        className={`top-0 right-0 w-[65vw] bg-blue-600  p-10 pl-20 text-white fixed h-full z-40  ease-in-out duration-300 ${
          showSidebar ? "translate-x-0 " : "translate-x-full"
        }`}
      >
          <div className="max-w-3xl mb-4 text-xl content">
       
                <p className='gray-600'>The idea for this project came from a passion for Japanese music and learning the language. I wanted to create a collection of songs with the original and translated lyrics. </p>
<p>
I find that associating my study of the language with both English and Korean enhances my understanding of it. This applies to song lyrics as well.  The most difficult part for me has been learning Kanji, which is why I wanted to integrate the ability to look up Kanji in the lyrics.</p>

<p>Continuously adding: If you click on a kanji character, the definition will show up!</p>
    
              </div>
      </div>
    </>
  );
};

export default AboutSidebar;