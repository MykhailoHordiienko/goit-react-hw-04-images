import React, { useState, useEffect } from 'react';
import { Button } from './Button/Button';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { Loader } from './Loader/Loader';
import { Searchbar } from './Searchbar/Searchbar';
import { getImages } from '../ApiSearch/AppiSearch.js';
import toast, { Toaster } from 'react-hot-toast';

export const App = () => {
  const [query, setQuery] = useState('');
  const [page, setPage] = useState(1);
  const [data, setData] = useState([]);
  const [loader, setLoader] = useState(false);

  useEffect(() => {
    if (query === '') {
      return;
    }
    async function getData() {
      try {
        loderControlTogle();
        const data = await getImages(query, page);
        if (data.data.hits.length <= 0) {
          toast('Change your request', {
            icon: '😱😨😰',
          });
        }
        const filteredData = data.data.hits.map(el => {
          const { id, webformatURL, largeImageURL, tags } = el;
          const renderData = { id, webformatURL, largeImageURL, tags };

          return renderData;
        });
        setData(prev => [...prev, ...filteredData]);
      } catch {
        toast.error('Oops, reload Please');
      } finally {
        loderControlTogle();
      }
    }
    getData();
  }, [page, query]);

  const handleSubmit = e => {
    e.preventDefault();
    const handleQuery = e.currentTarget.elements.query.value;
    if (query !== handleQuery) {
      setData([]);
      setPage(1);
      setQuery(handleQuery);
    }
  };

  const loadMore = () => {
    setPage(prev => prev + 1);
  };

  const loderControlTogle = () => {
    setLoader(prev => !prev);
  };

  return (
    <div className="app">
      <Searchbar onSubmit={handleSubmit} />
      <ImageGallery data={data} />
      {loader && <Loader />}
      {data.length > 0 && <Button loadMore={loadMore} />}
      <Toaster />
    </div>
  );
};
