// Single-select radio group.
export default function RadioSelect({ options, value, onChange, name = 'qm-radio' }) {
  return (
    <div className="qm-radio-group" role="radiogroup">
      {options.map((option) => {
        const selected = value === option.id;
        return (
          <label
            key={option.id}
            className={`qm-radio-option${selected ? ' qm-radio-option--selected' : ''}`}
          >
            <input
              type="radio"
              name={name}
              className="qm-radio-input"
              checked={selected}
              onChange={() => onChange(option.id)}
            />
            <span className="qm-radio-dot" />
            <span className="qm-radio-text">
              {option.text}
              {option.category && ` (${option.category})`}
            </span>
          </label>
        );
      })}
    </div>
  );
}