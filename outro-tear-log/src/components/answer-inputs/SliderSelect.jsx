import { useState } from 'react';

// Single-select slider. Drags across discrete steps, one per option, and
// shows the currently-highlighted option's text above the track. Nothing
// counts as "answered" until the person actually touches it.
export default function SliderSelect({ options, value, onChange }) {
  const initialIndex = Math.max(0, Math.floor((options.length - 1) / 2));
  const valueIndex = options.findIndex((o) => o.id === value);
  const [touched, setTouched] = useState(valueIndex !== -1);
  const activeIndex = valueIndex !== -1 ? valueIndex : initialIndex;
  const current = options[activeIndex];

  const handleChange = (e) => {
    const i = Number(e.target.value);
    setTouched(true);
    onChange(options[i].id);
  };

  const pick = (i) => {
    setTouched(true);
    onChange(options[i].id);
  };

  return (
    <div className="qm-slider">
      <div className={`qm-slider-current${touched ? '' : ' qm-slider-current--placeholder'}`}>
        {touched ? (
          <>
            {current.text}
            {current.category && ` (${current.category})`}
          </>
        ) : (
          'slide to answer →'
        )}
      </div>

      <input
        type="range"
        className="qm-slider-input"
        min={0}
        max={options.length - 1}
        step={1}
        value={activeIndex}
        onChange={handleChange}
        style={{ '--qm-slider-percent': `${(activeIndex / (options.length - 1)) * 100}%` }}
      />

      <div className="qm-slider-ticks">
        {options.map((option, i) => (
          <button
            type="button"
            key={option.id}
            className={`qm-slider-tick${touched && i === activeIndex ? ' qm-slider-tick--active' : ''}`}
            onClick={() => pick(i)}
            aria-label={option.text}
          >
            {i + 1}
          </button>
        ))}
      </div>
    </div>
  );
}