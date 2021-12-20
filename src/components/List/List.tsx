import React from 'react';

type ListItem = {
  title: string;
  description: string;
  src: string;
};

interface Props {
  items: ListItem[];
}

const List: React.FC<Props> = ({ items }) => {
  return (
    <ul className='py-4 px-6 flex flex-col items-center'>
      {items.map((item, idx) => (
        <li key={idx} className='flex items-center w-[220px]'>
          <img src={item.src} alt={item.title} className='w-[48px] h-[48px] flex-initial'/>
          <p className='ml-6 flex-1'>{item.description}</p>
        </li>
      ))}
    </ul>
  )
};

export default List;