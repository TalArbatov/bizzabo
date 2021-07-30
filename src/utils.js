import config from './config';

export const getArtistUrl = artist => `${config.API_URL}/artists/${artist}`;

export const getArtistEventsUrl = artist => `${config.API_URL}/artists/${artist}/events`;