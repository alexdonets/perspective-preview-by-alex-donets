import React from 'react';

export interface Props {
  text: string;
  color: string;
  align: 'start' | 'end' | 'left' | 'right' | 'center' | 'justify' | 'match-parent';
}

const Text: React.FC<Props> = ({ text, color, align }) => {
  return <p style={{ color, textAlign: align }} className='px-6 py-4'>{text}</p>
};

export default Text;