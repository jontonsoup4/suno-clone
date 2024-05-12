'use client';

import { useState } from 'react';
import CreateColumn from './_components/CreateColumn';
import SongsColumn from './_components/SongsColumn';
import SongPreview from './_components/SongPreview';
import { SONGS } from 'utils/data';

const Create = () => {
  const songs = SONGS.sort((a, b) => new Date(a.created_at) - new Date(b.created_at));
  const [selectedSong, setSelectedSong] = useState(SONGS[0]);

  const onSelectSong = (song) => {
    setSelectedSong(song);
  };

  return (
    <div className="flex flex-row h-full">
      <div className="min-w-[300px] xl:min-w-[360px] border-neutral-800 border-r-[1px]">
        <CreateColumn />
      </div>
      <div className="flex-1 border-neutral-800 border-r-[1px] h-full">
        <SongsColumn songs={songs} selectedSong={selectedSong} onSelectSong={onSelectSong} />
      </div>
      <div className="flex-[0_0_300px] h-full">
        <SongPreview song={selectedSong} />
      </div>
    </div>
  );
};

export default Create;
