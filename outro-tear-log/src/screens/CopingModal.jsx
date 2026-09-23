import QuestionModal from '../components/QuestionModal';

import lifeGoesOnBts from '../assets/images/v-sing.png';

const COPING_LAYOUT = [
  { id: 'sticker', image: lifeGoesOnBts, label: 'sticker', top: '-10%', left: '57%', width: 250, height: 350, rotate: 0, z: 2 },
];

const COPING_OPTIONS = [
  { id: 'waiting-tomorrow', text: 'Waiting for Tomorrow' },
  { id: 'black-swan-era', text: 'Going through my own Black Swan era' },
  { id: 'reject-rejection', text: 'I reject rejection' },
  { id: 'airplane-pt2', text: 'Putting my phone on Airplane Pt. 2' },
  { id: 'denial-hyyh', text: 'Denial, but make it HYYH' },
  { id: 'shining-city', text: 'Shining through the city' },
  { id: 'live-now', text: 'I wanna live right now' },
];

export default function CopingModal({ onBack, onNext, onClose }) {
  return (
    <QuestionModal
      title="it's time to make it right i guess"
      question="let's choose coping mechanism?"
      options={COPING_OPTIONS}
      stickers={COPING_LAYOUT}
      answerType="radio"
      onBack={onBack}
      onNext={onNext}
      onClose={onClose}
    />
  );
}