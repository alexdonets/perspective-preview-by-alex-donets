import React from 'react';
import Button, { ButtonProps } from '../Button';
import Image, { ImageProps } from '../Image';
import List, { ListProps } from '../List';
import Text, { TextProps } from '../Text';

const componentMap = {
  button: Button,
  image: Image,
  list: List,
  text: Text
}

type Block = {
  type: 'button' | 'image' | 'list' | 'text';
  [key: string]: string;
} & ButtonProps & ImageProps & ListProps & TextProps

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
    return <div className={`bg-red-400 w-[375px] h-[600px] shadow-md`}/>
  }

  const blocks = previewContent.pages[activePageIdx].blocks;

  return (
    <div className='w-[375px] sm:h-[600px] flex flex-col items-center overflow-auto items-stretch shadow-md' style={{ background: previewContent.bgColor }}>
      {blocks.map((block, idx) => {
        const Component = componentMap[block.type];
        return <Component {...block} key={idx} />;
      })}
    </div>
  );
};

Preview.displayName = 'Preview';

export default Preview;