import './MoodOption.css';

export default function MoodOption({ image, label, selected, onClick, style }) {
  return (
    <button
      className={`mood-option ${selected ? 'mood-option--selected' : ''}`}
      style={style}
      onClick={() => onClick?.(label)}
      aria-label={label}
    >
      <img src={image} alt={label} className="mood-option__image" />
    </button>
  );
}