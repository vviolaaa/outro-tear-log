import { useState } from 'react';
import Modal from './Modal';
import ListSelect from './answer-inputs/ListSelect';
import RadioSelect from './answer-inputs/RadioSelect';
import CheckboxSelect from './answer-inputs/CheckboxSelect';
import SliderSelect from './answer-inputs/SliderSelect';
import './QuestionModal.css';

const ANSWER_INPUTS = {
  list: ListSelect,
  radio: RadioSelect,
  checkbox: CheckboxSelect,
  slider: SliderSelect,
};

/**
 * Shared shell for every "screen with a question in a modal" step of the flow
 * (why did you cry, how long has this been building, did you eat today,
 * coping mechanism, ...). Handles the title/divider/sticker-box/question/
 * back-next chrome; the actual answer widget is swapped via `answerType`.
 *
 * options: [{ id, text, category? }]
 * stickers: same shape as the old *_LAYOUT arrays (id, image, label, top,
 *   left, width, height, rotate, z) — absolutely positioned inside the box.
 * answerType: 'list' | 'radio' | 'checkbox' | 'slider'
 * onNext(value, selectedOption) — value is the selected id (list/radio/
 *   slider) or array of ids (checkbox); selectedOption is the matching full
 *   option object (or array of objects for checkbox), so callers don't have
 *   to re-look-up text/category themselves.
 */
export default function QuestionModal({
  modalType,
  title,
  question,
  options,
  stickers = [],
  decorations = null,
  answerType = 'list',
  initialValue = null,
  onBack,
  onNext,
  onClose,
}) {
  const isMulti = answerType === 'checkbox';
  const [value, setValue] = useState(initialValue ?? (isMulti ? [] : null));

  const AnswerInput = ANSWER_INPUTS[answerType] || ListSelect;
  const hasAnswer = isMulti ? value.length > 0 : value !== null && value !== undefined;

  // Resolve id(s) back to their full option object(s) so callers get the
  // actual text/category to display later (in the result screen, etc.)
  // without having to re-import each screen's option list themselves.
  const selectedOption = isMulti
    ? options.filter((o) => value.includes(o.id))
    : options.find((o) => o.id === value) || null;

  return (
    <Modal type={modalType}>
      <div className="question-modal">
        <h2 className="question-modal-title">{title}</h2>
        <div className="question-modal-divider" />

        <div className="question-modal-box">
          {stickers.length > 0 && (
            <div className="question-modal-sticker-wrap">
              {stickers.map((item) => (
                <img
                  key={item.id}
                  src={item.image}
                  alt={item.label}
                  className="question-modal-photo"
                  style={{
                    top: item.top,
                    left: item.left,
                    width: `${item.width}px`,
                    height: `${item.height}px`,
                    zIndex: item.z,
                    transform: `rotate(${item.rotate}deg)`,
                  }}
                />
              ))}
            </div>
          )}
          {decorations}

          <h3 className="question-modal-question">{question}</h3>

          <div className="question-modal-answer">
            <AnswerInput options={options} value={value} onChange={setValue} />
          </div>
        </div>

        <div className="question-modal-actions">
          <button className="question-modal-btn question-modal-btn--back" onClick={onBack}>
            back
          </button>
          <button
            className="question-modal-btn question-modal-btn--next"
            disabled={!hasAnswer}
            onClick={() => onNext?.(value, selectedOption)}
          >
            next
          </button>
        </div>
      </div>
    </Modal>
  );
}