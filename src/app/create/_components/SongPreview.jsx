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
          <div className="flex flex-col p-4">
            <a href={`#${song.id}`} className="mb-2 font-bold hover:underline">
              {song.title}
            </a>
            <div className="mb-2 flex items-center gap-x-1 text-sm">
              <UserIcon className="h-4 w-4" />
              <a href={`#@${song.handle}`} className="hover:underline">
                {song.display_name}
              </a>
            </div>
            <div className="mb-2 text-sm">{song?.metadata?.tags}</div>
            <div className="mb-4 text-xs text-neutral-500">{timestamp}</div>
            <div className="mb-8">
              <Interactions song={song} />
            </div>
            {song?.metadata?.gpt_description_prompt && (
              <div className="mb-8 text-sm text-neutral-400">{song?.metadata?.gpt_description_prompt}</div>
            )}
            <p className="whitespace-pre-line text-sm font-light leading-[1.5]">{song?.metadata?.prompt}</p>
          </div>
        </div>
      ) : (
        <div className="m-8 text-neutral-400">Select a song to preview.</div>
      )}
    </div>
  );
};

export default SongPreview;
