import './DayCell.css';

export default function DayCell({ day, hasEntry, index = 0, onClick }) {
  if (day === null) {
    return <div className="day-cell day-cell--empty-slot" />;
  }

  return (
    <button
      className={`day-cell ${hasEntry ? 'day-cell--logged' : ''}`}
      style={{ '--cell-delay': `${index * 15}ms` }}
      onClick={() => onClick?.(day)}
    >
      <span className="day-cell__number">{day}</span>
      {hasEntry && (
        <span className="day-cell__badge" aria-label="logged today">
          💧
        </span>
      )}
    </button>
  );
}