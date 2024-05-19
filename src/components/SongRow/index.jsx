import { useEffect, useState } from 'react';
import { PlayIcon } from '@heroicons/react/20/solid';
import Badge from 'components/Badge';
import Interactions from 'components/Interactions';
import clsx from 'clsx';

const SongRow = (props) => {
  const { active, song, onSelectSong } = props;
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    if (active) {
      setIsHovered(true);
    }
  }, [active]);

  const handleSelectSong = () => {
    onSelectSong(song);
  };

  const handleOnMouseEnter = () => {
    setIsHovered(true);
  };

  const handleOnMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <li
      className={clsx({ ['bg-neutral-900']: active }, 'flex cursor-pointer py-2 pl-6 hover:bg-neutral-900')}
      onMouseEnter={handleOnMouseEnter}
      onMouseLeave={handleOnMouseLeave}
      onClick={handleSelectSong}
    >
      <div className="relative flex-none">
        <img className="h-[60px] w-[60px] bg-gray-50" src={song.image_url} alt="" />
        <button
          className={clsx(
            'absolute top-0 flex h-[60px] w-[60px] items-center justify-center opacity-0 transition-opacity duration-200',
            {
              ['opacity-100']: isHovered || active,
            },
          )}
        >
          <PlayIcon
            className={clsx('h-6 w-6 transition-all duration-200', active ? 'text-orange-400' : 'text-white')}
          />
        </button>
      </div>
      <div className="flex flex-1 flex-col px-4 xl:flex-row">
        <div className="flex flex-1 flex-col justify-center">
          <p className="flex items-center">
            <a
              href={`#${song.id}`}
              className={clsx(
                'text-sm font-semibold transition-all duration-200 hover:underline',
                active ? 'text-orange-400' : 'text-white',
              )}
            >
              {song.title}
            </a>
            <Badge highlighted={isHovered || active}>{song?.major_model_version}</Badge>
          </p>
          <p className="text-sm text-neutral-500">
            <a href={`#${song.id}`} className="truncate hover:underline">
              {song?.metadata?.tags}
            </a>
          </p>
        </div>
        <Interactions song={song} />
      </div>
    </li>
  );
};

export default SongRow;
