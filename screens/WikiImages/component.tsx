import * as React from 'react';

import SearchList from '../../components/SearchList';

interface WikiItem {
  name: string;
  url: string;
  user: string;
  isFavourite?: boolean;
}

interface Props {
  images: Array<WikiItem>;
  fetchFinished: boolean;
  fetchError: boolean;
  fetchImages: Function;
  clearImages: Function;
  meta: {
    gaicontinue: string;
  }
}

export default class ImagesScreen extends React.PureComponent<Props> {
  componentWillUnmount() {
    this.props.clearImages();
  }

  fetchNextPage = (search: string) => {
    const { meta: { gaicontinue }, fetchImages } = this.props;

    if (gaicontinue && this.props.fetchFinished) fetchImages(search, gaicontinue);
  }

  render() {
    return (
      <SearchList
        data={this.props.images}
        type="wiki"
        onFetchData={this.props.fetchImages}
        onEndReached={this.fetchNextPage}
        loading={!this.props.fetchFinished}
        error={this.props.fetchError}
      />
    );
  }
}
