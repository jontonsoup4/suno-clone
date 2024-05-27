'use client';

import { useState } from 'react';
import CreateColumn from './_components/CreateColumn';
import SongsColumn from './_components/SongsColumn';
import SongPreview from './_components/SongPreview';
import { SONGS } from 'utils/data';

const Create = () => {
  const songs = SONGS.sort(
    (a, b) => new Date(a.created_at) - new Date(b.created_at),
  );
  const [selectedSong, setSelectedSong] = useState(null);

  const onSelectSong = (song) => {
    setSelectedSong(song);
  };

  return (
    <div className="flex h-full flex-row">
      <div className="min-w-[300px] border-r-[1px] border-neutral-800 xl:min-w-[360px]">
        <CreateColumn />
      </div>
      <div className="h-full flex-1 border-r-[1px] border-neutral-800">
        <SongsColumn
          songs={songs}
          selectedSong={selectedSong}
          onSelectSong={onSelectSong}
        />
      </div>
      <div className="h-full flex-[0_0_300px]">
        <SongPreview song={selectedSong} />
      </div>
    </div>
  );
};

export default Create;
