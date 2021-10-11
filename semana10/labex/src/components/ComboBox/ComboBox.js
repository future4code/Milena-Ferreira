import React, { useEffect, useState } from "react";

function ComboBox(props) {
  const [items, setItems] = useState([]);

  useEffect(() => {
    setItems(props.items);
  }, [])

  const optionList = items.map((item, index) => {
    return (<option key={index}>{item}</option>)
  })

  return (
    <div>
      <p>{props.text}:</p>
      <select>
        {optionList}
      </select>
    </div>
  );
}

export default ComboBox;
