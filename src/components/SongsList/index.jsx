import SongRow from 'components/SongRow';

const SongsList = (props) => {
  const { songs, selectedSong, onSelectSong } = props;

  return (
    <ul role="list">
      {songs.map((song) => (
        <SongRow
          key={song.id}
          active={selectedSong?.id === song?.id}
          song={song}
          onSelectSong={onSelectSong}
        />
      ))}
    </ul>
  );
};

export default SongsList;
