import { useState } from 'react';
import DidYouCryScreen from './screens/DidYouCryScreen';
import CalendarScreen from './screens/CalendarScreen';

export default function App() {
  const [criedToday, setCriedToday] = useState(null);
  const [entries, setEntries] = useState({}); // { [day]: entryDetails }

  const today = new Date();
  const loggedDays = Object.keys(entries).map(Number);

  const handleCriedAnswer = (answer) => {
    setCriedToday(answer);
  };

  const handleSaveEntry = (day, entryDetails) => {
    setEntries((prev) => ({ ...prev, [day]: entryDetails }));
  };

  return (
    <>
      {criedToday === null && <DidYouCryScreen onAnswer={handleCriedAnswer} />}
      {criedToday !== null && (
        <CalendarScreen
          year={today.getFullYear()}
          month={today.getMonth()}
          loggedDays={loggedDays}
          entries={entries}
          onSelectDay={handleSaveEntry}
        />
      )}
    </>
  );
}