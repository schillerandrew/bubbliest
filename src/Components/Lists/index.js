import React from 'react';
import { render } from 'react-dom';

const Lists = () => {

  // let textValues = Object.values(localStorage);
  let array = [];
  if (localStorage.getItem('array')) {
    array = JSON.parse(localStorage.getItem(localStorage.key('array')));
  }
  return (
    <>
      {array.map((item) => <li>{item}</li>)}
    </>
  )
}

export default Lists;