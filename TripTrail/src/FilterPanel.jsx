export default function FilterPanel({ statusFilter, setStatusFilter, continents, continentFilter, setContinentFilter }) {
  return (
    <div className="p-4 flex flex-col space-y-2 sm:flex-row sm:space-y-0 sm:space-x-4">
      <select value={statusFilter} onChange={e=>setStatusFilter(e.target.value)} className="p-2 border rounded">
        <option value="all">All</option>
        <option value="visited">Visited</option>
        <option value="notYet">Not Yet</option>
      </select>
      <select multiple value={continentFilter} onChange={e=>{
        const opts = Array.from(e.target.selectedOptions).map(o=>o.value);
        setContinentFilter(opts);
      }} className="p-2 border rounded">
        {continents.map(c=> <option key={c} value={c}>{c}</option>)}
      </select>
    </div>
  );
}
