import DayCell from '../components/DayCell';
import { getMonthGrid, MONTH_NAMES } from '../utils/calendar';
import './CalendarScreen.css';

export default function CalendarScreen({ year, month, loggedDays, onSelectDay }) {
  const cells = getMonthGrid(year, month);
  const [activeDay, setActiveDay] = useState(null);
  const [modalStep, setModalStep] = useState(null);

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
    onSelectDay?.(activeDay, entryDetails);
    setModalStep(null);
    setActiveDay(null);
  };

  return (
    <div className="calendar-screen">
      <div className="calendar-grid">
        {cells.map((day, i) => (
          <DayCell
            key={i}
            day={day}
            hasEntry={day !== null && loggedDays.includes(day)}
            onClick={onSelectDay}
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
    </div>
  );
}