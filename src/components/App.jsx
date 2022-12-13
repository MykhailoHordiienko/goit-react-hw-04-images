import React, { Component } from 'react';
import { Button } from './Button/Button';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { Loader } from './Loader/Loader';
import { Searchbar } from './Searchbar/Searchbar';
import { getImages } from './ApiSearch/AppiSearch.js';

export class App extends Component {
  state = {
    query: '',
    page: 1,
    data: [],
    loader: false,
  };

  async componentDidMount() {
    this.loderControlTogle();

    try {
      const data = await getImages();
      this.setState({ data: data.data.hits });
    } catch (error) {
      console.log(error);
    }
    this.loderControlTogle();
  }

  componentDidUpdate(_, prevState) {
    if (prevState.query !== this.state.query) {
      this.getData();
    }
    if (prevState.page !== this.state.page && this.state.page !== 1) {
      this.getData();
    }
  }

  handleSubmit = e => {
    e.preventDefault();
    const query = e.currentTarget.elements.query.value;
    this.setState(prevState => {
      if (prevState.query !== query) {
        return { query, page: 1, data: [] };
      }
    });
  };

  getData = async () => {
    const { query } = this.state;
    const { page } = this.state;
    this.loderControlTogle();
    try {
      const data = await getImages(query, page);

      this.setState(prevState => ({
        data: [...prevState.data, ...data.data.hits],
      }));
    } catch (error) {
      console.log(error);
    }
    this.loderControlTogle();
  };

  loadMore = () => {
    this.setState(prevState => ({
      page: prevState.page + 1,
    }));
  };

  loderControlTogle = () => {
    this.setState(prevState => ({
      loader: !prevState.loader,
    }));
  };

  render() {
    const { handleSubmit, loadMore } = this;
    const { data, loader } = this.state;

    return (
      <div className="app">
        <Searchbar onSubmit={handleSubmit} />
        {loader && <Loader />}
        <ImageGallery data={data} />
        {data.length > 0 && <Button loadMore={loadMore} />}
      </div>
    );
  }
}
