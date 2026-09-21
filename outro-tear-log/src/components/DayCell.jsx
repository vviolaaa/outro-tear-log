import './DayCell.css';

export default function DayCell({ day, hasEntry, onClick }) {
  if (day === null) {
    return <div className="day-cell day-cell--empty-slot" />;
  }

  return (
    <button
      className={`day-cell ${hasEntry ? 'day-cell--logged' : ''}`}
      onClick={() => onClick?.(day)}
    >
      <span className="day-cell__number">{day}</span>
      {hasEntry && <span className="day-cell__dot" />}
    </button>
  );
}