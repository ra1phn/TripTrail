import "./FilterPanel.css";

export default function FilterPanel({
  statusFilter,
  setStatusFilter,
  continents = [],
  continentFilter,
  setContinentFilter,
}) {
  const handleContinentChange = (e) => {
    const selectedOptions = Array.from(e.target.selectedOptions).map(option => option.value);
    setContinentFilter(selectedOptions);
  };

  return (
    <div className="filter-panel">
      <select
        value={statusFilter}
        onChange={(e) => setStatusFilter(e.target.value)}
      >
        <option value="all">All</option>
        <option value="Visited">Visited</option>
        <option value="Not Yet">Not Yet</option>
      </select>


    </div>
  );
}
