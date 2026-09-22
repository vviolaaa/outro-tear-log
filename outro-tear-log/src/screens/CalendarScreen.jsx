import { useState } from 'react';
import DayCell from '../components/DayCell';
import HappyTearsModal from './HappyTearsModal';
import MoodPickerModal from './MoodPickerModal';
import CelebrationModal from './CelebrationModal';
import { getMonthGrid, MONTH_NAMES } from '../utils/calendar';
import './CalendarScreen.css';

export default function CalendarScreen({ year, month, loggedDays, onSelectDay }) {
  const cells = getMonthGrid(year, month);
  const [activeDay, setActiveDay] = useState(null);
  const [modalStep, setModalStep] = useState(null); // 'happyTears' | 'celebration' | 'moodPicker' | null
  const [pendingEntry, setPendingEntry] = useState(null);

  const handleDayClick = (day) => {
    setActiveDay(day);
    setModalStep('happyTears');
  };

  const handleHappyTearsAnswer = (wasHappy) => {
    if (wasHappy) {
      setModalStep('celebration');
    } else {
      // "no" flow (sad tears) isn't built yet — just close for now
      setModalStep(null);
      setActiveDay(null);
    }
  };

  const handleCelebrationSave = (entryDetails) => {
    setPendingEntry(entryDetails);
    setModalStep('moodPicker');
  };

  const handleMoodSelect = (moodId) => {
    onSelectDay?.(activeDay, { ...pendingEntry, mood: moodId });
    setModalStep(null);
    setActiveDay(null);
    setPendingEntry(null);
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
      {modalStep === 'celebration' && (
        <CelebrationModal onSave={handleCelebrationSave} />
      )}
      {modalStep === 'moodPicker' && (
        <MoodPickerModal onSelect={handleMoodSelect} />
      )}
    </div>
  );
}