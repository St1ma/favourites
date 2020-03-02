export interface WikiItem {
  name: string;
  url: string;
  user: string;
  isFavourite?: boolean;
  type?: 'wiki';
}

export interface MovieItem {
  imdbID: string;
  Poster: string;
  Title: string;
  Year: string;
  isFavourite?: boolean;
  type?: 'movie';
}

export interface ReduxState {
  movies: {
    movies: Array<MovieItem>;
    error: boolean;
    finished: boolean;
    meta: {
      page: number;
      total: number;
    };
  };
  images: {
    images: Array<WikiItem>;
    error: boolean;
    finished: boolean;
    meta: {
      gaicontinue?: string;
    };
  };
  favourites: {
    favourites: Array<WikiItem>|Array<MovieItem>;
  };
}
