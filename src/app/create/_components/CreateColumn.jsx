'use client';

import { useEffect, useState } from 'react';
import { MusicalNoteIcon } from '@heroicons/react/20/solid';
import { getRandomPrompt, getRandomDescriptiveGenre, getRandomLyrics } from 'utils/random';
import { MODELS } from 'utils/data';
import Toggle from 'components/Toggle';
import Select from 'components/Select';
import TextArea from 'components/TextArea';
import Button from 'components/Button';
import Input from 'components/Input';
import RandomSVG from 'assets/svg/Random';

const CreateColumn = (props) => {
  const [isCustomMode, setIsCustomMode] = useState(false);
  const [isInstrumental, setIsInstrumental] = useState(false);
  const [songPrompt, setSongPrompt] = useState('');
  const [songPromptPlaceholder, setSongPromptPlaceholder] = useState('');
  const [songLyrics, setSongLyrics] = useState('');
  const [songStyle, setSongStyle] = useState('');
  const [songTitle, setSongTitle] = useState('');
  const [model, setModel] = useState(MODELS[0]);

  useEffect(() => {
    setSongPromptPlaceholder(getRandomPrompt());
  }, []);

  const models = MODELS.map((model) => {
    return {
      label: model.name,
      value: model.id,
    };
  });

  const setRandomPrompt = () => {
    const randomPrompt = getRandomPrompt();
    setSongPrompt(randomPrompt);
    setSongPromptPlaceholder(randomPrompt);
  };

  const handleSongPromptChange = (e) => {
    setSongPrompt(e.target.value);
  };

  const handleSongLyricsChange = (e) => {
    setSongLyrics(e.target.value);
  };

  const setRandomLyrics = () => {
    setSongLyrics(getRandomLyrics());
  };

  const handleSetStyle = (e) => {
    setSongStyle(e.target.value);
  };

  const handleSetRandomStyle = () => {
    setSongStyle(getRandomDescriptiveGenre());
  };

  const handleSetSongTitle = (e) => {
    setSongTitle(e.target.value);
  };

  const handleModelChange = (e) => {
    const selectedModel = MODELS.find((model) => model.id === e.target.value);
    setModel(selectedModel);
  };

  const handleCreate = () => {
    const data = {};
    if (isCustomMode) {
      data.lyrics = isInstrumental ? '' : songLyrics;
      data.style = songStyle;
      data.title = songTitle;
    } else {
      data.prompt = songPrompt || songPromptPlaceholder;
    }
    data.instrumental = isInstrumental;
    data.model = model.name;
    console.log(data);
  };

  const createIsDisabled = isCustomMode && !songStyle;

  return (
    <div className="p-4">
      <Toggle value={isCustomMode} onChange={setIsCustomMode} label="Custom Mode" className="mb-6" />
      {isCustomMode ? (
        <TextArea
          className="mb-4"
          label="Lyrics"
          disabled={isInstrumental}
          rows={8}
          placeholder="Enter your own lyrics..."
          onChange={handleSongLyricsChange}
          value={songLyrics}
        >
          <Button variant="secondary" onClick={setRandomLyrics} icon={<RandomSVG />}>
            Make Random Lyrics
          </Button>
        </TextArea>
      ) : (
        <TextArea
          className="mb-4"
          label="Song Description"
          placeholder={songPromptPlaceholder}
          onChange={handleSongPromptChange}
          value={songPrompt}
        >
          <Button variant="secondary" onClick={setRandomPrompt} icon={<RandomSVG />}>
            Randomize Prompt
          </Button>
        </TextArea>
      )}
      <Toggle value={isInstrumental} onChange={setIsInstrumental} label="Instrumental" className="mb-8" />
      {isCustomMode && (
        <TextArea
          className="mb-4"
          label="Style of Music"
          rows={2}
          placeholder="Enter style of music..."
          onChange={handleSetStyle}
          value={songStyle}
        >
          <Button variant="secondary" onClick={handleSetRandomStyle} icon={<RandomSVG />}>
            Use Random Style
          </Button>
        </TextArea>
      )}
      {isCustomMode && (
        <Input
          label="Title"
          placeholder="Enter a title..."
          value={songTitle}
          onChange={handleSetSongTitle}
          className="mb-8"
        />
      )}
      <Select options={models} value={model.id} onChange={handleModelChange} className="mb-4" />
      <Button variant="primary" size="lg" fullWidth disabled={createIsDisabled} onClick={handleCreate}>
        <span>Create</span>
        <MusicalNoteIcon className="h-4 w-4 ml-2" />
      </Button>
    </div>
  );
};

export default CreateColumn;
