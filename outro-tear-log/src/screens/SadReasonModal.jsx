import QuestionModal from '../components/QuestionModal';

import rmBlack from '../assets/images/rm-curious.png';

const REASON_LAYOUT = [
  { id: 'sticker', image: rmBlack, label: 'sticker', top: '4%', left: '70%', width: 180, height: 220, rotate: 0, z: 2 },
];

const REASON_OPTIONS = [
  { id: 'fake-love', text: "I'm so sick of this fake love", category: 'work/university' },
  { id: 'lonely', text: "I'm fucking lonely", category: 'a person' },
  { id: 'money', text: 'Money, money, money', category: 'money' },
  { id: 'mikrokosmos', text: 'Mikrokosmos malfunction', category: '' },
  { id: 'black-swan', text: 'Black Swan has entered the chat', category: 'no idea' },
];

export default function SadReasonModal({ onBack, onNext, onClose }) {
  return (
    <QuestionModal
      title="let`s talk the talk and walk the walk i guess"
      question="why did you cry?"
      options={REASON_OPTIONS}
      stickers={REASON_LAYOUT}
      answerType="list"
      onBack={onBack}
      onNext={onNext}
      onClose={onClose}
    />
  );
}