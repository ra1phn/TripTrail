import "./ProgressBar.css";

function ProgressBar({ label, total, completed }) {
  const totalTrips = parseInt(total);
  const completedTrips = parseInt(completed);
  const percent = Math.min((completedTrips / totalTrips) * 100, 100);

  return (
    <div className="progress-wrapper">
      <p><strong>{label}</strong> {completedTrips}/{totalTrips} trips</p>
      <div className="progress-bar">
        <div className="progress-fill" style={{ width: `${percent}%` }}></div>
      </div>
    </div>
  );
}

export default ProgressBar;
