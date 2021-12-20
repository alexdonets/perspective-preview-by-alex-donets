import React, { useState, useRef } from 'react'
import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import FileUpload from '../src/components/FileUpload'
import Preview from '../src/components/Preview'
import Pagination from '../src/components/Pagination'

const Home: NextPage = () => {
  const [fileUploadBuffer, setFileUploadBuffer] = useState<any>();
  const [previewData, setPreviewData] = useState<any>();
  const [activePageIdx, setActivePageIdx] = useState<number>(0);
  const inputFile = useRef<HTMLInputElement>(null);

  const onFileUploaded = (data: any) => {
    setFileUploadBuffer(data)
  }

  const triggerUpload = () => {
    inputFile?.current?.click();
  }

  const triggerPreview = () => {
    setPreviewData(fileUploadBuffer);
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

      <main className='flex flex-col items-center space-y-4 py-12'>
        <h1 className={styles.title}>
          Welcome to Perspective Preview 🎉
        </h1>

        <h3 className='h-6'>
          {previewData?.name}
        </h3>

        <Preview previewContent={previewData} activePageIdx={activePageIdx} />

        <Pagination pageCount={previewData?.pages?.length} activePageIdx={activePageIdx} onActivePageIdxChange={onActivePageIdxChange} />

        <FileUpload onChange={onFileUploaded} ref={inputFile} />

        <button className="bg-sky-600 hover:bg-sky-700 h-10 px-5 text-indigo-100 transition-colors duration-150 rounded-full focus:shadow-outline" onClick={triggerPreview}>Preview 🚀</button>

      </main>
    </div>
  )
}

export default Home
