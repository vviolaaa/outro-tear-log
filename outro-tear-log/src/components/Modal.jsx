import { useEffect } from 'react';
import './Modal.css';

export default function Modal({ children, type, onClose }) {
  // Escape key closes the modal, same as clicking outside or the × button.
  useEffect(() => {
    if (!onClose) return undefined;
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  // Only fire when the overlay itself was clicked, not something inside the
  // card bubbling up.
  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) onClose?.();
  };

  return (
    <div className="modal-overlay" onClick={onClose ? handleOverlayClick : undefined}>
      <div className={`modal-card ${type ? `modal-card--${type}` : ''}`}>
        {onClose && (
          <button
            type="button"
            className="modal-close-btn"
            onClick={onClose}
            aria-label="Close"
          >
            ×
          </button>
        )}
        {children}
        </div>
    </div>
  );
}