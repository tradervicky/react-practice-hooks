import React, { useState } from 'react';

const App = () => {
  const items = ["Ram", "Sita", "Hanuman", "Krishna", "Vishnu", "Durga", "Kali", "Mahadev", "Ganesha", "Kartik", "Chathi maiya", "Budhia mai"];

  const [search, setSearch] = useState("");
  const filteredGod = items.filter((item) =>
    item.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div >
      <div>
      <input type="text" placeholder="Search God" onChange={(e) => setSearch(e.target.value)} />

      <h4>Search Results</h4>
      {filteredGod.map((god, index) => (
        <p key={index}>{index + 1}. {god}</p>
      ))}

      <h4>Total God List</h4>
      {items.map((god, index) => (
        <p key={index}>{index + 1}. {god}</p>
      ))}
      </div>
    </div>
  );
};

export default App;
