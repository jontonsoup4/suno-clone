export const getRandomItemInArray = (arr) => arr[Math.floor(Math.random() * arr.length)];

export const getRandomLyrics = () => {
  const lyrics = [
    'I love you',
    'I miss you',
    'I need you',
    'I want you',
    'I hate you',
    'I see you',
    'I feel you',
    'I hear you',
  ];
  const randomLyrics = [];
  const segments = ['Verse 1', 'Chorus', 'Verse 2', 'Chorus'];
  segments.forEach((segment) => {
    randomLyrics.push(`[${segment}]\n`);
    for (let i = 0; i < 4; i++) {
      randomLyrics.push(getRandomItemInArray(lyrics));
      randomLyrics.push('\n');
    }
    randomLyrics.push('\n');
  });
  return randomLyrics.join('');
};

export const getRandomDescriptiveGenre = () => {
  const randomGenreDescriptor = getRandomItemInArray(genreDescriptor);
  const randomGenre = getRandomItemInArray(genre);
  return `${randomGenreDescriptor} ${randomGenre}`;
};

export const getRandomPrompt = () => {
  const randomGenreDescriptor = getRandomItemInArray(genreDescriptor);
  const randomGenre = getRandomItemInArray(genre);
  const randomDescription = getRandomItemInArray(description);
  const article = 'aeiou'.includes(randomGenreDescriptor[0]) ? 'an' : 'a';
  return `${article} ${randomGenreDescriptor} ${randomGenre} song about ${randomDescription}`;
};

export const genreDescriptor = [
  'acoustic',
  'aggressive',
  'anthemic',
  'atmospheric',
  'bouncy',
  'chill',
  'dark',
  'dreamy',
  'electronic',
  'emotional',
  'epic',
  'experimental',
  'futuristic',
  'groovy',
  'heartfelt',
  'infectious',
  'melodic',
  'mellow',
  'powerful',
  'psychedelic',
  'romantic',
  'smooth',
  'syncopated',
  'uplifting',
  '',
];
export const genre = [
  'afrobeat',
  'anime',
  'ballad',
  'bedroom pop',
  'bluegrass',
  'blues',
  'classical',
  'country',
  'cumbia',
  'dance',
  'dancepop',
  'delta blues',
  'electropop',
  'disco',
  'dream pop',
  'drum and bass',
  'edm',
  'emo',
  'folk',
  'funk',
  'future bass',
  'gospel',
  'grunge',
  'grime',
  'hip hop',
  'house',
  'indie',
  'j-pop',
  'jazz',
  'k-pop',
  'kids music',
  'metal',
  'new jack swing',
  'new wave',
  'opera',
  'pop',
  'punk',
  'raga',
  'rap',
  'reggae',
  'reggaeton',
  'rock',
  'rumba',
  'salsa',
  'samba',
  'sertanejo',
  'soul',
  'synthpop',
  'swing',
  'synthwave',
  'techno',
  'trap',
  'uk garage',
];
export const description = [
  'a bad breakup',
  'finding love on a rainy day',
  'a cozy rainy day',
  'dancing all night long',
  'dancing with you for the last time',
  'not being able to wait to see you again',
  "how you're always there for me",
  "when you're not around",
  'a faded photo on the mantel',
  'a literal banana',
  'wanting to be with you',
  'writing a face-melting guitar solo',
  'the place where we used to go',
  'being trapped in an AI song factory, help!',
];
