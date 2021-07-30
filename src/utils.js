import config from './config';

export const getArtistUrl = artist => `${config.api}/artists/${artist}`;

export const getArtistEventsUrl = artist => `${config.api}/artists/${artist}/events`;