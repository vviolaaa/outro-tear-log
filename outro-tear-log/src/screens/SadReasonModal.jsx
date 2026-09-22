import { useState } from 'react';
import Modal from '../components/Modal';
import './SadReasonModal.css';

import rmBlack from '../assets/images/rm-curious.png';

// Same idea as the other layout arrays: absolutely positioned within a
// relative container so it's placed the same way as everywhere else.
const REASON_LAYOUT = [
  { id: 'sticker', image: rmBlack, label: 'sticker', top: '10%', left: '60%', width: 180, height: 220, rotate: 0, z: 2 },
];

const REASON_OPTIONS = [
  { id: 'fake-love', text: "I'm so sick of this fake love", category: 'work/university' },
  { id: 'lonely', text: "I'm fucking lonely", category: 'a person' },
  { id: 'money', text: 'Money, money, money', category: 'money' },
  { id: 'mikrokosmos', text: 'Mikrokosmos malfunction', category: '' },
  { id: 'black-swan', text: 'Black Swan has entered the chat', category: 'no idea' },
];

export default function SadReasonModal({ onBack, onNext }) {
  const [selectedId, setSelectedId] = useState(null);

  return (
    <Modal>
      <div className="sad-reason-modal">
        <h2 className="sad-reason-title">let`s talk the talk and walk the walk i guess</h2>
        <div className="sad-reason-divider" />

        <div className="sad-reason-box">
          <div className="sad-reason-sticker-wrap">
            {REASON_LAYOUT.map((item) => (
              <img
                key={item.id}
                src={item.image}
                alt={item.label}
                className="sad-reason-photo"
                style={{
                  top: item.top,
                  left: item.left,
                  width: `${item.width}px`,
                  height: `${item.height}px`,
                  zIndex: item.z,
                  transform: `rotate(${item.rotate}deg)`,
                }}
              />
            ))}
          </div>

          <h3 className="sad-reason-question">why did you cry?</h3>
          <ul className="sad-reason-list">
            {REASON_OPTIONS.map((option) => (
              <li key={option.id}>
                <button
                  type="button"
                  className={`sad-reason-option${
                    selectedId === option.id ? ' sad-reason-option--selected' : ''
                  }`}
                  onClick={() => setSelectedId(option.id)}
                >
                  {option.text}
                  {option.category && ` (${option.category})`}
                </button>
              </li>
            ))}
          </ul>
        </div>

        <div className="sad-reason-actions">
          <button className="sad-reason-btn sad-reason-btn--back" onClick={onBack}>
            back
          </button>
          <button
            className="sad-reason-btn sad-reason-btn--next"
            disabled={!selectedId}
            onClick={() => onNext?.(selectedId)}
          >
            next
          </button>
        </div>
      </div>
    </Modal>
  );
}