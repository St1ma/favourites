import config from '../config.json';

export const MOVIES_LIST = (search = '', page = 1) => `http://www.omdbapi.com/?s=${search}&page=${page}&apikey=${config.omdbApiKey}`;
export const IMAGES_LIST = (search = '', gaicontinue = '') => `https://en.wikipedia.org/w/api.php?action=query&list=allimages&aiprop=user%7Ctimestamp%7Curl&aisort=name&format=json&aifrom=${search}${gaicontinue ? `&aicontinue=${gaicontinue}` : ''}`;
