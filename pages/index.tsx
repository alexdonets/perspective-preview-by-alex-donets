import React, { useState, useRef } from 'react'
import type { NextPage } from 'next'
import Head from 'next/head'
import FileUpload from '../src/components/FileUpload'
import Preview, { PreviewData } from '../src/components/Preview'
import Pagination from '../src/components/Pagination'

const Home: NextPage = () => {
  const [fileUploadBuffer, setFileUploadBuffer] = useState<PreviewData>();
  const [previewData, setPreviewData] = useState<PreviewData>();
  const [activePageIdx, setActivePageIdx] = useState<number>(0);

  const onFileUploaded = (data: PreviewData) => {
    setFileUploadBuffer(data)
  }

  const triggerPreview = () => {
    setPreviewData(fileUploadBuffer);
    // Reset active page
    setActivePageIdx(0);
  }

  const onActivePageIdxChange = (newIdx: number) => {
    setActivePageIdx(newIdx);
  }

  return (
    <div>
      <Head>
        <title>Perspective Preview 🎉</title>
        <meta name='description' content='Created by Alexander Donets' />
        <link rel='icon' href='/perspective_logo.ico' />
      </Head>

      <main className='flex flex-col items-center space-y-4 py-4 sm:py-12'>
        <h1 className='text-2xl'>
          Welcome to Perspective Preview 🎉
        </h1>

        <h3 className='h-6 font-semibold text-violet-700'>
          {previewData?.name}
        </h3>

        <Preview previewContent={previewData as PreviewData} activePageIdx={activePageIdx} />

        <Pagination pageCount={previewData?.pages?.length} activePageIdx={activePageIdx} onActivePageIdxChange={onActivePageIdxChange} />

        <FileUpload onChange={onFileUploaded} />

        <button className='bg-violet-700 hover:bg-violet-600 shadow-xl h-10 px-5 text-white transition-colors duration-150 rounded-full focus:shadow-outline' onClick={triggerPreview}>Preview 🚀</button>

      </main>
    </div>
  )
}

export default Home
