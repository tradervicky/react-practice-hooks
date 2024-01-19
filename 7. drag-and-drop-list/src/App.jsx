import React, { useState } from 'react';

const App = () => {
  const [items, setItems] = useState(["Ram", "Shayam", "Sita","Kalki"]);
  const [draggingItem, setDraggingItem] = useState(null);

  function handleDragStart(index) {
    setDraggingItem(index);
  }

  function handleDragOver(index) {
    if (draggingItem === null) return;
    if (draggingItem === index) return;

    const newItems = [...items];
    const draggingItemValue = newItems[draggingItem];
    newItems.splice(draggingItem, 1);
    newItems.splice(index, 0, draggingItemValue);

    setDraggingItem(index);
    setItems(newItems);
  }

  function handleDragEnd() {
    setDraggingItem(null);
  }

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <h2>Drag and drop list</h2>
      <ul style={{ listStyle: 'none', padding: 0 }}>
        {items.map((item, index) => (
          <li
            key={index}
            draggable
            onDragStart={() => handleDragStart(index)}
            onDragOver={() => handleDragOver(index)}
            onDragEnd={handleDragEnd}
            style={{ margin: '10px 0', padding: '10px', border: '1px solid #ccc' }}
          >
           {index+1}. {item}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;
