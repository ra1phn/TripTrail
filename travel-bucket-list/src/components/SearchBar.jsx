import { useState, useEffect } from 'react';
import "./SearchBar.css";

export default function SearchBar({ onSearch }) {
  const [text, setText] = useState('');

  useEffect(() => {
    const id = setTimeout(() => onSearch(text), 250);
    return () => clearTimeout(id);
  }, [text, onSearch]);

  return (
    <div className="search-bar-container">
      <input
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Search destinations..."
        className="search-input"
      />
      {text && (
        <button onClick={() => setText('')} className="clear-btn">
          Clear
        </button>
      )}
    </div>
  );
}

