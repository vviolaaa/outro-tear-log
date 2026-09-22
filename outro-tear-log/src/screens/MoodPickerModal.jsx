import { useState } from 'react';
import MoodOption from '../components/MoodOption';
import Modal from '../components/Modal';
import './MoodPickerModal.css';

import mood01 from '../assets/images/august-d.png';
import mood02 from '../assets/images/gin-pink-gymnast.png';
import mood03 from '../assets/images/j-hope-cool.png';
import mood04 from '../assets/images/jhope-yeah.png';
import mood05 from '../assets/images/jimin-bst.png';
import mood06 from '../assets/images/jin-fire.png';
import mood07 from '../assets/images/jk-carry-jimin.png';
import mood08 from '../assets/images/jk-iconic-by-mistake.png';
import mood09 from '../assets/images/jk-wipes-tears.png';
import mood10 from '../assets/images/pink-jimin.png';
import mood11 from '../assets/images/rm-birthday-boy.png';
import mood12 from '../assets/images/rm-black.png';
import mood13 from '../assets/images/rm-happy.png';
import mood14 from '../assets/images/suga-that-that.png';
import mood15 from '../assets/images/v-kiss-heart.png';
import mood16 from '../assets/images/v-lowkey-cool.png';
import mood17 from '../assets/images/v-military-flowers.png';
import mood18 from '../assets/images/suga-ok.png';

// Ring layout around a centered title: top row, bottom row, and left/right
// columns, leaving the middle open for the heading. Tweak top/left/rotate/
// width/height per item as needed — these are starting guesses.
const MOOD_LAYOUT = [
    // top row
    { id: 'mood-01', image: mood01, label: 'mood-01', top: '6%', left: '-5%', width: 220, height: 220, rotate: 0, z: 2 },
    { id: 'mood-08', image: mood08, label: 'mood-08', top: '23%', left: '9%', width: 170, height: 200, rotate: 0, z: 3 },
    { id: 'mood-16', image: mood16, label: 'mood-16', top: '35%', left: '20%', width: 200, height: 170, rotate: 0, z: 3 },
    { id: 'mood-12', image: mood12, label: 'mood-12', top: '-16%', left: '13%', width: 220, height: 300, rotate: 0, z: 2 },
    { id: 'mood-05', image: mood05, label: 'mood-05', top: '35%', left: '54%', width: 220, height: 170, rotate: 0, z: 2 },

    // left column
    { id: 'mood-06', image: mood06, label: 'mood-06', top: '18%', left: '69%', width: 220, height: 290, rotate: 0, z: 3 },
    { id: 'mood-09', image: mood09, label: 'mood-09', top: '32%', left: '78%', width: 220, height: 180, rotate: -6, z: 3 },
    { id: 'mood-11', image: mood11, label: 'mood-11', top: '1%', left: '64%', width: 220, height: 220, rotate: 0, z: 2 },
    { id: 'mood-04', image: mood04, label: 'mood-04', top: '0%', left: '84%', width: 120, height: 220, rotate: 0, z: 2 },
    // right column
    { id: 'mood-15', image: mood15, label: 'mood-15', top: '1%', left: '34%', width: 120, height: 120, rotate: 0, z: 2 },
    { id: 'mood-18', image: mood18, label: 'mood-18', top: '1%', left: '46%', width: 120, height: 120, rotate: 0, z: 2 },
    { id: 'mood-10', image: mood10, label: 'mood-10', top: '1%', left: '57%', width: 120, height: 120, rotate: 0, z: 3 },
    // bottom row
    { id: 'mood-03', image: mood03, label: 'mood-03', top: '46%', left: '-2%', width: 220, height: 300, rotate: 0, z: 3 },
    { id: 'mood-07', image: mood07, label: 'mood-07', top: '55%', left: '12%', width: 220, height: 250, rotate: 0, z: 2 },
    { id: 'mood-13', image: mood13, label: 'mood-13', top: '60%', left: '28%', width: 220, height: 220, rotate: 0, z: 2 },
    { id: 'mood-14', image: mood14, label: 'mood-14', top: '54%', left: '44%', width: 220, height: 260, rotate: 0, z: 11 },
    { id: 'mood-02', image: mood02, label: 'mood-02', top: '48%', left: '60%', width: 220, height: 300, rotate: 0, z: 3 },
    { id: 'mood-17', image: mood17, label: 'mood-17', top: '60%', left: '77%', width: 220, height: 220, rotate: 0, z: 3 },
];

export const MOOD_IMAGES = Object.fromEntries(
  MOOD_LAYOUT.map((m) => [m.id, m.image])
);

export default function MoodPickerModal({ onSelect }) {
    const [selectedId, setSelectedId] = useState(null);

    const handlePick = (id) => {
        setSelectedId(id);
        onSelect?.(id);
    };

    return (
        <Modal type="collage">
            <div className="mood-picker-collage">
                <h2 className="mood-picker-title">
                    now choose the one that matches your mood
                </h2>
                {MOOD_LAYOUT.map((mood) => (
                    <MoodOption
                        key={mood.id}
                        image={mood.image}
                        label={mood.id}
                        selected={selectedId === mood.id}
                        onClick={() => handlePick(mood.id)}
                        style={{
                            top: mood.top,
                            left: mood.left,
                            width: `${mood.width}px`,
                            height: `${mood.height}px`,
                            zIndex: mood.z,
                            transform: `rotate(${mood.rotate}deg)`,
                            '--rotate': `${mood.rotate}deg`,
                        }}
                    />
                ))}
            </div>
        </Modal>
    );
}