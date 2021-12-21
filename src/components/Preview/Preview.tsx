import React from 'react';
import Button, { ButtonProps } from '../Button';
import Image, { ImageProps } from '../Image';
import List, { ListProps } from '../List';
import Text, { TextProps } from '../Text';

export interface PreviewData {
  name: string;
  bgColor: string;
  pages: Page[];
}

type Block = {
  type: 'button' | 'image' | 'list' | 'text';
} & (ButtonProps | ImageProps | ListProps | TextProps)

type Page = {
  blocks: Block[];
}

export interface Props {
  previewContent?: PreviewData;
  activePageIdx?: number;
}

const Preview: React.FC<Props> = ({ previewContent, activePageIdx = 0 }) => {
  if (!previewContent) {
    return <div className={`bg-slate-100 w-[375px] h-[600px] shadow-md rounded-md`}/>
  }
  // Select blocks to render on current page
  const blocks = previewContent.pages[activePageIdx].blocks;

  return (
    <div
      className={`w-[375px] h-[600px] flex flex-col items-center overflow-auto items-stretch shadow-md rounded-md`}
      style={{ background: previewContent.bgColor }}
      data-testid='preview-box'
    >
      {blocks.map((block, idx) => {
        switch (block.type) {
          case 'button':
            return <Button key={idx} {...block as ButtonProps} />;
          case 'image':
            return <Image key={idx} {...block as ImageProps} />;
          case 'list':
            return <List key={idx} {...block as ListProps} />;
          case 'text':
            return <Text key={idx} {...block as TextProps} />;
          default:
            return;
        }
      })}
    </div>
  );
};

Preview.displayName = 'Preview';

export default Preview;