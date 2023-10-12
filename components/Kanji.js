import React from 'react';
import { Kanjiapi } from 'kanjiapi-wrapper';

const Kanji = ({ kanji }) => (
  kanji.status === Kanjiapi.SUCCESS ? (
    <>
    <ul className='py-2'>
      {kanji.value.meanings.map((meaning, index) => (
        <li key={index}>{meaning}</li>
      ))}
    </ul>
    <div className='pt-2 font-semibold tracking-wide uppercase border-t border-black text-[15px]'>kun reading:</div>
    <ul className='pb-2'>
      {kanji.value.kun_readings.map((kunreadings, index) => (
        <li key={index}>{kunreadings}</li>
      ))}
    </ul>
        <div className='pt-2 font-semibold tracking-wide uppercase border-t border-black text-[15px]'>on reading:</div>
    <ul className='pb-2'>
      {kanji.value.on_readings.map((onreadings, index) => (
        <li key={index}>{onreadings}</li>
      ))}
    </ul>
    </>
  ) : kanji.status === Kanjiapi.LOADING ? (
    <div>Not selected</div>
  ) : (
    <div>Error</div>
  )
);

export default Kanji;
