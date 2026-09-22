import './TagChip.css';

export default function TagChip({ label, selected, onClick }) {
  return (
    <button
      className={`tag-chip ${selected ? 'tag-chip--selected' : ''}`}
      onClick={() => onClick?.(label)}
    >
      {label}
    </button>
  );
}