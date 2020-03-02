import { connect } from 'react-redux';

import { fetchImages, clearImages } from '@redux/actions/images';

import { ReduxState, WikiItem } from '@constants/iterfaces';

import ImagesView from './component';

const mapStateToProps = (state: ReduxState): object => ({
  images: state.images.images.map((item: WikiItem) => ({
    ...item,
    isFavourite: state.favourites.favourites.some((fav: WikiItem) => fav.name === item.name),
  })),
  fetchFinished: state.images.finished,
  fetchError: state.images.error,
  meta: state.images.meta,
});

export default connect(
  mapStateToProps,
  { fetchImages, clearImages },
)(ImagesView);
