'use client';

import SongsList from 'components/SongsList';

const SongsColumn = (props) => {
  const { selectedSong, songs, onSelectSong } = props;

  return (
    <div className="flex h-full flex-1 flex-col gap-0 overflow-x-hidden overflow-y-scroll">
      <SongsList selectedSong={selectedSong} songs={songs} onSelectSong={onSelectSong} />
    </div>
  );
};

export default SongsColumn;
