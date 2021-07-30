import config from './config';

export const getArtist = artist => `${config.api}/artists/${artist}`;
