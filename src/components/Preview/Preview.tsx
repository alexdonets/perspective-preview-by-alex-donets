import React from 'react';
import Button from '../Button';
import Image from '../Image';
import List from '../List';
import Text from '../Text';

const componentMap = {
  button: Button,
  image: Image,
  list: List,
  text: Text
}

type Block = {
  type: 'button' | 'image' | 'list' | 'text';
  [key: string]: string;
}

type Page = {
  blocks: Block[];
}

interface Props {
  previewContent: {
    name: string;
    bgColor: string;
    pages: Page[];
  };
  activePageIdx: number;
}

const Preview: React.FC<Props> = ({ previewContent, activePageIdx }) => {
  if (!previewContent) {
    return <div className={`bg-red-400 w-[375px] h-[600px]`}/>
  }

  const blocks = previewContent.pages[activePageIdx].blocks;

  return (
    <div className='w-[375px] h-[600px] flex flex-col items-center overflow-scroll items-stretch' style={{ background: previewContent.bgColor }}>
      {blocks.map((block, idx) => {
        const Component = componentMap[block.type];
        return <Component {...block} key={idx} />;
      })}
    </div>
  );
};

export default Preview;