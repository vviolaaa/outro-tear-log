import { useState } from 'react';
import DayCell from '../components/DayCell';
import HappyTearsModal from './HappyTearsModal';
import ComfortModal from './ComfortModal';
import SeenItComingModal from './SeenItComingModal';
import SadReasonModal from './SadReasonModal';
import MoodPickerModal, { MOOD_IMAGES } from './MoodPickerModal';
import CelebrationModal, { HAPPY_TAGS, SAD_TAGS } from './CelebrationModal';
import ResultModal from './ResultModal';
import { getMonthGrid, MONTH_NAMES } from '../utils/calendar';
import './CalendarScreen.css';

export default function CalendarScreen({ year, month, loggedDays, onSelectDay }) {
  const cells = getMonthGrid(year, month);
  const [activeDay, setActiveDay] = useState(null);
  const [modalStep, setModalStep] = useState(null); // 'happyTears' | 'comfort' | 'seenItComing' | 'sadReason' | 'celebration' | 'sadCelebration' | 'moodPicker' | 'result' | null
  const [pendingEntry, setPendingEntry] = useState(null);

  const closeFlow = () => {
    setModalStep(null);
    setActiveDay(null);
    setPendingEntry(null);
  };

  const handleDayClick = (day) => {
    setActiveDay(day);
    setModalStep('happyTears');
  };

  const handleHappyTearsAnswer = (wasHappy) => {
    if (wasHappy) {
      setModalStep('celebration');
    } else {
      setModalStep('comfort');
    }
  };

  const handleCelebrationSave = (entryDetails) => {
    setPendingEntry(entryDetails);
    setModalStep('moodPicker');
  };

  const handleSadReasonNext = (reasonCategory) => {
    setPendingEntry((prev) => ({ ...prev, reasonCategory }));
    setModalStep('sadCelebration');
  };

  const handleSadCelebrationSave = (entryDetails) => {
    setPendingEntry((prev) => ({ ...prev, ...entryDetails }));
    // sad-tears flow past this point isn't built yet — just close for now
    closeFlow();
  };

  const handleMoodSelect = (moodId) => {
    setPendingEntry((prev) => ({
      ...prev,
      mood: moodId,
      moodImage: MOOD_IMAGES[moodId],
    }));
    setModalStep('result');
  };

  const handleResultSave = () => {
    onSelectDay?.(activeDay, pendingEntry);
    closeFlow();
  };

  return (
    <div className="calendar-screen">
      <div className="calendar-grid">
        {cells.map((day, i) => (
          <DayCell
            key={i}
            day={day}
            hasEntry={day !== null && loggedDays.includes(day)}
            onClick={handleDayClick}
          />
        ))}
      </div>
      <h2 className="calendar-month-label">{MONTH_NAMES[month]}</h2>

      {modalStep === 'happyTears' && (
        <HappyTearsModal onAnswer={handleHappyTearsAnswer} />
      )}
      {modalStep === 'comfort' && (
        <ComfortModal onAnswer={() => setModalStep('seenItComing')} />
      )}
      {modalStep === 'seenItComing' && (
        <SeenItComingModal onAnswer={() => setModalStep('sadReason')} />
      )}
      {modalStep === 'sadReason' && (
        <SadReasonModal
          onBack={() => setModalStep('seenItComing')}
          onNext={handleSadReasonNext}
        />
      )}
      {modalStep === 'celebration' && (
        <CelebrationModal tags={HAPPY_TAGS} onSave={handleCelebrationSave} />
      )}
      {modalStep === 'sadCelebration' && (
        <CelebrationModal
          title="Oh nooo! You're in your blood, sweat and tears era today <3"
          subtitle=""
          tags={SAD_TAGS}
          onSave={handleSadCelebrationSave}
        />
      )}
      {modalStep === 'moodPicker' && (
        <MoodPickerModal onSelect={handleMoodSelect} />
      )}
      {modalStep === 'result' && pendingEntry && (
        <ResultModal
          entry={pendingEntry}
          onSave={handleResultSave}
          onDiscard={closeFlow}
        />
      )}
    </div>
  );
}