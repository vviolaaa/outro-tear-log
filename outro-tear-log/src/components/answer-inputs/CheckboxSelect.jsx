// Multi-select checkbox group. value is an array of option ids.
export default function CheckboxSelect({ options, value = [], onChange }) {
  const toggle = (id) => {
    onChange(value.includes(id) ? value.filter((v) => v !== id) : [...value, id]);
  };

  return (
    <div className="qm-checkbox-group">
      {options.map((option) => {
        const selected = value.includes(option.id);
        return (
          <label
            key={option.id}
            className={`qm-checkbox-option${selected ? ' qm-checkbox-option--selected' : ''}`}
          >
            <input
              type="checkbox"
              className="qm-checkbox-input"
              checked={selected}
              onChange={() => toggle(option.id)}
            />
            <span className="qm-checkbox-box">✓</span>
            <span className="qm-checkbox-text">
              {option.text}
              {option.category && ` (${option.category})`}
            </span>
          </label>
        );
      })}
    </div>
  );
}