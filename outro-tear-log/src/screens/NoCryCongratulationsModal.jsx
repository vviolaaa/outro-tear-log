import { useState } from 'react';
import Modal from '../components/Modal';
import './NoCryCongratulationsModal.css';

import rm from '../assets/images/rm-congrats.png';
import jin from '../assets/images/jin-congrats.png';
import suga from '../assets/images/suga-congrats.png';
import jhope from '../assets/images/jhope-congrats.png';
import jimin from '../assets/images/jimin-congrats.png';
import v from '../assets/images/v-congrats.png';
import jk from '../assets/images/jk-congrats.png';

const BTS_MEMBERS = [
    { name: 'RM', image: rm },
    { name: 'Jin', image: jin },
    { name: 'SUGA', image: suga },
    { name: 'j-hope', image: jhope },
    { name: 'Jimin', image: jimin },
    { name: 'V', image: v },
    { name: 'Jungkook', image: jk },
];

export default function NoCryCongratulationsModal({ onClose }) {
    const [member] = useState(
        () => BTS_MEMBERS[Math.floor(Math.random() * BTS_MEMBERS.length)]
    );

    return (
        <Modal onClose={onClose}>
            <div className="no-cry-modal">
                <div className="no-cry-member">
                    <img
                        src={member.image}
                        alt={member.name}
                        className="no-cry-member-image"
                    />
                </div>

                <div className="no-cry-content">
                    <p className="no-cry-small-text">official announcement</p>

                    <h2 className="no-cry-title">
                        YOLO, YOLO, YOLO YEAH!
                    </h2>

                    <p className="no-cry-message">
                        {member.name} would like to congratulate you on
                        <br />
                        making it through today without crying.
                    </p>

                    <p className="no-cry-subtext">
                        honestly? impressive. Yet to Cry.
                    </p>

                    <button
                        type="button"
                        className="no-cry-btn"
                        onClick={onClose}
                    >
                        thank you, {member.name}
                    </button>
                </div>
            </div>
        </Modal>
    );
}