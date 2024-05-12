import { GITHUB_REPO } from 'utils/data';
import Button from 'components/Button';

const GithubButton = () => {
  return (
    <Button href={GITHUB_REPO} target="_blank" rel="noopener noreferrer">
      View on GitHub
    </Button>
  );
};

export default GithubButton;
