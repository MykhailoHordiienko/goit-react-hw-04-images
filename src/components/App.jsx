import React, { Component } from 'react';
import { Button } from './Button/Button';
import { ImageGallery } from './ImageGallery/ImageGallery';
// import { Loader } from './Loader/Loader';
import { Searchbar } from './Searchbar/Searchbar';
import { getImages } from './ApiSearch/AppiSearch.js';

export class App extends Component {
  state = {
    query: '',
    page: 1,
    data: [],
  };

  async componentDidMount() {
    try {
      const data = await getImages();
      this.setState({ data: data.data.hits });
    } catch (error) {
      console.log(error);
    }
  }
  componentDidUpdate(_, prevState) {
    if (prevState.query !== this.state.query) {
      this.getData();
    }
    if (prevState.page !== this.state.page) {
      this.getData();
    }
  }

  handleSubmit = e => {
    e.preventDefault();
    const query = e.currentTarget.elements.query.value;
    // this.setState({ query });
    this.setState(prevState => {
      if (prevState.query !== query) {
        return { query, page: 1, data: [] };
      }
    });
  };

  getData = async () => {
    const { query } = this.state;
    const { page } = this.state;
    try {
      const data = await getImages(query, page);

      this.setState(prevState => ({
        data: [...prevState.data, ...data.data.hits],
      }));
    } catch (error) {
      console.log(error);
    }
  };

  loadMore = () => {
    this.setState(prevState => ({
      page: prevState.page + 1,
    }));
  };

  render() {
    const { handleSubmit, loadMore } = this;
    const { data } = this.state;

    return (
      <div className="app">
        <Searchbar onSubmit={handleSubmit} />
        <ImageGallery data={data} />
        <Button loadMore={loadMore} />
        {/* <Loader /> */}
      </div>
    );
  }
}
