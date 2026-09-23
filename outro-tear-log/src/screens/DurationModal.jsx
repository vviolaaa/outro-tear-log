import QuestionModal from '../components/QuestionModal';

import rmTShirt from '../assets/images/jk-surprised.png';

const DURATION_LAYOUT = [
  { id: 'sticker', image: rmTShirt, label: 'sticker', top: '5%', left: '80%', width: 150, height: 180, rotate: 0, z: 2 },
];

const DURATION_OPTIONS = [
  { id: 'one-day', text: 'Just one day, one night' },
  { id: 'spring-day', text: 'Spring day, after spring day' },
  { id: 'break-of-dawn', text: 'Till the break of dawn' },
  { id: 'ten-years', text: '10 long years' },
  { id: 'all-my-life', text: 'For all my life' },
];

export default function DurationModal({ onBack, onNext, onClose }) {
  return (
    <QuestionModal
      title="so I'm fine, I'm fine, I'm fine"
      question="how long has this been building?"
      options={DURATION_OPTIONS}
      stickers={DURATION_LAYOUT}
      answerType="slider"
      onBack={onBack}
      onNext={onNext}
      onClose={onClose}
    />
  );
}