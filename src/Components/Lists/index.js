import React, {useState, useEffect} from 'react';

const Lists = () => {

  const [items, setItems] = useState([]);
  // let array = [];

  // // if the array is in localStorage...
  // if (localStorage.getItem('array')) {
  //   // then parse the array and get it
  //   array = JSON.parse(localStorage.getItem('array'));
  // }

  // useEffect(() => {
  //   if (localStorage.getItem('array')) {
  //     setItems(array);
  //   }
  // }, [array])

  useEffect( () => {
    const items = JSON.parse(localStorage.getItem('array'));
    if (items) {
      setItems(items);
    }
  }, []);

  return (
    <>
      {items.map((item) => <li>{item}</li>)}
    </>
  )
}

export default Lists;