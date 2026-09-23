import { useState } from 'react';
import ScreenButton from '../components/ScreenButton';
import NoCryCongratulationsModal from './NoCryCongratulationsModal';
import './DidYouCryScreen.css';

export default function DidYouCryScreen({ onAnswer }) {
  const [showCongratulations, setShowCongratulations] = useState(false);

  const handleNo = () => {
    setShowCongratulations(true);
  };

  const handleCongratulationsClose = () => {
    setShowCongratulations(false);
    onAnswer(false);
  };

  return (
    <div className="did-you-cry-screen">

      <span className="cry-screen-butterfly cry-screen-butterfly--1">🦋</span>
      <span className="cry-screen-butterfly cry-screen-butterfly--2">🦋</span>
      <span className="cry-screen-butterfly cry-screen-butterfly--3">🦋</span>
      <span className="cry-screen-butterfly cry-screen-butterfly--4">🦋</span>
      <span className="cry-screen-butterfly cry-screen-butterfly--5">🦋</span>
      <span className="cry-screen-butterfly cry-screen-butterfly--6">🦋</span>
      <span className="cry-screen-butterfly cry-screen-butterfly--7">🦋</span>
      <span className="cry-screen-butterfly cry-screen-butterfly--8">🦋</span>
      <span className="cry-screen-butterfly cry-screen-butterfly--9">🦋</span>
      <span className="cry-screen-butterfly cry-screen-butterfly--10">🦋</span>

      <h1 className="prompt-title">
        <span className="prompt-dot">◆</span> Did you cry today?
      </h1>

      <div className="prompt-card">
        <ScreenButton
          label="Yes"
          onClick={() => onAnswer(true)}
        />

        <ScreenButton
          label="No no, not today"
          onClick={handleNo}
        />
      </div>

      {showCongratulations && (
        <NoCryCongratulationsModal
          onClose={handleCongratulationsClose}
        />
      )}

    </div>
  );
}