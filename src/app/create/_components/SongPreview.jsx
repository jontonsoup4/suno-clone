'use client';

import Interactions from 'components/Interactions';
import { UserIcon } from '@heroicons/react/20/solid';

const SongPreview = (props) => {
  const { song } = props;
  const timestamp = new Date(song?.created_at).toLocaleString('en-US', {
    month: 'long',
    day: 'numeric',
    year: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
    hour12: true,
  });
  return (
    <div className="h-full overflow-y-scroll">
      {song ? (
        <div className="flex flex-col">
          <div className="p-2">
            <img className="h-full w-full rounded-lg" src={song.image_url} alt="" />
          </div>
          <div className="p-4 flex flex-col">
            <a href={`#${song.id}`} className="font-bold mb-2 hover:underline">
              {song.title}
            </a>
            <div className="flex items-center gap-x-1 mb-2 text-sm">
              <UserIcon className="h-4 w-4" />
              <a href={`#@${song.handle}`} className="hover:underline">
                {song.display_name}
              </a>
            </div>
            <div className="text-sm mb-2">{song?.metadata?.tags}</div>
            <div className="text-xs text-neutral-500 mb-4">{timestamp}</div>
            <div className="mb-8">
              <Interactions song={song} menuLocation="right" />
            </div>
            {song?.metadata?.gpt_description_prompt && (
              <div className="text-sm text-neutral-400 mb-8">{song?.metadata?.gpt_description_prompt}</div>
            )}
            <p className="text-sm whitespace-pre-line leading-[1.5] font-light">{song?.metadata?.prompt}</p>
          </div>
        </div>
      ) : (
        <div className="m-8 text-neutral-400">Select a song to preview.</div>
      )}
    </div>
  );
};

export default SongPreview;
