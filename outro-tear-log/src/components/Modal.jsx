import './Modal.css';

export default function Modal({ children, type }) {
  return (
    <div className="modal-overlay">
      <div className={`modal-card ${type ? `modal-card--${type}` : ''}`}>
        {children}
        </div>
    </div>
  );
}