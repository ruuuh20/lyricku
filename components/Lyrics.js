import React from 'react';
import HTMLReactParser from 'html-react-parser';

const Lyrics = ({ lyrics, onWordClick }) => {
  const parsedLyrics = HTMLReactParser(lyrics, {
    replace: (domNode) => {
      if (domNode.attribs && domNode.attribs.class === 'clickable') {
        return (
          <span
          className='clickable'
            key={domNode.key}
            style={{ cursor: 'pointer',}}
            onClick={() => handleWordClick(domNode.children[0].data)}
          >
            {domNode.children[0].data}
          </span>
        );
      }
    },
  });

  const handleWordClick = (word) => {
    onWordClick(word);
  };

  return <div>{parsedLyrics}</div>;
};

export default Lyrics;
