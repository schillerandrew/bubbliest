import { useState, useEffect, React } from 'react';

const ListForm = () => {

  const [text, setText] = useState('');
  let array = [];

  const handleSubmit = (e) => {
    e.preventDefault();
    // if the array is in localStorage...
    if (localStorage.getItem('array')) {
      // then parse the array and get it
      array = JSON.parse(localStorage.getItem('array'));
    }
    // push the user's *non-empty* text input into the array
    if (text.length > 0) array.push(text);

    // stringify the array and set it in localStorage
    localStorage.setItem('array', JSON.stringify(array));

    // clear the user form
    setText('');
    window.location.reload(); // quick fix for re-rendering component
  }

  useEffect( () => {console.log('ok')}, [text]);

  return (
    <form id="list-form-field" onSubmit={handleSubmit}>
      <label>Enter in a text message:
        <input
          type="text"
          value={text}
          onChange={(e) => { setText(e.target.value) }}
        />
      </label>
    </form>
  )
}

export default ListForm;