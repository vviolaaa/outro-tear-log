// Single-select bullet list — the original "why did you cry?" style.
export default function ListSelect({ options, value, onChange }) {
  return (
    <ul className="qm-list">
      {options.map((option) => (
        <li key={option.id}>
          <button
            type="button"
            className={`qm-list-option${value === option.id ? ' qm-list-option--selected' : ''}`}
            onClick={() => onChange(option.id)}
          >
            {option.text}
            {option.category && ` (${option.category})`}
          </button>
        </li>
      ))}
    </ul>
  );
}