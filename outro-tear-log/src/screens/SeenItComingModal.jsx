import Modal from '../components/Modal';
import './SeenItComingModal.css';

import jiminCurious from '../assets/images/jimin-curious.png';

// Same idea as MOOD_LAYOUT / COMFORT_LAYOUT: absolutely positioned within a
// relative container. Only one sticker here, but kept as a layout array so
// it's placed the same way as everywhere else. Tweak top/left/rotate/
// width/height as needed — these are starting guesses.
const SEEN_IT_LAYOUT = [
    { id: 'reaction', image: jiminCurious, label: 'reaction', top: '11%', left: '65%', width: 220, height: 260, rotate: 0, z: 2 },
];

export default function SeenItComingModal({ onAnswer, onClose }) {
    return (
        <Modal type="seenItComing" onClose={onClose}>
            <div className="seen-it-modal">
                <div className="seen-it-sticker-wrap">
                    {SEEN_IT_LAYOUT.map((item) => (
                        <img
                            key={item.id}
                            src={item.image}
                            alt={item.label}
                            className="seen-it-photo"
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

                    <span className="seen-it-flower seen-it-flower--1">🦋</span>
                    <span className="seen-it-flower seen-it-flower--2">🦋</span>
                    <span className="seen-it-flower seen-it-flower--3">🦋</span>
                    <span className="seen-it-flower seen-it-flower--4">🦋</span>
                    <span className="seen-it-flower seen-it-flower--5">🦋</span>
                    <span className="seen-it-flower seen-it-flower--6">🦋</span>
                    <span className="seen-it-flower seen-it-flower--7">🦋</span>
                    <span className="seen-it-flower seen-it-flower--8">🦋</span>
                    <span className="seen-it-flower seen-it-flower--9">🦋</span>
                    <span className="seen-it-flower seen-it-flower--10">🦋</span>
                </div>

                <h2 className="seen-it-question">did you see it coming?</h2>
                <div className="seen-it-divider" />

                <div className="seen-it-actions">
                    <button
                        className="seen-it-btn seen-it-btn--yes"
                        onClick={() => onAnswer?.(true)}
                    >
                        yes
                    </button>
                    <button
                        className="seen-it-btn seen-it-btn--no"
                        onClick={() => onAnswer?.(false)}
                    >
                        no
                    </button>
                </div>
            </div>
        </Modal>
    );
}