import { useState } from 'react';
import DayCell from '../components/DayCell';
import HappyTearsModal from './HappyTearsModal';
import ComfortModal from './ComfortModal';
import SeenItComingModal from './SeenItComingModal';
import SadReasonModal from './SadReasonModal';
import DurationModal from './DurationModal';
import AteTodayModal from './AteTodayModal';
import CopingModal from './CopingModal';
import MoodPickerModal, { HAPPY_MOOD_LAYOUT, SAD_MOOD_LAYOUT, MOOD_IMAGES } from './MoodPickerModal';
import CelebrationModal, { HAPPY_TAGS, SAD_TAGS } from './CelebrationModal';
import ResultModal from './ResultModal';
import { getMonthGrid, MONTH_NAMES } from '../utils/calendar';
import './CalendarScreen.css';

export default function CalendarScreen({ year, month, loggedDays, onSelectDay }) {
  const cells = getMonthGrid(year, month);
  const [activeDay, setActiveDay] = useState(null);
  // 'happyTears' | 'comfort' | 'seenItComing' | 'sadCelebration' |
  // 'sadReason' | 'duration' | 'ateToday' | 'coping' | 'celebration' |
  // 'moodPicker' | 'result' | null
  const [modalStep, setModalStep] = useState(null);
  const [pendingEntry, setPendingEntry] = useState(null);
  const [isSadFlow, setIsSadFlow] = useState(false);

  const closeFlow = () => {
    setModalStep(null);
    setActiveDay(null);
    setPendingEntry(null);
    setIsSadFlow(false);
  };

  const handleDayClick = (day) => {
    setActiveDay(day);
    setModalStep('happyTears');
  };

  const handleHappyTearsAnswer = (wasHappy) => {
    if (wasHappy) {
      setIsSadFlow(false);
      setModalStep('celebration');
    } else {
      setIsSadFlow(true);
      setModalStep('comfort');
    }
  };

  const handleCelebrationSave = (entryDetails) => {
    setPendingEntry(entryDetails);
    setModalStep('moodPicker');
  };

  const handleSadCelebrationSave = (entryDetails) => {
    setPendingEntry((prev) => ({ ...prev, ...entryDetails }));
    setModalStep('sadReason');
  };

  const handleSadReasonNext = (_reasonId, reason) => {
    setPendingEntry((prev) => ({ ...prev, reason }));
    setModalStep('duration');
  };

  const handleDurationNext = (_durationId, duration) => {
    setPendingEntry((prev) => ({ ...prev, duration }));
    setModalStep('ateToday');
  };

  const handleAteTodayNext = (_ateTodayIds, ateToday) => {
    setPendingEntry((prev) => ({ ...prev, ateToday }));
    setModalStep('coping');
  };

  const handleCopingNext = (_copingId, coping) => {
    setPendingEntry((prev) => ({ ...prev, coping }));
    setModalStep('moodPicker');
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
        <SeenItComingModal onAnswer={() => setModalStep('sadCelebration')} />
      )}
      {modalStep === 'sadCelebration' && (
        <CelebrationModal
          title="Oh nooo! You're in your blood, sweat and tears era today <3"
          subtitle=""
          tags={SAD_TAGS}
          onSave={handleSadCelebrationSave}
        />
      )}
      {modalStep === 'sadReason' && (
        <SadReasonModal
          onBack={() => setModalStep('sadCelebration')}
          onNext={handleSadReasonNext}
        />
      )}
      {modalStep === 'duration' && (
        <DurationModal
          onBack={() => setModalStep('sadReason')}
          onNext={handleDurationNext}
        />
      )}
      {modalStep === 'ateToday' && (
        <AteTodayModal
          onBack={() => setModalStep('duration')}
          onNext={handleAteTodayNext}
        />
      )}
      {modalStep === 'coping' && (
        <CopingModal
          onBack={() => setModalStep('ateToday')}
          onNext={handleCopingNext}
        />
      )}
      {modalStep === 'celebration' && (
        <CelebrationModal tags={HAPPY_TAGS} onSave={handleCelebrationSave} />
      )}
      {modalStep === 'moodPicker' && (
        <MoodPickerModal
          layout={isSadFlow ? SAD_MOOD_LAYOUT : HAPPY_MOOD_LAYOUT}
          onSelect={handleMoodSelect}
        />
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