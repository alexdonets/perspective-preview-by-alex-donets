import React from 'react';

export interface Props {
  text: string;
  color: string;
  bgColor: string;
}

const Button: React.FC<Props> = ({ text, color, bgColor }) => {
  return <button style={{ background: bgColor, color }} className='m-6 px-6 py-4 transition-opacity duration-150 rounded-md focus:shadow-outline hover:opacity-80 font-sans'>{text}</button>
};

export default Button;