import { connect } from 'react-redux';

import { fetchImages, clearImages } from '../../redux/actions/images';

import ImagesView from './component.tsx';

const mapStateToProps = (state) => ({
  images: state.images.images.map((item) => ({
    ...item, isFavourite: state.favourites.favourites.some((fav) => fav.name === item.name),
  })),
  fetchFinished: state.images.finished,
  fetchError: state.images.error,
  meta: state.images.meta,
});

export default connect(
  mapStateToProps,
  { fetchImages, clearImages },
)(ImagesView);
