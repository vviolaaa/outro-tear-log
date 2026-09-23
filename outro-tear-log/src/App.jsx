import { useEffect, useState } from 'react';
import AppHeader from './components/AppHeader';
import DidYouCryScreen from './screens/DidYouCryScreen';
import CalendarScreen from './screens/CalendarScreen';
import { loadEntries, saveEntries } from './utils/storage';
import './App.css';

export default function App() {
  // 'home' | 'calendar' — which top-level screen is showing. Answering the
  // "did you cry today?" prompt moves on to the calendar, same as before,
  // but the header lets you freely jump back and forth after that.
  const [page, setPage] = useState('home');
  // { [dateKey]: entryDetails }, dateKey = "YYYY-MM-DD". Loaded once from
  // localStorage on first render, then re-persisted on every change below.
  const [entries, setEntries] = useState(() => loadEntries());

  useEffect(() => {
    saveEntries(entries);
  }, [entries]);

  const today = new Date();
  const year = today.getFullYear();
  const month = today.getMonth();

  const monthPrefix = `${year}-${String(month + 1).padStart(2, '0')}-`;
  const loggedDays = Object.keys(entries)
    .filter((key) => key.startsWith(monthPrefix))
    .map((key) => Number(key.slice(monthPrefix.length)));

  const handleCriedAnswer = () => {
    setPage('calendar');
  };

  const handleSaveEntry = (dateKey, entryDetails) => {
    setEntries((prev) => ({ ...prev, [dateKey]: entryDetails }));
  };

  return (
    <div className="app-shell">
      <AppHeader page={page} onNavigate={setPage} />
      <main className="app-main">
        {page === 'home' && <DidYouCryScreen onAnswer={handleCriedAnswer} />}
        {page === 'calendar' && (
          <CalendarScreen
            year={year}
            month={month}
            loggedDays={loggedDays}
            entries={entries}
            onSelectDay={handleSaveEntry}
          />
        )}
      </main>
    </div>
  );
}