import { useState, React } from 'react';

const ListForm = () => {

  const [text, setText] = useState("");
  let array = [];

  const handleSubmit = (e) => {
    e.preventDefault();
    if (localStorage.getItem('array')) { // if the array is in localStorage...
      array = JSON.parse(localStorage.getItem('array')); // then parse the array and get it
    }
    array.push(text); // push the user's text input into the array
    localStorage.setItem('array', JSON.stringify(array)); // stringify the array and set it in localStorage
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>Enter in a text message:
        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
      </label>
    </form>
  )
}

export default ListForm;