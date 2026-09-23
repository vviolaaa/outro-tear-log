import QuestionModal from '../components/QuestionModal';

import jinEatsCake from '../assets/images/jin-wing.png';

const ATE_TODAY_LAYOUT = [
  { id: 'sticker', image: jinEatsCake, label: 'sticker', top: '14%', left: '63%', width: 270, height: 250, rotate: 0, z: 2 },
];

const ATE_TODAY_OPTIONS = [
  { id: 'run', text: 'Run, yeah you gotta run', category: 'running to get food' },
  { id: 'stomach-waiting', text: 'I don`t know what is my stomach waiting for' },
  { id: 'lovin-myself', text: "You can't stop me lovin' myself", category: 'fed myself obviously' },
  { id: 'carbonara', text: 'Carbonara', category: 'did you even have to ask?' },
  { id: 'storyline', text: "You can't just cry and skip meals. What kind storyline is this?" },
];

export default function AteTodayModal({ onBack, onNext, onClose }) {
  return (
    <QuestionModal
      title="life goes on and on and on and on"
      question="did you eat today?"
      options={ATE_TODAY_OPTIONS}
      stickers={ATE_TODAY_LAYOUT}
      answerType="checkbox"
      onBack={onBack}
      onNext={onNext}
      onClose={onClose}
    />
  );
}