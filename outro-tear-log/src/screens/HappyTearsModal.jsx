import Modal from '../components/Modal';
import './HappyTearsModal.css';

export default function HappyTearsModal({ onAnswer, onClose }) {
  return (
    <Modal onClose={onClose}>
      <h2 className="happy-tears-question">happy tears?</h2>

      <div className="happy-tears-divider" />

      <div className="happy-tears-decoration">
        <span>✦</span>
        <span>🦋</span>
        <span>♡</span>
        <span className="happy-tears-note">2! 3! and a tissue</span>
      </div>

      <div className="happy-tears-actions">
        <button className="happy-tears-btn happy-tears-btn--yes" onClick={() => onAnswer(true)}>
          yes
        </button>

        <button className="happy-tears-btn happy-tears-btn--no" onClick={() => onAnswer(false)}>
          no
        </button>
      </div>
    </Modal>
  );
}