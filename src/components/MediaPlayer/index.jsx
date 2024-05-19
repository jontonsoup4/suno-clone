import { PlayIcon, BackwardIcon, ForwardIcon } from '@heroicons/react/20/solid';
import Button from 'components/Button';

const MediaPlayer = () => {
  return (
    <div className="fixed bottom-0 z-50 h-[69px] w-full bg-neutral-900 ring-1 ring-neutral-800">
      <div className="flex h-full w-full items-center justify-center">
        <div className="flex">
          <Button className="!rounded-full !px-2" variant="secondary">
            <BackwardIcon className="h-4 w-4" />
          </Button>
          <Button className="mx-1 !rounded-full !px-2" variant="primary">
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
