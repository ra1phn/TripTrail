import { useParams, useNavigate } from 'react-router-dom';
import AddDestinationForm from './AddDestinationForm';
export default function DestinationDetail({ destinations, onUpdate }) {
  const { id } = useParams();
  const dest = destinations.find(d=>d.id===id);
  const nav = useNavigate();
  if(!dest) return <p>Not found</p>;
  return (
    <div className="p-4">
      <button onClick={()=>nav(-1)} className="mb-4">← Back</button>
      <img src={dest.imageURL} alt={dest.name} className="w-full h-64 object-cover rounded" />
      <h1 className="text-2xl my-2">{dest.name}, {dest.country}</h1>
      <p className="mb-4">{dest.description}</p>
      <AddDestinationForm initialData={dest} onSubmit={data=>onUpdate(dest.id, data)} />
    </div>
  );
}