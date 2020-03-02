import * as React from 'react';

import SearchList from '@components/SearchList';

import { WikiItem } from '@constants/interfaces';

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
  componentWillUnmount(): void {
    const { clearImages } = this.props;

    clearImages();
  }

  fetchNextPage = (search: string): void => {
    const { meta: { gaicontinue }, fetchImages, fetchFinished } = this.props;

    if (gaicontinue && fetchFinished) fetchImages(search, gaicontinue);
  }

  render(): JSX.Element {
    const {
      images, fetchImages, fetchFinished, fetchError,
    } = this.props;

    return (
      <SearchList
        data={images}
        type="wiki"
        onFetchData={fetchImages}
        onEndReached={this.fetchNextPage}
        loading={!fetchFinished}
        error={fetchError}
      />
    );
  }
}
