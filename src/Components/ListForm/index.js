import { useState } from "react";

const ListForm = () => {

  const [text, setText] = useState("");
  
  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`The text you entered was: ${text}`);
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