import Modal from '../components/Modal';
import './ResultModal.css';

export default function ResultModal({ entry, onSave, onDiscard }) {
  const { moodImage, tags = [], note } = entry;

  return (
    <Modal>
      <div className="result-modal">
        <h2 className="result-title">killin' it girl</h2>
        <div className="result-divider" />

        <div className="result-columns">
          <div className="result-column">
            <h3 className="result-column-label">cried because:</h3>
            <div className="result-reason-box">
              {note ? (
                <p className="result-reason-text">{note}</p>
              ) : (
                <p className="result-reason-placeholder">reason</p>
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
          </div>

          <div className="result-column result-column--mood">
            <h3 className="result-column-label">feel like:</h3>
            <div className="result-sticker-wrap">
              {moodImage && (
                <img src={moodImage} alt="mood" className="result-sticker" />
              )}
              <span className="result-star result-star--1">★</span>
              <span className="result-star result-star--2">★</span>
              <span className="result-star result-star--3">★</span>
              <span className="result-star result-star--4">★</span>
              <span className="result-star result-star--5">★</span>
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