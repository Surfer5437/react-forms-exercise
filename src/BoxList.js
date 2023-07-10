import React, { useState } from "react";
import Box from "./Box"
import { v4 as uuid } from "uuid";
import NewFormBox from "./NewFormBox"
import "./BoxList.css"
function BoxList() {
    const [items, setItems] = useState([]);

    const addItem = item => {
        let newItem = { ...item, id: uuid() };
        setItems(items => [...items, newItem]);
      };

      const renderItems = () => {
        return (
          <ul>
            {items.map(item => (
              <Box key={item.id}
                color={item.color} />
            ))}
          </ul>
        );
      };

    return (
      <div className="BoxList">
        <NewFormBox addItem={addItem}/>
        {renderItems()}

      </div>
    );
  }
  
  export default BoxList;
  