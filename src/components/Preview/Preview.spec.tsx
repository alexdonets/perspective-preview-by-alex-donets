import React from 'react';
import { mount, ReactWrapper } from 'enzyme';
import Preview, { Props } from './Preview';
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

const DEFAULT_PROPS: Props = {
    previewContent: {
      name: 'test name',
      bgColor: '#fcba03',
      pages: [
        {
          blocks: [
            {
              type: 'image',
              src: 'test'
            },
            {
              type: 'button',
              text: 'test',
              color: 'white',
              bgColor: '#0029cc'
            }
          ]
        },
        {
          blocks: [
            {
              type: 'text',
              text: 'test text',
              color: 'black',
              align: 'center'
            },
            {
              type: 'list',
              items: [
                {
                  title: 'test title 1',
                  description: 'test desc 1',
                  src: 'test src 1'
                },
                {
                  title: 'test title 2',
                  description: 'test desc 2',
                  src: 'test src 2'
                }
              ]
            }
          ]
        }
      ]
    },
    activePageIdx: 0
};

describe('<Preview />', () => {
  describe('Default view with no preview data', () => {
    let component: ReactWrapper;
    beforeAll(() => {
      component = mount(<Preview activePageIdx={0} />);
    });
    
    it('renders with a default background color', () => {
      const previewBgColorClass = component.find('.bg-slate-100');
      expect(previewBgColorClass.length).toBe(1);
    });
  });

  describe('With Preview data props', () => {
    let component: ReactWrapper;
    beforeAll(() => {
      component = mount(<Preview {...DEFAULT_PROPS} />);
    });
    
    it('renders with the passed background color', () => {
      const previewBox = component.find('[data-testid="preview-box"]');
      expect(previewBox.props().style?.background).toBe(DEFAULT_PROPS.previewContent?.bgColor);
    });

    it('renders all elements from an active page', () => {
      const activePageBlocks = DEFAULT_PROPS.previewContent?.pages[DEFAULT_PROPS.activePageIdx as number].blocks
      const previewBox = component.find('[data-testid="preview-box"]');
      activePageBlocks?.forEach(block => {
        const componentToTest = componentMap[block.type];
        expect(previewBox.find(componentToTest).length).toBeGreaterThanOrEqual(1);
      })
    });
  });
});
