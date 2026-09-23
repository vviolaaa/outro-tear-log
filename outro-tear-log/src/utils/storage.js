const STORAGE_KEY = 'outro-tear-log:entries';

// All read/write to localStorage funnels through here so the rest of the
// app never has to think about JSON parsing, missing keys, or storage being
// unavailable (private browsing, disabled storage, etc).

export function loadEntries() {
  if (typeof window === 'undefined') return {};
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    return raw ? JSON.parse(raw) : {};
  } catch (err) {
    console.warn('Could not read the cry log from localStorage:', err);
    return {};
  }
}

export function saveEntries(entries) {
  if (typeof window === 'undefined') return;
  try {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(entries));
  } catch (err) {
    console.warn('Could not save the cry log to localStorage:', err);
  }
}