import React from 'react';

const FileUpload = React.forwardRef<HTMLInputElement, {
  onChange: (data: any) => void;
}>((props, ref) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const fileReader = new FileReader();

    if (!e?.target?.files?.[0]) {
      props.onChange(null);
    }
  
    !!e?.target?.files?.[0] && fileReader.readAsText(e?.target?.files?.[0] as Blob || null, 'UTF-8');

    fileReader.onload = e => {
      props.onChange(JSON.parse(e?.target?.result as string));
    };
  };
  return (
    <>
      <input className='text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-violet-50 file:text-violet-700 hover:file:bg-violet-100' type='file' onChange={handleChange} accept='application/JSON' ref={ref} />
    </>
  );
});

export default FileUpload;