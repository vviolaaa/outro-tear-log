import { useState } from 'react';
import MoodOption from '../components/MoodOption';
import Modal from '../components/Modal';
import './MoodPickerModal.css';

// ============================================================
// HAPPY MOOD IMAGES
// ============================================================

import augustD from '../assets/images/august-d.png';
import ginPinkGymnast from '../assets/images/gin-pink-gymnast.png';
import jHopeCool from '../assets/images/j-hope-cool.png';
import jHopeYeah from '../assets/images/jhope-yeah.png';
import jiminBst from '../assets/images/jimin-bst.png';
import jinFire from '../assets/images/jin-fire.png';
import jkCarryJimin from '../assets/images/jk-carry-jimin.png';
import jkIconicByMistake from '../assets/images/jk-iconic-by-mistake.png';
import jkWipesTears from '../assets/images/jk-wipes-tears.png';
import pinkJimin from '../assets/images/pink-jimin.png';
import rmBirthdayBoy from '../assets/images/rm-birthday-boy.png';
import rmBlack from '../assets/images/rm-black.png';
import rmHappy from '../assets/images/rm-happy.png';
import sugaThatThat from '../assets/images/suga-that-that.png';
import vKissHeart from '../assets/images/v-kiss-heart.png';
import vLowkeyCool from '../assets/images/v-lowkey-cool.png';
import vMilitaryFlowers from '../assets/images/v-military-flowers.png';
import sugaOk from '../assets/images/suga-ok.png';

// ============================================================
// SAD MOOD IMAGES
// ============================================================

import vCryingRed from '../assets/images/v-crying-red.png';
import jkCryingGlasses from '../assets/images/jk-crying-glasses.png';
import vJiminHug from '../assets/images/v-jimin-hug.png';
import jkSitsCrying from '../assets/images/jk-sits-crying.png';
import sugaCryingGuitar from '../assets/images/suga-crying-guitar.png';
import hobiCryingBlack from '../assets/images/hobi-crying-black.png';
import jinCrying from '../assets/images/jin-crying.png';
import vWatermelon from '../assets/images/v-watermelon.png';
import hobiCryingWhite from '../assets/images/hobi-crying-white.png';
import jiminCryingWhite from '../assets/images/jimin-crying-white.png';
import rmCryingRed from '../assets/images/rm-crying-red.png';
import yoongiGlass from '../assets/images/yoongi-glass.png';
import jiminHajima from '../assets/images/jimin-hajima.png';
import jinWing from '../assets/images/jin-wing.png';
import rmPraying from '../assets/images/rm-praying.png';
import jiminCurious from '../assets/images/jimin-curious.png';
import jkMonkey from '../assets/images/jk-monkey.png';
import augustDDgaf from '../assets/images/august-d-dgaf.png';

// ============================================================
// HAPPY MOOD LAYOUT
// ============================================================

export const HAPPY_MOOD_LAYOUT = [
    { name: 'august-d.png', image: augustD, top: '6%', left: '-5%', width: 220, height: 220, rotate: 0, z: 2 },
    { name: 'gin-pink-gymnast.png', image: ginPinkGymnast, top: '48%', left: '60%', width: 220, height: 300, rotate: 0, z: 3 },
    { name: 'j-hope-cool.png', image: jHopeCool, top: '46%', left: '-2%', width: 220, height: 300, rotate: 0, z: 3 },
    { name: 'jhope-yeah.png', image: jHopeYeah, top: '0%', left: '84%', width: 120, height: 220, rotate: 0, z: 2 },
    { name: 'jimin-bst.png', image: jiminBst, top: '35%', left: '54%', width: 220, height: 170, rotate: 0, z: 2 },
    { name: 'jin-fire.png', image: jinFire, top: '18%', left: '69%', width: 220, height: 290, rotate: 0, z: 3 },
    { name: 'jk-carry-jimin.png', image: jkCarryJimin, top: '55%', left: '12%', width: 220, height: 250, rotate: 0, z: 2 },
    { name: 'jk-iconic-by-mistake.png', image: jkIconicByMistake, top: '23%', left: '9%', width: 170, height: 200, rotate: 0, z: 3 },
    { name: 'jk-wipes-tears.png', image: jkWipesTears, top: '32%', left: '78%', width: 220, height: 180, rotate: -6, z: 3 },
    { name: 'pink-jimin.png', image: pinkJimin, top: '1%', left: '57%', width: 120, height: 120, rotate: 0, z: 3 },
    { name: 'rm-birthday-boy.png', image: rmBirthdayBoy, top: '1%', left: '64%', width: 220, height: 220, rotate: 0, z: 2 },
    { name: 'rm-black.png', image: rmBlack, top: '-16%', left: '13%', width: 220, height: 300, rotate: 0, z: 2 },
    { name: 'rm-happy.png', image: rmHappy, top: '60%', left: '28%', width: 220, height: 220, rotate: 0, z: 2 },
    { name: 'suga-that-that.png', image: sugaThatThat, top: '54%', left: '44%', width: 220, height: 260, rotate: 0, z: 11 },
    { name: 'v-kiss-heart.png', image: vKissHeart, top: '1%', left: '34%', width: 120, height: 120, rotate: 0, z: 2 },
    { name: 'v-lowkey-cool.png', image: vLowkeyCool, top: '35%', left: '20%', width: 200, height: 170, rotate: 0, z: 3 },
    { name: 'v-military-flowers.png', image: vMilitaryFlowers, top: '60%', left: '77%', width: 220, height: 220, rotate: 0, z: 3 },
    { name: 'suga-ok.png', image: sugaOk, top: '1%', left: '46%', width: 120, height: 120, rotate: 0, z: 2 },
];

