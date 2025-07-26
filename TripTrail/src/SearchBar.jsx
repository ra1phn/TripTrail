import { useState, useEffect } from 'react';
export default function SearchBar({ onSearch }) {
  const [text, setText] = useState('');
  useEffect(() => {
    const id = setTimeout(() => onSearch(text), 250);
    return () => clearTimeout(id);
  }, [text]);
  return (
    <div className="p-4 flex items-center">
      <input
        value={text}
        onChange={e => setText(e.target.value)}
        placeholder="Search destinations..."
        className="flex-grow p-2 border rounded"
      />
      {text && <button onClick={()=>setText('')} className="ml-2">Clear</button>}
    </div>
  );
}