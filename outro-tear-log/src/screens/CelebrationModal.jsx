import { useState } from 'react';
import Modal from '../components/Modal';
import TagChip from '../components/TagChip';
import './CelebrationModal.css';

export const HAPPY_TAGS = [
  'graduation', 'in luv', 'euphoria', 'good team',
  'good music', 'you hot', 'smooth like butter',
  'life goes on', 'life is dynamite'
];

export const SAD_TAGS = [
  'fake love', 'in luv', 'dis-ease', 'lost', 'dark days',
  'truth untold', 'ugh!', 'too sad to dance', 'no more dream',
  'cold feet', 'sick & tired', 'am i wrong', 'danger',
  'i need u', 'so much pain', 'hate you', 'somebody said no'
];

export default function CelebrationModal({
  title = 'Yyaaaaygg! Happy tears are great!',
  subtitle = 'Congratulations <3 !',
  tags = HAPPY_TAGS,
  onSave,
  onClose,
}) {
  const [note, setNote] = useState('');
  const [selectedTags, setSelectedTags] = useState([]);

  const toggleTag = (tag) => {
    setSelectedTags((prev) =>
      prev.includes(tag) ? prev.filter((t) => t !== tag) : [...prev, tag]
    );
  };

  return (
    <Modal onClose={onClose}>
      <h2 className="celebration-title">{title}</h2>
      {subtitle && <p className="celebration-subtitle">{subtitle}</p>}

      <textarea
        className="celebration-note"
        placeholder="You can write tag reason here or choose tags lower"
        value={note}
        onChange={(e) => setNote(e.target.value)}
      />

      <div className="celebration-tags">
        {tags.map((tag) => (
          <TagChip
            key={tag}
            label={tag}
            selected={selectedTags.includes(tag)}
            onClick={toggleTag}
          />
        ))}
      </div>

      <button
        className="celebration-save"
        onClick={() => onSave?.({ note, tags: selectedTags })}
      >
        Save
      </button>
    </Modal>
  );
}