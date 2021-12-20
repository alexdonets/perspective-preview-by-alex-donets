import React from 'react';

interface Props {
  pageCount?: number;
  activePageIdx: number;
  onActivePageIdxChange: (pageIdx: number) => void;
}

const Pagination: React.FC<Props> = ({ pageCount = 0, activePageIdx, onActivePageIdxChange }) => {
  const pageList = Array.from({length: pageCount}, (v, i) => i)
  return (
    <div className='h-6'>
      {pageList.map(pageIdx => {
        return (
          <span 
            className='ml-2 cursor-pointer'
            key={pageIdx}
            {...(activePageIdx === pageIdx ?
              { style: { color: 'black' } } :
              { 
                onClick: () => { onActivePageIdxChange(pageIdx) }, 
                style: { color: 'blue', textDecoration: 'underline' }
              }
            )}>
            {pageIdx + 1}
          </span>
        );
      })}
    </div>);
};

Pagination.displayName = 'Pagination';

export default Pagination;