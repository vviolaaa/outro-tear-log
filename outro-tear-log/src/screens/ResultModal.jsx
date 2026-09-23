import { useMemo } from 'react';
import Modal from '../components/Modal';
import { HAPPY_RESULT_QUOTES, SAD_RESULT_QUOTES, pickRandomQuote } from '../utils/quotes';
import './ResultModal.css';

// Turns an option object (or the free-typed reason text) into display text,
// folding in its category the same way the question screens do.
function formatOption(option) {
    if (!option) return null;
    return option.category ? `${option.text} (${option.category})` : option.text;
}

// One playful little icon per survey question, shown on its sticky note.
const SURVEY_ICONS = {
    why: '💭',
    'how long': '⏳',
    'did you eat': '🍜',
    'coping mechanism': '🎧',
};

export default function ResultModal({ entry, onSave, onDiscard, mode = 'save', variant = 'happy' }) {
    const isView = mode === 'view';
    const { moodImage, tags = [], note, reason, duration, ateToday, coping } = entry;
    const hasNote = Boolean(note);

    const footerQuote = useMemo(
        () => pickRandomQuote(variant === 'sad' ? SAD_RESULT_QUOTES : HAPPY_RESULT_QUOTES),
        [variant]
    );

    // Present in the sad flow only — the answers from the "why did you cry /
    // how long has this been building / did you eat today / coping
    // mechanism" screens. Anything not answered (e.g. happy flow skips all
    // of these) is simply left out.
    const surveyAnswers = [
        reason && { label: 'why', value: formatOption(reason) },
        duration && { label: 'how long', value: formatOption(duration) },
        ateToday?.length > 0 && {
            label: 'did you eat',
            value: ateToday.map(formatOption).join(', '),
        },
        coping && { label: 'coping mechanism', value: formatOption(coping) },
    ].filter(Boolean);

    return (
        <Modal onClose={onDiscard}>
            <div className="result-modal">
                <h2 className="result-title">killin' it girl</h2>
                <div className="result-divider" />

                <div className="result-columns">
                    <div className="result-column result-column--reason">
                        <h3 className="result-column-label">cried because:</h3>
                        <div
                            className={`result-reason-box${hasNote ? '' : ' result-reason-box--empty'}`}
                        >
                            {hasNote ? (
                                <p className="result-reason-text">{note}</p>
                            ) : (
                                <p className="result-reason-placeholder">no reason, just vibes ✧</p>
                            )}
                        </div>
                        {tags.length > 0 && (
                            <div className="result-tags">
                                {tags.map((tag) => (
                                    <span key={tag} className="result-tag">
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        )}

                                                {surveyAnswers.length > 0 && (
                            <div className="result-survey">
                                <h3 className="result-column-label">the play-by-play:</h3>
                                <div className="result-survey-cards">
                                    {surveyAnswers.map((answer) => (
                                        <div key={answer.label} className="result-survey-card">
                                            <span className="result-survey-card-label">
                                                <span className="result-survey-emoji" aria-hidden="true">
                                                    {SURVEY_ICONS[answer.label] || '✧'}
                                                </span>
                                                {answer.label}
                                            </span>
                                            <p className="result-survey-card-answer">{answer.value}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}
                    </div>

                    <div className="result-column result-column--mood">
                        <h3 className="result-column-label">feel like:</h3>
                        <div className="result-sticker-wrap">
                            <span className="result-star result-star--1">★</span>
                            <span className="result-star result-star--2">★</span>
                            <span className="result-star result-star--3">★</span>
                            <span className="result-star result-star--4">★</span>
                            <span className="result-star result-star--5">★</span>
                            <span className="result-star result-star--6">★</span>
                            <span className="result-star result-star--7">★</span>
                            <span className="result-star result-star--8">★</span>
                            <span className="result-star result-star--9">★</span>
                            <span className="result-star result-star--10">★</span>
                            {moodImage && (
                                <img src={moodImage} alt="mood" className="result-sticker" />
                            )}
                        </div>
                    </div>
                </div>

                <p className="result-footer-note">
                    {footerQuote}
                </p>

                <div className="result-actions">
                    {!isView && (
                        <button className="result-btn result-btn--save" onClick={onSave}>
                            save
                        </button>
                    )}
                    <button className="result-btn result-btn--no" onClick={onDiscard}>
                        {isView ? 'close' : 'no'}
                    </button>
                </div>
            </div>
        </Modal>
    );
}