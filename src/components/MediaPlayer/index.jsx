import { PlayIcon, BackwardIcon, ForwardIcon } from '@heroicons/react/20/solid';
import Button from 'components/Button';

const MediaPlayer = () => {
  return (
    <div className="fixed bottom-0 w-full bg-neutral-900 ring-1 ring-neutral-800 h-[69px] z-50">
      <div className="h-full w-full flex items-center justify-center">
        <div className="flex">
          <Button className="!rounded-full !px-2" variant="secondary">
            <BackwardIcon className="h-4 w-4" />
          </Button>
          <Button className="!rounded-full !px-2 mx-1" variant="primary">
            <PlayIcon className="h-4 w-4" />
          </Button>
          <Button className="!rounded-full !px-2" variant="secondary">
            <ForwardIcon className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default MediaPlayer;
