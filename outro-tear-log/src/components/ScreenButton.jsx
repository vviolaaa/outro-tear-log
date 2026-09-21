import './ScreenButton.css';

export default function ScreenButton({ label, onClick }) {
  return (
    <button className="screen-button" onClick={onClick}>
      {label}
    </button>
  );
}