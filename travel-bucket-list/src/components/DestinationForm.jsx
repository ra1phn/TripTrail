import { useState } from "react";

function DestinationForm({ onAdd }) {
  const [formData, setFormData] = useState({
    name: "",
    country: "",
    description: "",
    image: "",
    status: "Not Yet",
  });

  function handleChange(e) {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    onAdd(formData);
    setFormData({ name: "", country: "", description: "", image: "", status: "Not Yet" });
  }

  return (
    <form onSubmit={handleSubmit}>
      <input name="name" placeholder="Destination Name" value={formData.name} onChange={handleChange} />
      <input name="country" placeholder="Country" value={formData.country} onChange={handleChange} />
      <textarea name="description" placeholder="Description" value={formData.description} onChange={handleChange} />
      <input name="image" placeholder="Image URL" value={formData.image} onChange={handleChange} />
      <select name="status" value={formData.status} onChange={handleChange}>
        <option value="Visited">Visited</option>
        <option value="Not Yet">Not Yet</option>
      </select>
      <button type="submit">Add Destination</button>
    </form>
  );
}

export default DestinationForm;