import { useState } from 'react';
import DayCell from '../components/DayCell';
import HappyTearsModal from './HappyTearsModal';
import ComfortModal from './ComfortModal';
import SeenItComingModal from './SeenItComingModal';
import SadReasonModal from './SadReasonModal';
import DurationModal from './DurationModal';
import AteTodayModal from './AteTodayModal';
import CopingModal from './CopingModal';
import CelebrationModal, { HAPPY_TAGS, SAD_TAGS } from './CelebrationModal';
import ResultModal from './ResultModal';
import { getMonthGrid, MONTH_NAMES, formatDateKey } from '../utils/calendar';
import MoodPickerModal, { HAPPY_MOOD_LAYOUT, SAD_MOOD_LAYOUT, MOOD_IMAGES, getMoodVariant } from './MoodPickerModal';
import './CalendarScreen.css';

export default function CalendarScreen({ year, month, loggedDays, entries = {}, onSelectDay }) {
    const cells = getMonthGrid(year, month);
    const [activeDay, setActiveDay] = useState(null);
    // 'happyTears' | 'comfort' | 'seenItComing' | 'sadCelebration' |
    // 'sadReason' | 'duration' | 'ateToday' | 'coping' | 'celebration' |
    // 'moodPicker' | 'result' | 'view' | null
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
        const dateKey = formatDateKey(year, month, day);
        const existingEntry = entries[dateKey];

        setActiveDay(day);

        if (existingEntry) {
            // Already logged — open it read-only instead of starting the survey
            // over again.
            setPendingEntry(existingEntry);
            setModalStep('view');
        } else {
            setModalStep('happyTears');
        }
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
        const dateKey = formatDateKey(year, month, activeDay);
        onSelectDay?.(dateKey, pendingEntry);
        closeFlow();
    };

    return (
        <div className="calendar-screen">

            <span className="calendar-flower calendar-flower--1">✿</span>
            <span className="calendar-flower calendar-flower--2">❀</span>
            <span className="calendar-flower calendar-flower--3">✾</span>
            <span className="calendar-flower calendar-flower--4">✽</span>
            <span className="calendar-flower calendar-flower--5">❁</span>
            <span className="calendar-flower calendar-flower--6">✿</span>
            <span className="calendar-flower calendar-flower--7">❀</span>
            <span className="calendar-flower calendar-flower--8">✾</span>
            <span className="calendar-flower calendar-flower--9">❁</span>
            <span className="calendar-flower calendar-flower--10">✽</span>
            <span className="calendar-flower calendar-flower--11">✿</span>
            <span className="calendar-flower calendar-flower--12">❀</span>

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
                <HappyTearsModal onAnswer={handleHappyTearsAnswer} onClose={closeFlow} />
            )}
            {modalStep === 'comfort' && (
                <ComfortModal onAnswer={() => setModalStep('seenItComing')} onClose={closeFlow} />
            )}
            {modalStep === 'seenItComing' && (
                <SeenItComingModal onAnswer={() => setModalStep('sadCelebration')} onClose={closeFlow} />
            )}
            {modalStep === 'sadCelebration' && (
                <CelebrationModal
                    title="Oh nooo! You're in your blood, sweat and tears era today <3"
                    subtitle=""
                    tags={SAD_TAGS}
                    onSave={handleSadCelebrationSave}
                    onClose={closeFlow}
                />
            )}
            {modalStep === 'sadReason' && (
                <SadReasonModal
                    onBack={() => setModalStep('sadCelebration')}
                    onNext={handleSadReasonNext}
                    onClose={closeFlow}
                />
            )}
            {modalStep === 'duration' && (
                <DurationModal
                    onBack={() => setModalStep('sadReason')}
                    onNext={handleDurationNext}
                    onClose={closeFlow}
                />
            )}
            {modalStep === 'ateToday' && (
                <AteTodayModal
                    onBack={() => setModalStep('duration')}
                    onNext={handleAteTodayNext}
                    onClose={closeFlow}
                />
            )}
            {modalStep === 'coping' && (
                <CopingModal
                    onBack={() => setModalStep('ateToday')}
                    onNext={handleCopingNext}
                    onClose={closeFlow}
                />
            )}
            {modalStep === 'celebration' && (
                <CelebrationModal tags={HAPPY_TAGS} onSave={handleCelebrationSave} onClose={closeFlow} />
            )}
            {modalStep === 'moodPicker' && (
                <MoodPickerModal
                    layout={isSadFlow ? SAD_MOOD_LAYOUT : HAPPY_MOOD_LAYOUT}
                    onSelect={handleMoodSelect}
                    onClose={closeFlow}
                />
            )}
            {modalStep === 'result' && pendingEntry && (
                <ResultModal
                    entry={pendingEntry}
                    variant={getMoodVariant(pendingEntry.mood)}
                    onSave={handleResultSave}
                    onDiscard={closeFlow}
                />
            )}
            {modalStep === 'view' && pendingEntry && (
                <ResultModal
                    entry={pendingEntry}
                    variant={getMoodVariant(pendingEntry.mood)}
                    mode="view"
                    onDiscard={closeFlow}
                />
            )}
        </div>
    );
}