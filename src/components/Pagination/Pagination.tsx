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
        return activePageIdx === pageIdx ? (
          <span 
            className='ml-2 cursor-pointer text-violet-700 text-md font-semibold'
            key={pageIdx}
          >
            {pageIdx + 1}
          </span>
        ) : (
          <span 
            className='ml-2 cursor-pointer text-slate-500 text-sm hover:text-violet-600 transition-colors duration-150'
            onClick={() => { onActivePageIdxChange(pageIdx) }}
            key={pageIdx}
          >
            {pageIdx + 1}
          </span>
        );
      })}
    </div>);
};

Pagination.displayName = 'Pagination';

export default Pagination;