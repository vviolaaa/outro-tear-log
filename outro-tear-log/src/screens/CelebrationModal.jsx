import { useState } from 'react';
import Modal from '../components/Modal';
import TagChip from '../components/TagChip';
import './CelebrationModal.css';

const HAPPY_TAGS = [
  'graduation', 'in luv', 'euphoria', 'good team',
  'good music', 'you hot', 'smooth like butter',
  'life goes on', 'life is dynamite'
];

export default function CelebrationModal({ onSave }) {
  const [note, setNote] = useState('');
  const [selectedTags, setSelectedTags] = useState([]);

  const toggleTag = (tag) => {
    setSelectedTags((prev) =>
      prev.includes(tag) ? prev.filter((t) => t !== tag) : [...prev, tag]
    );
  };

  return (
    <Modal>
      <h2 className="celebration-title">Yyaaaaygg! Happy tears are great!</h2>
      <p className="celebration-subtitle">Congratulations &lt;3 !</p>

      <textarea
        className="celebration-note"
        placeholder="You can write tag reason here or choose tags lower"
        value={note}
        onChange={(e) => setNote(e.target.value)}
      />

      <div className="celebration-tags">
        {HAPPY_TAGS.map((tag) => (
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