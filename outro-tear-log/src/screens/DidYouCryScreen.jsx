import ScreenButton from '../components/ScreenButton';
import './DidYouCryScreen.css';

export default function DidYouCryScreen({ onAnswer }) {
  return (
    <div className="did-you-cry-screen">
      <h1 className="prompt-title">
        <span className="prompt-dot">◆</span> Did you cry today?
      </h1>
      <div className="prompt-card">
        <ScreenButton label="Yes" onClick={() => onAnswer(true)} />
        <ScreenButton label="No no, not today" onClick={() => onAnswer(false)} />
      </div>
    </div>
  );
}