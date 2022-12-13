import { MagnifyingGlass } from 'react-loader-spinner';
import React from 'react';

export const Loader = () => {
  return (
    <MagnifyingGlass
      visible={true}
      height="600"
      width="600"
      ariaLabel="MagnifyingGlass-loading"
      wrapperStyle={{}}
      wrapperClass="MagnifyingGlass-wrapper"
      glassColor="#c0efff"
      color="#e15b64"
    />
  );
};
