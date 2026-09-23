import Modal from '../components/Modal';
import './ResultModal.css';

// Turns an option object (or the free-typed reason text) into display text,
// folding in its category the same way the question screens do.
function formatOption(option) {
    if (!option) return null;
    return option.category ? `${option.text} (${option.category})` : option.text;
}

export default function ResultModal({ entry, onSave, onDiscard }) {
    const { moodImage, tags = [], note, reason, duration, ateToday, coping } = entry;
    const hasNote = Boolean(note);

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
                    <div className="result-column">
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
                                <ul className="result-survey-list">
                                    {surveyAnswers.map((answer) => (
                                        <li key={answer.label} className="result-survey-item">
                                            <span className="result-survey-q">{answer.label}:</span>{' '}
                                            {answer.value}
                                        </li>
                                    ))}
                                </ul>
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
                    now put your phone down and get all the fun!
                </p>

                <div className="result-actions">
                    <button className="result-btn result-btn--save" onClick={onSave}>
                        save
                    </button>
                    <button className="result-btn result-btn--no" onClick={onDiscard}>
                        no
                    </button>
                </div>
            </div>
        </Modal>
    );
}