import React from 'react';
import { render } from 'react-dom';

const Lists = () => {

  let textValues = Object.values(localStorage);
  // alert(textValues);
  // console.log(textValues);
  // for (let i = 0; i < localStorage.length; i++) {
  for (let i = 1; i < 5; i++) {
    return(
      <>
        <p>{localStorage.getItem(localStorage.key(i))}</p>
      </>
    )
  }
  // }
}

export default Lists;