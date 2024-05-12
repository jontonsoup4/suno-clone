'use client';

import SongsList from 'components/SongsList';

const SongsColumn = (props) => {
  const { selectedSong, songs, onSelectSong } = props;

  return (
    <div className="flex flex-col gap-0 flex-1 h-full overflow-y-scroll overflow-x-hidden">
      <SongsList selectedSong={selectedSong} songs={songs} onSelectSong={onSelectSong} />
    </div>
  );
};

export default SongsColumn;
