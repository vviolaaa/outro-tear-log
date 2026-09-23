import Modal from '../components/Modal';
import './ComfortModal.css';

import rm from '../assets/images/rm-naked.png';
import jin from '../assets/images/jin-naked.png';
import suga from '../assets/images/yoongi-naked.png';
import jhope from '../assets/images/hobi-naked.png';
import jimin from '../assets/images/jimin-naked.png';
import v from '../assets/images/v-naked.png';
import jk from '../assets/images/jk-naked.png';

// Same idea as MOOD_LAYOUT in MoodPickerModal: absolutely positioned within
// a relative container, left-to-right lineup order. Tweak top/left/rotate/
// width/height per item as needed — these are starting guesses.
const COMFORT_LAYOUT = [
  { id: 'rm', image: rm, label: 'rm', top: '20%', left: '-2%', width: 160, height: 260, rotate: 0, z: 2 },
  { id: 'jin', image: jin, label: 'jin', top: '24%', left: '81%', width: 160, height: 250, rotate: 0, z: 3 },
  { id: 'suga', image: suga, label: 'suga', top: '24%', left: '68%', width: 175, height: 250, rotate: 0, z: 3 },
  { id: 'jhope', image: jhope, label: 'jhope', top: '10%', left: '56%', width: 180, height: 290, rotate: 0, z: 2 },
  { id: 'jimin', image: jimin, label: 'jimin', top: '14%', left: '13%', width: 155, height: 280, rotate: 0, z: 2 },
  { id: 'v', image: v, label: 'v', top: '20%', left: '45%', width: 160, height: 260, rotate: 0, z: 1 },
  { id: 'jk', image: jk, label: 'jk', top: '17%', left: '26%', width: 200, height: 270, rotate: 0, z: 3 },
];

export default function ComfortModal({ onAnswer, onClose }) {
  return (
    <Modal type="comfort" onClose={onClose}>
      <div className="comfort-modal">
        <h2 className="comfort-title">to make you feel a little better</h2>

        <div className="comfort-lineup">
          {COMFORT_LAYOUT.map((member) => (
            <img
              key={member.id}
              src={member.image}
              alt={member.label}
              className="comfort-photo"
              style={{
                top: member.top,
                left: member.left,
                width: `${member.width}px`,
                height: `${member.height}px`,
                zIndex: member.z,
                transform: `rotate(${member.rotate}deg)`,
              }}
            />
          ))}
        </div>

        <div className="comfort-divider" />

        <div className="comfort-actions">
          <button
            className="comfort-btn comfort-btn--thanks"
            onClick={() => onAnswer?.('thanks')}
          >
            thanks
          </button>
          <button
            className="comfort-btn comfort-btn--best"
            onClick={() => onAnswer?.('best')}
          >
            you're the best
          </button>
        </div>
      </div>
    </Modal>
  );
}