// ============================================================
// SAD MOOD LAYOUT
// ============================================================

export const SAD_MOOD_LAYOUT = [
    { name: 'v-crying-red.png', image: vCryingRed, top: '53%', left: '5%', width: 250, height: 270, rotate: 0, z: 2 },
    { name: 'jk-crying-glasses.png', image: jkCryingGlasses, top: '50%', left: '76%', width: 210, height: 280, rotate: 0, z: 2 },
    { name: 'v-jimin-hug.png', image: vJiminHug, top: '0%', left: '-3%', width: 150, height: 190, rotate: 0, z: 2 },
    { name: 'jk-sits-crying.png', image: jkSitsCrying, top: '25%', left: '22%', width: 140, height: 220, rotate: 0, z: 4 },
    { name: 'suga-crying-guitar.png', image: sugaCryingGuitar, top: '10%', left: '3%', width: 220, height: 250, rotate: -3, z: 3 },
    { name: 'hobi-crying-black.png', image: hobiCryingBlack, top: '55%', left: '21%', width: 220, height: 250, rotate: 0, z: 4 },
    { name: 'jin-crying.png', image: jinCrying, top: '50%', left: '47%', width: 250, height: 280, rotate: 0, z: 3 },
    { name: 'v-watermelon.png', image: vWatermelon, top: '-2%', left: '75%', width: 150, height: 220, rotate: 5, z: 2 },
    { name: 'hobi-crying-white.png', image: hobiCryingWhite, top: '0%', left: '59%', width: 210, height: 180, rotate: 0, z: 3 },
    { name: 'jimin-crying-white.png', image: jiminCryingWhite, top: '55%', left: '33%', width: 250, height: 250, rotate: 0, z: 2 },
    { name: 'rm-crying-red.png', image: rmCryingRed, top: '50%', left: '-9%', width: 250, height: 370, rotate: 4, z: 1 },
    { name: 'yoongi-glass.png', image: yoongiGlass, top: '5%', left: '78%', width: 220, height: 270, rotate: 0, z: 2 },
    { name: 'jimin-hajima.png', image: jiminHajima, top: '-2%', left: '84%', width: 170, height: 200, rotate: 0, z: 1 },
    //{ name: 'jin-wing.png', image: jinWing, top: '52%', left: '14%', width: 220, height: 260, rotate: -4, z: 2 },
    { name: 'rm-praying.png', image: rmPraying, top: '0%', left: '14%', width: 200, height: 200, rotate: 0, z: 2 },
    //{ name: 'jimin-curious.png', image: jiminCurious, top: '50%', left: '46%', width: 220, height: 190, rotate: -6, z: 11 },
    { name: 'jk-monkey.png', image: jkMonkey, top: '19%', left: '60%', width: 220, height: 210, rotate: 4, z: 3 },
    { name: 'august-d-dgaf.png', image: augustDDgaf, top: '37%', left: '60%', width: 250, height: 350, rotate: 0, z: 3 },
];

// ============================================================
// COMBINED IMAGE LOOKUP
// ============================================================

export const MOOD_IMAGES = Object.fromEntries(
    [...HAPPY_MOOD_LAYOUT, ...SAD_MOOD_LAYOUT].map((mood) => [
        mood.name,
        mood.image,
    ])
);

// ============================================================
// MODAL
// ============================================================

export default function MoodPickerModal({
    layout = HAPPY_MOOD_LAYOUT,
    title = 'now choose the one that matches your mood',
    onSelect,
    onClose,
}) {
    const [selectedId, setSelectedId] = useState(null);

    const handlePick = (name) => {
        setSelectedId(name);
        onSelect?.(name);
    };

    return (
        <Modal type="collage" onClose={onClose}>
            <div className="mood-picker-collage">
                <h2 className="mood-picker-title">
                    {title}
                </h2>

                {layout.map((mood) => (
                    <MoodOption
                        key={mood.name}
                        image={mood.image}
                        label={mood.name}
                        selected={selectedId === mood.name}
                        onClick={() => handlePick(mood.name)}
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