import React from 'react';

export interface Props {
  src: string;
}

const Image: React.FC<Props> = ({ src }) => {
  return <img src={src} alt='img' />
};

export default Image;